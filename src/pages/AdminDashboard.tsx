import { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LogOut, Contact, FileText, Image, Video } from "lucide-react";

const AdminContactInfo = lazy(() => import("@/components/admin/AdminContactInfo"));
const AdminTextContent = lazy(() => import("@/components/admin/AdminTextContent"));
const AdminImages = lazy(() => import("@/components/admin/AdminImages"));
const AdminVideos = lazy(() => import("@/components/admin/AdminVideos"));

const TabLoader = () => <div className="text-muted-foreground py-8 text-center">Loading...</div>;

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("contact");

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
        <Tabs value={activeTab} onValueChange={setActiveTab}>
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

          <TabsContent value="contact">
            {activeTab === "contact" && <Suspense fallback={<TabLoader />}><AdminContactInfo /></Suspense>}
          </TabsContent>
          <TabsContent value="text">
            {activeTab === "text" && <Suspense fallback={<TabLoader />}><AdminTextContent /></Suspense>}
          </TabsContent>
          <TabsContent value="images">
            {activeTab === "images" && <Suspense fallback={<TabLoader />}><AdminImages /></Suspense>}
          </TabsContent>
          <TabsContent value="videos">
            {activeTab === "videos" && <Suspense fallback={<TabLoader />}><AdminVideos /></Suspense>}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
