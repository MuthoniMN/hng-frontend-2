import Image from "next/image";
import HeroHome from "../components/HeroHome";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <main>
      <HeroHome />
      <h2 className="bg-white py-4 px-8 w-full text-2xl">Exclusive offers for you</h2>
      <ProductSection />
    </main>
  );
}
