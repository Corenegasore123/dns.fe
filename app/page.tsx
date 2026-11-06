import Hero from "./components/Hero";
import InnovationStats from "./components/InnovationStats";
import Categories from "./components/Categories";
import Branches from "./components/Branches";
import Testimonials from "./components/Testimonials";
import FeaturedProducts from "./components/FeaturedProducts";
import { listProducts } from "./lib/api";
import type { Product } from "./data/products";

export default async function Home() {
  // The home page still renders if the API is down; the featured section is just left out
  let featured: Product[] = [];
  try {
    featured = (await listProducts({ featured: true, pageSize: 8 })).items;
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <InnovationStats />
      <Categories />
      {featured.length > 0 && <FeaturedProducts products={featured} />}
      <Branches />
      <Testimonials />
    </main>
  );
}
