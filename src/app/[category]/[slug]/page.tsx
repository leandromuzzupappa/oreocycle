import { M9Breadcrumbs } from "@molecules/M9Breadcrumbs";
import { O1Header } from "@organisms/O1Header";
import { O3Slider } from "@organisms/O3Slider";
import { O4Footer } from "@organisms/O4Footer";
import { O6ProductDetail } from "@organisms/O6ProductDetail";
import { useProductDetails } from "@hooks/useProductDetails";
import {
  getProductById,
  Category,
  getProductBySlug,
} from "@services/get-products";
import { redirect } from "next/navigation";

type Params = {
  category: Category;
  slug: string;
};

type PageProps = {
  params: Params;
  searchParams: { uuid: string };
};

export default async function ProductDetailPage({
  params,
  searchParams,
}: PageProps) {
  const { category, slug } = params;
  const search = searchParams.uuid;

  const product = search
    ? await getProductById({ id: search, category })
    : await getProductBySlug({ slug, category });

  if (!product) redirect("/404");

  const { breadcrumbsLinks, sliderConfig } = useProductDetails({
    product,
    category,
    slug,
    uuid: search,
  });

  return (
    <>
      <O1Header />
      <main className="mx-auto w-full max-w-[1110px] px-4 pt-[75px] lg:px-0">
        <M9Breadcrumbs links={breadcrumbsLinks} />
        <section className="grid grid-cols-12 gap-6">
          <div className="order-2 col-span-12 lg:order-1 lg:col-span-7">
            <O3Slider
              slides={sliderConfig.slides}
              options={sliderConfig.options}
            ></O3Slider>
          </div>
          <div className="order-1 col-span-12 space-y-4 lg:order-2 lg:col-span-5">
            <O6ProductDetail
              product={product}
              category={category}
              slug={slug}
              search={search}
            />
          </div>
        </section>
      </main>
      <O4Footer />
    </>
  );
}
