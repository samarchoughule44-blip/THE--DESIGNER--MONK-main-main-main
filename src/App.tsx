import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ImageGallery from "./pages/ImageGallery";
import Login from "./pages/admin/Login";
import AddDesign from "./pages/admin/Design-add";
import EditDesign from "./pages/admin/Design-edit";


// ⭐ ADD THIS
import WhatsAppButton from "./components/WhatsAppButton";
import Chatbot from "./components/Chatbot";

const AppContent = () => {
  const location = useLocation();
  const isGalleryPage = location.pathname === '/gallery';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {!isGalleryPage && <Navigation />}

      <main className={isGalleryPage ? "" : "flex-1"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/designs/add" element={<AddDesign />} />
          <Route path="/admin/designs/edit/:id" element={<EditDesign />} />

        </Routes>
      </main>

      {!isGalleryPage && (
        <>
          <WhatsAppButton />
          <Chatbot />
          <Footer />
        </>
      )}
    </div>
  );
};

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
