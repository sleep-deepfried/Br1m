import Image from "next/image";

import Navbar from "@components/navbar";
import Hero from "@components/hero";
import Footer from "@components/footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
