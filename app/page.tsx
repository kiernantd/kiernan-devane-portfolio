import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import { Stack } from "@/components/stack";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
