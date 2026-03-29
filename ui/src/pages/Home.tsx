import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/home/Hero';
import { LatestListings } from '@/components/home/LatestListings';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Footer } from '@/components/layout/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <LatestListings />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Home;