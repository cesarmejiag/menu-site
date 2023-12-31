import PropTypes from "prop-types";
import { LogoJsonLd } from "next-seo";
import Header from "./Header";
import LinksList from "./LinkList";
import Footer from "./Footer";
import Section from "./Section";

const Layout = ({ config, children }) => {
  if (!config) {
    console.error(`Missing config`);
    return <div>Missing config</div>;
  }

  const { title, mainNavigation, socialLinks, footerText, logo, url } = config;
  const logoUrl = logo && logo.asset && logo.asset.url;

  return (
    <>
      <Header title={title} navItems={mainNavigation} logo={logo} />
      <div>
        {children}
        <Section>
          <LinksList links={mainNavigation} />
        </Section>
      </div>
      <Footer text={footerText} socialLinks={socialLinks} />
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
