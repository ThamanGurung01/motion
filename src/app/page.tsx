// import Carousel from "@/components/Carousel";
// import ImageCarousel from "@/components/ImageCarousel";
import Marquee from "@/components/MarqueeContainer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <header className="fixed">
    <Marquee/>
    <Navbar/>
    </header>
    <main className="pt-10">
    <section className="w-full min-h-screen overflow-hidden">
    {/* <ImageCarousel/> */}
    {/* <Carousel/> */}
    </section>
    </main>
    <footer></footer>
    </>
  );
}
