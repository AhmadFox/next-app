import Link from "next/link";
import { useState, useEffect } from "react";

import { XMarkIcon, MegaphoneIcon } from "@heroicons/react/24/outline";

export default function TopPromoNav() {
  const [topNav, setTopNav] = useState(false);

  /*
   ** Set promotion topNav is Clicked
   */
  var storage;
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("promotionTopNav"));
    if (items == true) {
      storage = 1;
      setTopNav(false);
    }
  }, [topNav]);

  setTimeout(() => {
    storage == 1 ? setTopNav(false) : setTopNav(true);
  }, 2000);

  const ClosePromotionTopNav = () => {
    setTopNav(false);
    localStorage.setItem("promotionTopNav", true);
  };

  return (
    <div
      className={`bg-teal-600 transition-all duration-500 ease-linear ${
        topNav == true ? `-mt-0` : `-mt-16`
      } `}
    >
      <div className="container mx-auto py-2 sm:px-6">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-teal-800 p-2">
              <MegaphoneIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 truncate text-white mb-0">
              <span className="md:hidden text-sm">
                We announced a black friday collections!
              </span>
              <span className="hidden md:inline text-sm">
                Big news! We're excited to announce a brand new black friday
                collections.
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto hidden sm:block">
            <Link
              href="/shop"
              className="transition flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-teal-600 shadow-sm hover:bg-teal-50"
            >
              Explore
            </Link>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              onClick={() => ClosePromotionTopNav()}
              type="button"
              className="transition -mr-1 flex rounded-md p-2 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
