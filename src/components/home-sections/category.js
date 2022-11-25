import Link from "next/link";
import Image from "../image";
const callouts = [
  {
    name: "Men Category",
    description:
      "Best sell for more than 50% to all clothes and accessories men",
    imageSrc:
      "http://phpstack-691725-3019044.cloudwaysapps.com/wp-content/uploads/2022/11/men-category-banner.webp",
    imageAlt: "Man model with balck jacet",
    href: "/category/men",
  },
  {
    name: "Women Category",
    description:
      "Best sell for more than 60% to all clothes and accessories Women",
    imageSrc:
      "http://phpstack-691725-3019044.cloudwaysapps.com/wp-content/uploads/2022/11/women-category-banner.webp",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "/category/women",
  },
  {
    name: "kids Category",
    description: "Best sell for more than 40% to all clothes and toys Kids",
    imageSrc:
      "http://phpstack-691725-3019044.cloudwaysapps.com/wp-content/uploads/2022/11/kids-category-banner.webp",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "/category/kids",
  },
];

export default function Category() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-20">
          <h1 className="tracking-wide text-3xl font-bold tracking-tight text-center mb-8 text-gray-900 uppercase">
            Browse Categoryes
          </h1>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <Link
                key={callout.name}
                href={callout.href}
                className="group relative mb-12 lg:mb-0 block"
              >
                <div className="transition-all relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <Image
                    width="474"
                    height="474"
                    sourceUrl={callout.imageSrc}
                    altText={callout.imageAlt}
                    title={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900 mb-3">
                  {callout.name}
                </h3>
                <p className="text-sm text-gray-500 mb-0">
                  {callout.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
