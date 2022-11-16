import Layout from "../src/components/layout";
import { HEADER_FOOTER_ENDPOINT } from "../src/utils/constants/endpoints";
import axios from "axios";
import CartItemsContainer from "../src/components/cart/cart-items-container";

export default function Cart({ headerFooter }) {
  return (
    <Layout headerFooter={headerFooter || {}}>
      <main class="pt-8">
        <h1 className="text-gray-700 font-medium font-lato-bold text-3xl mb-8">
          Shopping Cart
        </h1>
        <CartItemsContainer />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);

  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
    },

    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };
}
