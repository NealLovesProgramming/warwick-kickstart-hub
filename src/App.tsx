import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Xelerate from "./pages/Xelerate";
import XelerateApply from "./pages/XelerateApply";
import Team from "./pages/Team";
import AlphaSights from "./pages/AlphaSights";
import More from "./pages/More";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/xelerate" element={<Xelerate />} />
          <Route path="/xelerate/apply" element={<XelerateApply />} />
          <Route path="/team" element={<Team />} />
          <Route path="/alphasights" element={<AlphaSights />} />
          <Route path="/more" element={<More />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
