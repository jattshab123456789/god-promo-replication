import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";

const AdminTextContent = () => {
  const [fields, setFields] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    supabase.from("site_content").select("key, value").then(({ data }) => {
      const map: Record<string, string> = {};
      data?.forEach((r: any) => { map[r.key] = r.value; });
      setFields(map);
      setLoading(false);
    });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    for (const [key, value] of Object.entries(fields)) {
      await supabase.from("site_content").upsert({ key, value, updated_at: new Date().toISOString() }, { onConflict: "key" });
    }
    setSaving(false);
    toast({ title: "Content saved!" });
  };

  if (loading) return <div className="text-muted-foreground">Loading...</div>;

  const textFields = [
    { key: "hero_badge", label: "Hero Badge Text", multiline: false },
    { key: "hero_heading_1", label: "Hero Heading Line 1", multiline: false },
    { key: "hero_heading_2", label: "Hero Heading Line 2", multiline: false },
    { key: "hero_heading_3", label: "Hero Heading Line 3 (gradient)", multiline: false },
    { key: "hero_subheading", label: "Hero Subheading", multiline: true },
    { key: "cta_label", label: "CTA Section Label", multiline: false },
    { key: "cta_heading", label: "CTA Section Heading", multiline: false },
    { key: "footer_description", label: "Footer Description", multiline: true },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-foreground">Text Content</h2>
      <div className="grid gap-4">
        {textFields.map(({ key, label, multiline }) => (
          <div key={key}>
            <Label>{label}</Label>
            {multiline ? (
              <Textarea
                value={fields[key] || ""}
                onChange={(e) => setFields({ ...fields, [key]: e.target.value })}
                className="mt-1"
                rows={3}
              />
            ) : (
              <Input
                value={fields[key] || ""}
                onChange={(e) => setFields({ ...fields, [key]: e.target.value })}
                className="mt-1"
              />
            )}
          </div>
        ))}
      </div>
      <Button onClick={handleSave} disabled={saving}>
        <Save className="w-4 h-4 mr-2" /> {saving ? "Saving..." : "Save Changes"}
      </Button>
    </div>
  );
};

export default AdminTextContent;
