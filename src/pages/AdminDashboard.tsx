import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LogOut, Contact, FileText, Image, Video } from "lucide-react";
import AdminContactInfo from "@/components/admin/AdminContactInfo";
import AdminTextContent from "@/components/admin/AdminTextContent";
import AdminImages from "@/components/admin/AdminImages";
import AdminVideos from "@/components/admin/AdminVideos";

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-foreground">Loading...</div>;
  if (!user || !isAdmin) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">
          GOD <span className="text-primary">PROMO</span> Admin
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">{user.email}</span>
          <Button variant="outline" size="sm" onClick={() => { signOut(); navigate("/admin/login"); }}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </header>

      <div className="container max-w-5xl py-8 px-4">
        <Tabs defaultValue="contact">
          <TabsList className="grid grid-cols-4 w-full mb-8">
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Contact className="w-4 h-4" /> Contact
            </TabsTrigger>
            <TabsTrigger value="text" className="flex items-center gap-2">
              <FileText className="w-4 h-4" /> Text
            </TabsTrigger>
            <TabsTrigger value="images" className="flex items-center gap-2">
              <Image className="w-4 h-4" /> Images
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="w-4 h-4" /> Videos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contact"><AdminContactInfo /></TabsContent>
          <TabsContent value="text"><AdminTextContent /></TabsContent>
          <TabsContent value="images"><AdminImages /></TabsContent>
          <TabsContent value="videos"><AdminVideos /></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
