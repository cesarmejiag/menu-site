import Head from "next/head";
import PropTypes from "prop-types";
import { LogoJsonLd } from "next-seo";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ config, children }) => {
  if (!config) {
    console.error(`Missing config`);
    return <div>Missing config</div>;
  }

  const { title, mainNavigation, footerNavigation, footerText, logo, url } =
    config;
  const logoUrl = logo && logo.asset && logo.asset.url;

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4">{children}</div>
      <Footer text={footerText} />
      {logoUrl && url && <LogoJsonLd url={url} logo={logoUrl} />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  config: PropTypes.shape({
    title: PropTypes.string,
    mainNavigation: PropTypes.arrayOf(PropTypes.object),
    footerNavigation: PropTypes.arrayOf(PropTypes.object),
    footerText: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    url: PropTypes.string,
  }),
};

export default Layout;
