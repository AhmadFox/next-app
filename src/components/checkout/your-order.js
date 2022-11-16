import { Fragment } from "react";
import CheckoutCartItem from "./checkout-cart-item";
import cx from "classnames";

const YourOrder = ({ cart, isOrderProcessing }) => {
  return (
    <Fragment>
      {cart ? (
        <Fragment>
          {/*Product Listing*/}
          <div className="bg-white border rounded-lg">
            {cart?.cartItems?.length &&
              cart.cartItems.map((item, index) => (
                <CheckoutCartItem key={item?.productId ?? index} item={item} />
              ))}
            <div className="border-b p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-base text-gray-500">Subtotal</span>
                <span className="text-base">AED {cart?.totalPrice ?? ""}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-base text-gray-500">Shiiping</span>
                <span className="text-base">AED {cart?.totalPrice ?? ""}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-base text-gray-500">Taxes</span>
                <span className="text-base">AED {cart?.totalPrice ?? ""}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-lg">Total</span>
                <span className="text-lg">AED {cart?.totalPrice ?? ""}</span>
              </div>
            </div>

            <div className="p-6">
              <button
                disabled={isOrderProcessing}
                className={cx(
                  "w-full duration-500 flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 py-3 px-8 text-lg font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-teal-600 hover:bg-teal-700",
                  { "opacity-50": isOrderProcessing }
                )}
                type="submit"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </Fragment>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default YourOrder;
