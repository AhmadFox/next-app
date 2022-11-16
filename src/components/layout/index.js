import { AppProvider } from "../context";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, headerFooter, bg }) => {
  const { header, footer } = headerFooter || {};
  return (
    <AppProvider>
      <div className={bg}>
        <Header header={header} />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer footer={footer} header={header} />
      </div>
    </AppProvider>
  );
};

export default Layout;
