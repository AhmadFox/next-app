/**
 * Internal Dependencies.
 */
import { HEADER_FOOTER_ENDPOINT } from "../src/utils/constants/endpoints";

/**
 * External Dependencies.
 */
import axios from "axios";
import Layout from "../src/components/layout";
import HomeHero from "../src/components/home-sections/header";
import Category from "../src/components/home-sections/category";
import IntroBanner from "../src/components/home-sections/Intro-banner";
import BestSales from "../src/components/home-sections/best-sall";
import BlogLatest from "../src/components/home-sections/BlogLatest";
import Brands from "../src/components/home-sections/brands";

export default function Home({ headerFooter }) {
  return (
    <Layout headerFooter={headerFooter || {}} homeNavBar={true}>
      <>
        <HomeHero />
        <Category />
        <BestSales />
        <IntroBanner />
        <Brands />
        <BlogLatest />
      </>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
    },
    revalidate: 1,
  };
}
