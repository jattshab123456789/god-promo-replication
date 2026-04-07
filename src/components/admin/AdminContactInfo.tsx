import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { Save } from "lucide-react";

const AdminContactInfo = () => {
  const [fields, setFields] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    supabase.from("contact_info").select("key, value").then(({ data }) => {
      const map: Record<string, string> = {};
      data?.forEach((r: any) => { map[r.key] = r.value; });
      setFields(map);
      setLoading(false);
    });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    for (const [key, value] of Object.entries(fields)) {
      await supabase.from("contact_info").upsert({ key, value, updated_at: new Date().toISOString() }, { onConflict: "key" });
    }
    await queryClient.invalidateQueries({ queryKey: ["contact-info"] });
    setSaving(false);
    toast({ title: "Contact info saved!" });
  };

  if (loading) return <div className="text-muted-foreground">Loading...</div>;

  const contactFields = [
    { key: "email", label: "Email Address", type: "email" },
    { key: "phone", label: "Phone Number", type: "tel" },
    { key: "whatsapp", label: "WhatsApp Number (without +)", type: "text" },
    { key: "address", label: "Address", type: "text" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-foreground">Contact Information</h2>
      <div className="grid gap-4">
        {contactFields.map(({ key, label, type }) => (
          <div key={key}>
            <Label>{label}</Label>
            <Input
              type={type}
              value={fields[key] || ""}
              onChange={(e) => setFields({ ...fields, [key]: e.target.value })}
              className="mt-1"
            />
          </div>
        ))}
      </div>
      <Button onClick={handleSave} disabled={saving}>
        <Save className="w-4 h-4 mr-2" /> {saving ? "Saving..." : "Save Changes"}
      </Button>
    </div>
  );
};

export default AdminContactInfo;
