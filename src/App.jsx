import { useState } from "react";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HireModal from "./components/HireModal";
import BioSection from "./components/BioSection";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onOpenModal={openModal} />
      <HeroSection />
      <HireModal isOpen={isModalOpen} onClose={closeModal} />
      <BioSection />
      <WhatsAppButton />
      <ScrollToTopButton />
    </>
  );
}

export default App;
