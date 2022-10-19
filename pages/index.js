import { AdvanceFacial } from "../components/AdvanceFacial";
import { AdvanceFacialOne } from "../components/AdvanceFacialOne";
import { Beauyreatment } from "../components/Beauyreatment";
import { ContactUs } from "../components/ContactUs";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { OccasionalPackage } from "../components/OccasionalPackage";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AdvanceFacial />
      <AdvanceFacialOne />
      <OccasionalPackage />
      <Beauyreatment />
      <ContactUs />
    </div>
  );
}
