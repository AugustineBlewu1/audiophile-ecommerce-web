import BearSection from "@/components/BearSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Speakers from "@/components/Speakers";

export default function Home() {
  return (
    <main className="  ">
      {/* navbar section */}
      <Navbar></Navbar>
      {/* hero  section */}
      <Hero></Hero>
      {/* speakers  section */}
      <Speakers />
      <BearSection />

      <Footer />
    </main>
  );
}
