import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/section/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 items-center justify-center bg-">
        <Hero />
      </main>
      <Footer/>
    </>
  );
}
