const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      "/product/175",
      // Object variant:
      { params: { id: "175" } },
    ],
    fallback: true,
  };
}

/*
 ** Enternal imports
 */
import Layout from "../../src/components/layout";
import ProductGallery from "./product-gallery";
import { HEADER_FOOTER_ENDPOINT } from "../../src/utils/constants/endpoints";
import axios from "axios";

import { sanitize } from "../../src/utils/miscellaneous";
import { isEmpty } from "lodash";
import AddToCart from "../../src/components/cart/add-to-cart";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

import { StarIcon } from "@heroicons/react/20/solid";
const productItem = {
  name: "Basic Tee 6-Pack ",
  price: "$192",
  rating: 3.9,
  reviewCount: 117,
  href: "#",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/productItem-quick-preview-02-detail.jpg",
  imageAlt: "Two each of gray, white, and black shirts arranged on table.",
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-teal-600" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-teal-600" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-teal-600" },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: true },
    { name: "XXXL", inStock: false },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Details({ headerFooter, product }) {
  const [selectedColor, setSelectedColor] = useState(productItem.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productItem.sizes[2]);

  if (isEmpty(product)) {
    return null;
  }
  let gallery;
  product.images ? (gallery = product.images) : null;

  return (
    <Layout headerFooter={headerFooter || {}}>
      <main className="container mx-auto py-10 px-4 sm:py-12 sm:px-6 lg:py-14 lg:px-8">
        {/* Start Breadcrumbs */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <a href="/" className="text-gray-400 hover:text-teal-600">
              Shop
            </a>
            <span>/</span>
            {!isEmpty(product?.categories ?? "") && product.categories.length
              ? product.categories.map((item, index) => (
                  <div key={index}>
                    <a
                      href={"/categories/" + item.slug}
                      className="text-gray-400 hover:text-teal-600 capitalize"
                    >
                      {item.name}
                    </a>
                    <span>/</span>
                  </div>
                ))
              : null}
            <span>{product?.name ?? ""}</span>
          </div>
        </div>
        {/* End Breadcrumbs */}

        {/* Start Main product Details */}
        <div className="">
          <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
            {/* <div className="h-full aspect-w-2 aspect-h-3 overflow-hidden rounded-lg sm:col-span-12 lg:col-span-6"> */}
            <div className="lg:h-full overflow-hidden rounded-lg sm:col-span-12 lg:col-span-6">
              <ProductGallery gallery={gallery} />
            </div>
            <div className="sm:col-span-8 lg:col-span-6 xl:pl-8 2xl:pl-12 xl:pl-4">
              <div className="flex items-start justify-between mb-5 lg:mb-6">
                <h1 className="xl:text-2xl xxl:text-3xl font-bold text-gray-700 uppercase mb-0">
                  {product?.name ?? ""}
                </h1>
                {/* Reviews */}
                <div className="mt-2">
                  <h4 className="sr-only">Reviews</h4>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating, index) => (
                        <StarIcon
                          key={index}
                          className={classNames(
                            productItem.rating > rating
                              ? "text-yellow-400"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">
                      {productItem.rating} out of 5 stars
                    </p>
                    <a
                      href="#"
                      className="ml-3 text-sm font-medium text-teal-600 hover:text-teal-500"
                    >
                      {productItem.reviewCount} reviews
                    </a>
                  </div>
                </div>
              </div>

              {/* Tags & Abailabelity */}
              <div className="flex items-center justify-between mb-5 lg:mb-6">
                {/* <Link
                  href="/category/mex"
                  className="text-lg font-base text-gray-400 hover:text-teal-600 mb-0 capitalize transition"
                >
                  {product?.tags[0].name ?? ""}
                </Link> */}
                <p className="text-gray-400 mb-0">
                  SKU:{"  "}
                  <span className="text-gray-700">{product?.sku ?? ""}</span>
                </p>
                <p className="text-gray-400 mb-0">
                  Availability:{"  "}
                  <span className="text-green-500">
                    {product?.stock_status ?? ""}
                  </span>
                </p>
              </div>

              {/* Price */}
              <div className="">
                {product?.sale_price !== "" ? (
                  <p className="text-3xl text-gray-900">
                    {product.sale_price} AED
                    <span className="ml-2 text-red-400 line-through text-base">
                      {product.regular_price} AED
                    </span>
                  </p>
                ) : (
                  <p
                    className="text-2xl text-gray-900"
                    dangerouslySetInnerHTML={{
                      __html: sanitize(product?.price_html ?? ""),
                    }}
                  />
                )}
              </div>

              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">
                  productItem information
                </h3>

                {/* Short Details */}
                <div
                  className="text-gray-500 mb-4 text-ellipsis overflow-hidden"
                  dangerouslySetInnerHTML={{
                    __html: sanitize(product?.short_description ?? ""),
                  }}
                ></div>
              </section>

              <section aria-labelledby="options-heading" className="mt-10">
                <h3 id="options-heading" className="sr-only">
                  productItem options
                </h3>

                <form>
                  {/* Colors */}
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Color</h4>

                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        {" "}
                        Choose a color{" "}
                      </RadioGroup.Label>
                      <span className="flex items-center space-x-3">
                        {productItem.colors.map((color, index) => (
                          <RadioGroup.Option
                            key={index}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedClass,
                                active && checked
                                  ? "ring ring-teal-600 ring-offset-1"
                                  : "",
                                !active && checked ? "ring-2" : "",
                                "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {" "}
                              {color.name}{" "}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                "h-8 w-8 border border-black border-opacity-10 rounded-full"
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </span>
                    </RadioGroup>
                  </div>

                  {/* Sizes */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-medium text-gray-900">
                        Size
                      </h4>
                      <a
                        href="#"
                        className="text-base font-medium text-teal-600 hover:text-teal-500"
                      >
                        Size guide
                      </a>
                    </div>

                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        {" "}
                        Choose a size{" "}
                      </RadioGroup.Label>
                      <div className="grid grid-cols-4 gap-4">
                        {productItem.sizes.map((size, index) => (
                          <RadioGroup.Option
                            key={index}
                            value={size}
                            disabled={!size.inStock}
                            className={({ active }) =>
                              classNames(
                                size.inStock
                                  ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                                  : "bg-gray-50 text-gray-200 cursor-not-allowed",
                                active ? "ring-2 ring-teal-500" : "",
                                "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label as="span">
                                  {size.name}
                                </RadioGroup.Label>
                                {size.inStock ? (
                                  <span
                                    className={classNames(
                                      active ? "border" : "border-2",
                                      checked
                                        ? "border-teal-500"
                                        : "border-transparent",
                                      "pointer-events-none absolute -inset-px rounded-md"
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                  >
                                    <svg
                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line
                                        x1={0}
                                        y1={100}
                                        x2={100}
                                        y2={0}
                                        vectorEffect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </span>
                                )}
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <AddToCart product={product} paddingY="py-5" />
                </form>
              </section>
            </div>
          </div>
        </div>
        {/* End Main product Details */}
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const getproductData = async () => {
    return await api.get("products/" + id);
  };
  const { data: product } = await getproductData();

  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);

  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
      product: product ?? {},
    },

    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };
}
