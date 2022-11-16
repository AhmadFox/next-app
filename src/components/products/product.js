import Link from "next/link";
import Image from "../image";
import { sanitize } from "../../utils/miscellaneous";
import AddToCart from "../cart/add-to-cart";
import { isEmpty } from "lodash";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition, RadioGroup } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
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
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
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

const Product = ({ product }) => {
  const [open, setOpenModal] = useState(false);

  const cancelButtonRef = useRef(null);

  const [selectedColor, setSelectedColor] = useState(productItem.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productItem.sizes[2]);

  if (isEmpty(product)) {
    return null;
  }

  const img = product?.images?.[0] ?? {};
  const productType = product?.type ?? "";

  console.log("product===>", product);

  return (
    <div className="group relative">
      <div>
        <div>
          <div className="relative group/item min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md   lg:h-80">
            <Image
              sourceUrl={img?.src ?? ""}
              altText={img?.alt ?? ""}
              title={product?.name ?? ""}
              width="380"
              height="380"
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
            <div className="transition-all group invisible group-hover/item:visible group-hover/item:absolute w-full h-full flex items-center px-4">
              <button
                type="button"
                className="transition-all relative z-10 w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-sm text-gray-900 opacity-0 focus:opacity-100 group-hover:opacity-100"
                onClick={() => setOpenModal(true)}
              >
                Quick View
              </button>
            </div>
          </div>
          <Link href={product?.permalink ?? "/"} className="block mt-3">
            <h3 className="text-lg mb-2 text-gray-700">
              {product?.name ?? ""}
            </h3>
            <div className="flex justify-between">
              {product?.sale_price !== "" ? (
                <p className="text-base text-gray-900 mb-0">
                  {product.sale_price} AED
                  <small className="ml-2 text-red-400 line-through text-sm">
                    {product.regular_price} AED
                  </small>
                </p>
              ) : (
                <p
                  className="text-sm text-gray-900"
                  dangerouslySetInnerHTML={{
                    __html: sanitize(product?.price_html ?? ""),
                  }}
                />
              )}
            </div>
          </Link>
        </div>
        {/* <button onClick={() => setOpenModal(true)}>Quick View</button> */}
      </div>

      {/* 
      the modal
      */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpenModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                      type="button"
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                      onClick={() => setOpenModal(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                      <div className="h-full aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                        <Image
                          sourceUrl={img?.src ?? ""}
                          altText={img?.alt ?? ""}
                          title={product?.name ?? ""}
                          width="380"
                          height="580"
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                          {product?.name ?? ""}
                        </h2>

                        <section
                          aria-labelledby="information-heading"
                          className="mt-2"
                        >
                          <h3 id="information-heading" className="sr-only">
                            productItem information
                          </h3>

                          {product?.sale_price !== "" ? (
                            <p className="text-2xl text-gray-900">
                              {product.sale_price} AED
                              <small className="ml-2 text-red-400 line-through text-base">
                                {product.regular_price} AED
                              </small>
                            </p>
                          ) : (
                            <p
                              className="text-2xl text-gray-900"
                              dangerouslySetInnerHTML={{
                                __html: sanitize(product?.price_html ?? ""),
                              }}
                            />
                          )}

                          {/* Reviews */}
                          <div className="mt-6">
                            <h4 className="sr-only">Reviews</h4>
                            <div className="flex items-center">
                              <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                  <StarIcon
                                    key={rating}
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
                        </section>

                        <section
                          aria-labelledby="options-heading"
                          className="mt-10"
                        >
                          <h3 id="options-heading" className="sr-only">
                            productItem options
                          </h3>

                          <form>
                            {/* Colors */}
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">
                                Color
                              </h4>

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
                                  {productItem.colors.map((color) => (
                                    <RadioGroup.Option
                                      key={color.name}
                                      value={color}
                                      className={({ active, checked }) =>
                                        classNames(
                                          color.selectedClass,
                                          active && checked
                                            ? "ring ring-offset-1"
                                            : "",
                                          !active && checked ? "ring-2" : "",
                                          "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                                        )
                                      }
                                    >
                                      <RadioGroup.Label
                                        as="span"
                                        className="sr-only"
                                      >
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
                                <h4 className="text-sm font-medium text-gray-900">
                                  Size
                                </h4>
                                <a
                                  href="#"
                                  className="text-sm font-medium text-teal-600 hover:text-teal-500"
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
                                  {productItem.sizes.map((size) => (
                                    <RadioGroup.Option
                                      key={size.name}
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

                            <AddToCart product={product} />
                          </form>
                        </section>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Product;
