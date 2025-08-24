import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <section className="w-full h-screen">
    <Marquee/>
    <Navbar/>
    <h1>Home</h1>
    </section>
    </>
  );
}
