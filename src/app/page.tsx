import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="bg-[#191919] px-24  ">
      {/* navbar section */}
      <Navbar></Navbar>
      {/* hero  section */}
      <Hero></Hero>
    </main>
  );
}
