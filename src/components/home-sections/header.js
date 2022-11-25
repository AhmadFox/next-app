/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";
import Link from "next/link";
import Image from "../image";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function HomeHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // top-[-10rem]
  // sm:top-[-20rem]
  return (
    <div className="isolate bg-white container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden h-screen">
      <div className="absolute inset-x-0 transform-gpu overflow-hidden blur-3xl">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="h-full">
        <div className="h-full relative px-6 lg:px-8">
          <Image
            sourceUrl="http://phpstack-691725-3019044.cloudwaysapps.com/wp-content/uploads/2022/11/pngegg.webp"
            altText="Header Models"
            title="Header Models"
            width="1080"
            height="1080"
            priority="flase"
            className="absolute bottom-0 right-0 hidden lg:block h-5/6 w-auto"
          />
          <div className="relative z-10 mr-auto max-w-3xl lg:max-w-lg xl:max-w-2xl pt-20 pb-32 sm:pt-48 sm:pb-40 h-full flex items-center">
            <div>
              <div>
                <h1 className=" text-5xl xl:text-6xl font-bold tracking-tight text-center lg:text-left leading-snug xl:leading-normal mb-5">
                  Best Sall And Offers <br className="hidden lg:block" /> In{" "}
                  <span className="text-teal-600">Dubai</span>
                </h1>
                <p className="text-lg leading-8 text-gray-600 text-center lg:text-left w-">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-8 flex gap-x-4 justify-center lg:justify-start">
                  <Link
                    href="/shop"
                    className="transition-all inline-block rounded-lg bg-teal-600 px-10 py-2 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-teal-600 hover:bg-teal-700 hover:ring-teal-700"
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
