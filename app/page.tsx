import Hero from "./components/Hero";
import InnovationStats from "./components/InnovationStats";
import Categories from "./components/Categories";
import Branches from "./components/Branches";
import Testimonials from "./components/Testimonials";
import FeaturedProducts from "./components/FeaturedProducts";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <InnovationStats />
      <Categories />
      <FeaturedProducts />
      <Branches />
      <Testimonials />
    </main>
  );
}
