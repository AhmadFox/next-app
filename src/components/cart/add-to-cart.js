import { isEmpty } from "lodash";
import { addToCart } from "../../utils/cart";
import { useContext, useState } from "react";
import { AppContext } from "../context";
import cx from "classnames";

const AddToCart = ({ product }) => {
  const [cart, setCart] = useContext(AppContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const addToCartBtnClasses = cx(
    "duration-500 mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 py-3 px-8 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    {
      "bg-teal-600 hover:bg-teal-800": !loading,
      "bg-teal-800": loading,
    }
  );

  if (isEmpty(product)) {
    return null;
  }

  return (
    <>
      <button
        className={addToCartBtnClasses}
        onClick={() =>
          addToCart(product?.id ?? 0, 1, setCart, setIsAddedToCart, setLoading)
        }
        disabled={loading}
      >
        {loading ? "Adding..." : "Add To Cart"}
      </button>
      {/* {isAddedToCart && !loading ? " View cart" : null} */}
    </>
  );
};

export default AddToCart;
