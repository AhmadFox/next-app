import Image from "../image";
import { isEmpty } from "lodash";

const CheckoutCartItem = ({ item }) => {
  const productImg = item?.data?.images?.[0] ?? "";

  return (
    <div className="flex border-b p-6" key={item?.productId ?? ""}>
      <figure>
        <Image
          width="80"
          height="50"
          className="mr-4 rounded-md"
          altText={productImg?.alt ?? ""}
          sourceUrl={!isEmpty(productImg?.src) ? productImg?.src : ""} // use normal <img> attributes as props
        />
      </figure>
      <div className="pl-4 w-full flex flex-col justify-between ">
        <div>
          <h3 className="text-lg mb-1">{item?.data?.name ?? ""}</h3>
          <span className="text-sm text-gray-400 font-light mr-2">
            Color: Red
          </span>
          <span className="text-sm text-gray-400 font-light mr-2">
            Size: Large
          </span>
        </div>
        {/* {item?.currency ?? ""} */}
        <p className="text-sm mb-0">AED {item?.line_subtotal ?? ""}</p>
      </div>
    </div>
  );
};

export default CheckoutCartItem;
