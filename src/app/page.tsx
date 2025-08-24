import MarqueeContainer from "@/components/MarqueeContainer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <section className="w-full h-screen">
    <MarqueeContainer/>
    <Navbar/>
    <h1>Home</h1>
    </section>
    </>
  );
}
