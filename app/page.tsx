import Navbar from '../src/components/nav/Navbar';

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-primary">
      <div className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between sm:items-start">
        <Navbar />
      </div>
    </main>
  );
}
