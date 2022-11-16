import Head from "next/head";
import Link from "next/link";
import { useContext, useState, Fragment } from "react";
import { isEmpty } from "lodash";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  UserIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import ReactCountryFlag from "react-country-flag";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import { TailwindIcon } from "../../icons";
import { AppContext } from "../../context";

const Header = ({ header }) => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useContext(AppContext);
  const { headerMenuItems, siteLogoUrl, siteTitle, favicon } = header || {};

  const [isMenuVisible, setMenuVisibility] = useState(false);

  return (
    <>
      <Head>
        <title>{siteTitle || "Nexts WooCommerce"}</title>
        <link rel="icon" href={favicon || "/favicon.ico"} />
      </Head>
      <div className="bg-white">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pt-5 pb-2">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}

                  <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                    {!isEmpty(headerMenuItems) && headerMenuItems.length
                      ? headerMenuItems.map((menuItem) => (
                          <Link
                            key={menuItem?.ID}
                            href={menuItem?.url ?? "/"}
                            className="-m-2 block p-2 font-medium text-gray-900"
                            dangerouslySetInnerHTML={{ __html: menuItem.title }}
                          ></Link>
                        ))
                      : null}
                  </div>

                  <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                    <div className="flow-root">
                      <Link
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Sign in
                      </Link>
                    </div>
                    <div className="flow-root">
                      <Link
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Create account
                      </Link>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4">
                    <Link href="#" className="-m-2 flex items-center p-2">
                      <img
                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block text-base font-medium text-gray-900">
                        CAD
                      </span>
                      <span className="sr-only">, change currency</span>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="relative bg-white shadow">
          <p className="mb-0 flex h-10 items-center justify-center bg-teal-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            Get free delivery on orders over 100 AED
          </p>

          <nav
            aria-label="Top"
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 "
          >
            <div className="">
              <div className="flex h-16 items-center">
                <button
                  type="button"
                  className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <Link href="/">
                    {siteLogoUrl ? (
                      <img
                        className="mr-2"
                        src={siteLogoUrl}
                        alt={`${siteTitle} logo`}
                        width="160"
                        height="85"
                      />
                    ) : (
                      <TailwindIcon />
                    )}
                  </Link>
                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {!isEmpty(headerMenuItems) && headerMenuItems.length
                      ? headerMenuItems.map((menuItem) => (
                          <Link
                            key={menuItem?.ID}
                            href={menuItem?.url ?? "/"}
                            className="flex items-center text-md font-large text-gray-700 transition hover:text-teal-600"
                            dangerouslySetInnerHTML={{ __html: menuItem.title }}
                          ></Link>
                        ))
                      : null}
                  </div>
                </Popover.Group>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:ml-8 lg:flex">
                    <Link
                      href="#"
                      className="flex items-center text-gray-700 transition hover:text-teal-600"
                    >
                      <ReactCountryFlag
                        countryCode="AE"
                        svg
                        style={{
                          width: "1.5em",
                          height: "1.5em",
                        }}
                        title="AE"
                      />
                      <span className="ml-2 block text-sm font-medium">
                        AED
                      </span>
                      <span className="sr-only">, change currency</span>
                    </Link>
                  </div>

                  {/* Search */}
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 ml-4 lg:ml-4">
                    <Link
                      href="/test"
                      className="p-2 text-gray-400 transition hover:text-teal-600"
                    >
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  </div>

                  {/* Account */}
                  <div className="ml-4 flex lg:ml-4">
                    <Link
                      href="/account"
                      className="p-2 text-gray-400 transition hover:text-teal-600"
                    >
                      <span className="sr-only">Account</span>
                      <UserIcon className="h-6 w-6" aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Wishlist */}
                  <div className="flex ml-2 lg:ml-2">
                    <Link
                      href="/wishlist"
                      className="p-2 text-gray-400 transition hover:text-teal-600"
                    >
                      <span className="sr-only">Wishlist</span>
                      <HeartIcon className="h-6 w-6" aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-4">
                    <Link
                      href="/cart"
                      className="group -m-2 flex items-center p-2"
                    >
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 transition group-hover:text-teal-600"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 transition group-hover:text-teal-600">
                        {cart?.totalQty ? `${cart?.totalQty}` : "0"}
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
