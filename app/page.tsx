import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 items-center justify-center">
        <Hero />
        <Services />
      </main>
      <Footer />
    </>
  );
}