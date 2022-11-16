import React, { useEffect, useState, useRef } from "react";
import { isEmpty } from "lodash";
import Image from "../image";
import { deleteCartItem, updateCart } from "../../utils/cart";

const CartItem = ({ item, products, setCart }) => {
  const [productCount, setProductCount] = useState(item.quantity);
  const [updatingProduct, setUpdatingProduct] = useState(false);
  const [removingProduct, setRemovingProduct] = useState(false);
  const productImg = item?.data?.images?.[0] ?? "";

  console.log("item===>", item);
  console.log("products===>", products);
  /**
   * Do not allow state update on an unmounted component.
   *
   * isMounted is used so that we can set it's value to false
   * when the component is unmounted.
   * This is done so that setState ( e.g setRemovingProduct ) in asynchronous calls
   * such as axios.post, do not get executed when component leaves the DOM
   * due to product/item deletion.
   * If we do not do this as unsubscription, we will get
   * "React memory leak warning- Can't perform a React state update on an unmounted component"
   *
   * @see https://dev.to/jexperton/how-to-fix-the-react-memory-leak-warning-d4i
   * @type {React.MutableRefObject<boolean>}
   */
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    // When component is unmounted, set isMounted.current to false.
    return () => {
      isMounted.current = false;
    };
  }, []);

  /*
   * Handle remove product click.
   *
   * @param {Object} event event
   * @param {Integer} Product Id.
   *
   * @return {void}
   */
  const handleRemoveProductClick = (event, cartKey) => {
    event.stopPropagation();

    // If the component is unmounted, or still previous item update request is in process, then return.
    if (!isMounted || updatingProduct) {
      return;
    }

    deleteCartItem(cartKey, setCart, setRemovingProduct);
  };

  /*
   * When user changes the qty from product input update the cart in localStorage
   * Also update the cart in global context
   *
   * @param {Object} event event
   *
   * @return {void}
   */
  const handleQtyChange = (event, cartKey, type) => {
    if (process.browser) {
      event.stopPropagation();
      let newQty;

      // If the previous cart request is still updatingProduct or removingProduct, then return.
      if (
        updatingProduct ||
        removingProduct ||
        ("decrement" === type && 1 === productCount)
      ) {
        return;
      }

      if (!isEmpty(type)) {
        newQty = "increment" === type ? productCount + 1 : productCount - 1;
      } else {
        // If the user tries to delete the count of product, set that to 1 by default ( This will not allow him to reduce it less than zero )
        newQty = event.target.value ? parseInt(event.target.value) : 1;
      }

      // Set the new qty in state.
      setProductCount(newQty);

      if (products.length) {
        updateCart(item?.key, newQty, setCart, setUpdatingProduct);
      }
    }
  };

  return (
    <div className=" grid grid-cols-4 gap-5 mb-5 pt-8 border-t">
      <div className="col-span-1">
        <figure>
          <Image
            className="rounded-md w-full"
            width="200"
            height="300"
            altText={productImg?.alt ?? ""}
            sourceUrl={!isEmpty(productImg?.src) ? productImg?.src : ""} // use normal <img> attributes as props
          />
        </figure>
      </div>

      <div className="col-span-3">
        <div className="flex flex-col h-full relative">
          <h3 className="lg:text-xl 2xl:text-2xl mb-4">{item?.data?.name}</h3>
          <p className="text-green-600 text-opacity-60 text-base">
            {item?.data?.stock_status}
          </p>
          {/* {item?.data?.description ? <p>{item?.data?.description}</p> : ""} */}
          <button
            className="absolute right-0 top-0 px-4 flex items-center text-22px leading-22px bg-transparent text-red-500"
            onClick={(event) => handleRemoveProductClick(event, item?.key)}
          >
            &times;
          </button>

          <footer className="mt-auto flex justify-between pt-4 border-t">
            <div className="">
              <span className="cart-total-price">
                {/* {item?.currency} */}
                AED {item?.line_subtotal}
              </span>
            </div>
            {updatingProduct ? (
              <img
                className="woo-next-cart-item-spinner"
                width="24"
                src="/cart-spinner.gif"
                alt="spinner"
              />
            ) : null}
            {/*Qty*/}
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                className="decrement-btn text-24px"
                onClick={(event) =>
                  handleQtyChange(event, item?.cartKey, "decrement")
                }
              >
                -
              </button>
              <input
                type="number"
                min="1"
                style={{
                  textAlign: "center",
                  width: "50px",
                  paddingRight: "0",
                }}
                data-cart-key={item?.data?.cartKey}
                className={`woo-next-cart-qty-input ml-3 ${
                  updatingProduct ? "disabled" : ""
                } `}
                value={productCount}
                onChange={(event) => handleQtyChange(event, item?.cartKey, "")}
              />
              <button
                className="increment-btn text-20px"
                onClick={(event) =>
                  handleQtyChange(event, item?.cartKey, "increment")
                }
              >
                +
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
