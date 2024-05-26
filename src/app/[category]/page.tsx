import { O1Header } from "@organisms/O1Header";
import { O4Footer } from "@organisms/O4Footer";
import { O5Gallery } from "@organisms/O5Gallery";

export default function ProductsPage() {
  return (
    <>
      <O1Header />
      <main className="mx-auto w-full max-w-[1110px] px-4 pt-[75px] lg:px-0">
        <O5Gallery />
      </main>
      <O4Footer />
    </>
  );
}
