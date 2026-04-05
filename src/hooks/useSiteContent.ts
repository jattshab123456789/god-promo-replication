import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useSiteContent = () => {
  return useQuery({
    queryKey: ["site-content"],
    queryFn: async () => {
      const { data } = await supabase.from("site_content").select("key, value");
      const map: Record<string, string> = {};
      data?.forEach((row: any) => { map[row.key] = row.value; });
      return map;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useContactInfo = () => {
  return useQuery({
    queryKey: ["contact-info"],
    queryFn: async () => {
      const { data } = await supabase.from("contact_info").select("key, value");
      const map: Record<string, string> = {};
      data?.forEach((row: any) => { map[row.key] = row.value; });
      return map;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useSiteMedia = (category?: string) => {
  return useQuery({
    queryKey: ["site-media", category],
    queryFn: async () => {
      let query = supabase.from("site_media").select("*").order("display_order");
      if (category) query = query.eq("category", category);
      const { data } = await query;
      return data || [];
    },
    staleTime: 1000 * 60 * 5,
  });
};
