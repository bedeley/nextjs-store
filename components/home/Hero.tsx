import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-wxl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          numquam repellendus, minus, distinctio odit odio officia pariatur
          necessitatibus impedit tempora nulla, sunt reiciendis voluptatem quam
          dolorem similique laborum quia officiis.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};
export default Hero;
