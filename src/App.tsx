import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import WaterIonisers from "./pages/WaterIonisers.tsx";
import AlkalineWaterIonisers from "./pages/AlkalineWaterIonisers.tsx";
import WaterPurifiers from "./pages/WaterPurifiers.tsx";
import EMDescaler from "./pages/EMDescaler.tsx";
import MagneticDescaler from "./pages/MagneticDescaler.tsx";
import ScaleExtractor from "./pages/ScaleExtractor.tsx";
import ShowerFilter from "./pages/ShowerFilter.tsx";
import ThreeInOne from "./pages/ThreeInOne.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Contacts from "./pages/Contacts.tsx";
import C9Electromagnetic from "./pages/C9Electromagnetic.tsx";
import ApplicationPage from "./pages/ApplicationPage.tsx";
import Blog from "./pages/Blog.tsx";
import FAQsPage from "./pages/FAQsPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/water-ionisers" element={<WaterIonisers />} />
          <Route path="/alkaline-water-ionisers" element={<AlkalineWaterIonisers />} />
          <Route path="/water-purifiers" element={<WaterPurifiers />} />
          <Route path="/em-descaler" element={<EMDescaler />} />
          <Route path="/magnetic-descaler" element={<MagneticDescaler />} />
          <Route path="/scale-extractor" element={<ScaleExtractor />} />
          <Route path="/shower-filter" element={<ShowerFilter />} />
          <Route path="/three-in-one" element={<ThreeInOne />} />
          <Route path="/technology/c9-electromagnetic" element={<C9Electromagnetic />} />
          <Route path="/applications/:type" element={<ApplicationPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<FAQsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
