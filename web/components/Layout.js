import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
