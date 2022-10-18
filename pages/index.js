import { AdvanceFacial } from "../components/AdvanceFacial";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { OccasionalPackage } from "../components/OccasionalPackage";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AdvanceFacial />
      <OccasionalPackage />
    </div>
  );
}
