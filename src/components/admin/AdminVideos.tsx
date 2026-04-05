import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload, Trash2 } from "lucide-react";

const VIDEO_CATEGORIES = ["Infograph", "Talking Head", "Documentary", "Real Estate", "Games", "Showreel"];

const AdminVideos = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [category, setCategory] = useState("Infograph");
  const { toast } = useToast();

  const fetchVideos = async () => {
    const { data } = await supabase
      .from("site_media")
      .select("*")
      .eq("media_type", "video")
      .order("category")
      .order("display_order");
    setVideos(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchVideos(); }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);

    const path = `${category}/${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from("site-videos").upload(path, file);
    if (uploadError) {
      toast({ title: "Upload failed", description: uploadError.message, variant: "destructive" });
      setUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage.from("site-videos").getPublicUrl(path);
    const catVideos = videos.filter(v => v.category === category);
    await supabase.from("site_media").insert({
      category,
      media_type: "video",
      url: publicUrl,
      storage_path: path,
      label: file.name,
      display_order: catVideos.length,
    });

    setUploading(false);
    toast({ title: "Video uploaded!" });
    fetchVideos();
  };

  const handleDelete = async (item: any) => {
    if (item.storage_path) {
      await supabase.storage.from("site-videos").remove([item.storage_path]);
    }
    await supabase.from("site_media").delete().eq("id", item.id);
    toast({ title: "Video deleted" });
    fetchVideos();
  };

  if (loading) return <div className="text-muted-foreground">Loading...</div>;

  const groupedVideos = VIDEO_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = videos.filter(v => v.category === cat);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-foreground">Manage Videos</h2>

      <div className="flex gap-4 items-end">
        <div>
          <Label>Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-48 mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {VIDEO_CATEGORIES.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Upload Video</Label>
          <div className="mt-1">
            <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              <Upload className="w-4 h-4" />
              {uploading ? "Uploading..." : "Choose File"}
              <input type="file" accept="video/*" onChange={handleUpload} className="hidden" disabled={uploading} />
            </label>
          </div>
        </div>
      </div>

      {VIDEO_CATEGORIES.map((cat) => {
        const catVideos = groupedVideos[cat];
        if (!catVideos?.length) return null;
        return (
          <div key={cat}>
            <h3 className="text-md font-semibold text-foreground mb-3">{cat} ({catVideos.length})</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {catVideos.map((vid: any) => (
                <div key={vid.id} className="relative group rounded-xl overflow-hidden border border-border">
                  <video src={vid.url} className="w-full h-40 object-cover" muted />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(vid)}>
                      <Trash2 className="w-4 h-4 mr-1" /> Delete
                    </Button>
                  </div>
                  <div className="p-2 text-xs text-muted-foreground">{vid.label}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminVideos;
