import { Hero } from '../components/Hero';
import { BrandLogos } from '../components/BrandLogos';
import { BrowseVehicleType } from '../components/BrowseVehicleType';
import { FeaturedVehicles } from '../components/FeaturedVehicles';
import { Benefits } from '../components/Benefits';
import { Testimonials } from '../components/Testimonials';
import { Process } from '../components/Process';
import { Differentiators } from '../components/Differentiators';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <>
      <Hero />
      <BrandLogos />
      <BrowseVehicleType />
      <FeaturedVehicles />
      <Benefits />
      <Process />
      <Differentiators />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
