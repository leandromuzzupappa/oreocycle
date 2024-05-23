import { O1Header } from "@organisms/O1Header";
import { T1HomeAccessories } from "@templates/T1HomeAccessories";
import { T2HomeBlog } from "@templates/T2HomeBlog";
import { T3HomeHeroSlider } from "@templates/T3HomeHeroSlider";

export default function Home() {
  return (
    <>
      <O1Header />
      <main className="mx-auto w-full max-w-[1110px] px-4 lg:px-0">
        <T3HomeHeroSlider />
        <T1HomeAccessories />
        <T2HomeBlog />
      </main>
    </>
  );
}
