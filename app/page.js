import Cards from "@/components/cards";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import HowToContribute from "@/components/howtocon";
import Navbar from "@/components/Navbar";
import SecretStats from "@/components/section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SecretStats />
      <HowToContribute />
      <Cards />
      <Footer />
    </>
  );
}
