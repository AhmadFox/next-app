import { AppProvider } from "../context";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, headerFooter, bg, homeNavBar }) => {
  const { header, footer } = headerFooter || {};
  return (
    <AppProvider className={bg}>
      <Header header={header} homeNavBar={homeNavBar} />
      {children}
      <Footer footer={footer} header={header} />
    </AppProvider>
  );
};

export default Layout;
