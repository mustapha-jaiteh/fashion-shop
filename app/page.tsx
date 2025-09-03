import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 7,
  });

  // console.log(products);
  // console.log(products.data[0].images[0]);
  return (
    <div>
      {/* section 1 */}
      <section className="rounded-xl bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 px-8 sm:px-16">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-gradient-to-r from-blue-900 to-pink-900 bg-clip-text text-transparent">
              Welcome to Mustik's Online Fasion Shop
            </h2>
            <p className="text-slate-900 text-lg">
              discover the latest fashion trends of all types and sizes at the
              best prices.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-pink-500 text-white hover:bg-pink-300"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >
                Browse all products
              </Link>
            </Button>
          </div>
          <div className="relative">
            <Image
              alt={products.data[0].name}
              src={products.data[0].images[0]}
              width={350}
              height={350}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section>
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
