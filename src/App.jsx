// src/App.jsx
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AutoSection from "./components/AutoSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex">
      {/* Sidebar always visible on desktop, toggle on mobile */}
      <Sidebar />
      {/* On mobile, no margin; On desktop, margin for sidebar */}
      <main className="w-full md:ml-56">
        <Header />
        <Hero />
        <AutoSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
