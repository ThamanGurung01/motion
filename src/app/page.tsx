import Marquee from "@/components/MarqueeContainer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <header className="fixed">
    <Marquee/>
    <Navbar/>
    </header>
    <main className="pt-24">
    <section className="w-full min-h-screen">
    <h1>Home</h1>
    </section>
    </main>
    <footer></footer>
    </>
  );
}
