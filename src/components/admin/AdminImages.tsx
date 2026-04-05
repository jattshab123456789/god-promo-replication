import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, Trash2 } from "lucide-react";

const AdminImages = () => {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [category, setCategory] = useState("general");
  const { toast } = useToast();

  const fetchImages = async () => {
    const { data } = await supabase
      .from("site_media")
      .select("*")
      .eq("media_type", "image")
      .order("display_order");
    setImages(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchImages(); }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);

    const path = `${category}/${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from("site-images").upload(path, file);
    if (uploadError) {
      toast({ title: "Upload failed", description: uploadError.message, variant: "destructive" });
      setUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage.from("site-images").getPublicUrl(path);
    await supabase.from("site_media").insert({
      category,
      media_type: "image",
      url: publicUrl,
      storage_path: path,
      label: file.name,
      display_order: images.length,
    });

    setUploading(false);
    toast({ title: "Image uploaded!" });
    fetchImages();
  };

  const handleDelete = async (item: any) => {
    if (item.storage_path) {
      await supabase.storage.from("site-images").remove([item.storage_path]);
    }
    await supabase.from("site_media").delete().eq("id", item.id);
    toast({ title: "Image deleted" });
    fetchImages();
  };

  if (loading) return <div className="text-muted-foreground">Loading...</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-foreground">Manage Images</h2>
      
      <div className="flex gap-4 items-end">
        <div>
          <Label>Category</Label>
          <Input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g. hero, testimonials"
            className="mt-1"
          />
        </div>
        <div>
          <Label>Upload Image</Label>
          <div className="mt-1">
            <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              <Upload className="w-4 h-4" />
              {uploading ? "Uploading..." : "Choose File"}
              <input type="file" accept="image/*" onChange={handleUpload} className="hidden" disabled={uploading} />
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.id} className="relative group rounded-xl overflow-hidden border border-border">
            <img src={img.url} alt={img.label || ""} className="w-full h-40 object-cover" />
            <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Button variant="destructive" size="sm" onClick={() => handleDelete(img)}>
                <Trash2 className="w-4 h-4 mr-1" /> Delete
              </Button>
            </div>
            <div className="p-2 text-xs text-muted-foreground">{img.category} • {img.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminImages;
