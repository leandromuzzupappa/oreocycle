import { O1Header } from "@organisms/O1Header";
import { O4Footer } from "@organisms/O4Footer";
import { M7TextBanner } from "@molecules/M7TextBanner";
import { T1HomeAccessories } from "@templates/T1HomeAccessories";
import { T2HomeBlog } from "@templates/T2HomeBlog";
import { T3HomeHeroSlider } from "@templates/T3HomeHeroSlider";
import { T4HomeFeatureProducts } from "@templates/T4HomeFeatureProducts";
import { T5HomeEvents } from "@templates/T5HomeEvents";

export default function Home() {
  return (
    <>
      <O1Header />
      <main className="mx-auto w-full max-w-[1110px] px-4 pt-[75px] lg:px-0">
        <T3HomeHeroSlider />
        <T4HomeFeatureProducts />
        <M7TextBanner
          headline="Entérate del último recorrido de la Meteor 350 por las sierras de Córdoba."
          linkLabel="Leer nota completa"
          link="#newsletter"
        />
        <T1HomeAccessories />
        <T5HomeEvents />
        <T2HomeBlog />
      </main>
      <O4Footer />
    </>
  );
}
