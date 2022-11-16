import React, { useContext, useState } from "react";
import { AppContext } from "../context";
import CartItem from "./cart-item";

import Link from "next/link";
import { clearCart } from "../../utils/cart";

const CartItemsContainer = () => {
  const [cart, setCart] = useContext(AppContext);
  const { cartItems, totalPrice, totalQty } = cart || {};
  const [isClearCartProcessing, setClearCartProcessing] = useState(false);

  const taxEstemat = totalPrice * 0.16;
  const shippingEstemat = totalPrice * 0.2;
  const totalPricecount = totalPrice + taxEstemat + shippingEstemat;

  // Clear the entire cart.
  const handleClearCart = async (event) => {
    event.stopPropagation();

    if (isClearCartProcessing) {
      return;
    }

    await clearCart(setCart, setClearCartProcessing);
  };

  return (
    <div className="content-wrap-cart">
      {cart ? (
        <div className=" grid lg:grid-cols-3 gap-4 items-start">
          {/*Cart Items*/}
          <div className="lg:col-span-2 mb-md-0 mb-5 xl:pr-8">
            {cartItems.length &&
              cartItems.map((item) => (
                <CartItem
                  key={item.product_id}
                  item={item}
                  products={cartItems}
                  setCart={setCart}
                />
              ))}
          </div>

          {/*Cart Total*/}
          <div className="lg:col-span-1 bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg">Order Summary</h2>
            <div className="flex justify-between items-center border-b py-3">
              <span className="text-gray-500">Subtotal</span>
              <span className="">AED {totalPrice}</span>
            </div>
            {/* <div className="flex justify-between items-center border-b py-3">
              <span className="text-gray-500">Total Items</span>
              <span className="">{totalQty} Items</span>
            </div> */}
            <div className="flex justify-between items-center border-b py-3">
              <span className="text-gray-500">Shiping Estemate</span>
              <span className="">AED {shippingEstemat.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center border-b py-3">
              <span className="text-gray-500">Tax Estemate</span>
              <span className="">AED {taxEstemat.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-3 mb-4">
              <span className="text-lg">Order Total</span>
              <span className="text-lg">AED {totalPricecount.toFixed(2)}</span>
              {/* {cartItems?.[0]?.currency ?? ""} */}
            </div>

            <div className="">
              {/*Clear entire cart*/}
              {/* <div className="clear-cart">
                <button
                  className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
                  onClick={(event) => handleClearCart(event)}
                  disabled={isClearCartProcessing}
                >
                  <span className="woo-next-cart">
                    {!isClearCartProcessing ? "Clear Cart" : "Clearing..."}
                  </span>
                </button>
              </div> */}
              {/*Checkout*/}
              <Link
                href="/checkout"
                className="w-full duration-500 flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 py-3 px-8 text-lg font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-teal-600 hover:bg-teal-700"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-14">
          <h2>No items in the cart</h2>
          <Link href="/">
            <button className="text-white duration-500 bg-brand-orange hover:bg-brand-royal-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
              <span className="woo-next-cart-checkout-txt">
                Add New Products
              </span>
              <i className="fas fa-long-arrow-alt-right" />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartItemsContainer;
