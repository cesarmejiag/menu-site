import Link from "next/link";
import { withRouter } from "next/router";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SVG from "react-inlinesvg";

import { ramyoon } from "@/styles/fonts/fonts";
import styles from "./../styles/Header.module.css";

const renderLogo = (logo) => {
  if (logo?.asset) {
    if (logo.asset.extension === "svg") {
      return <SVG src={logo.asset.url} />;
    }
    return <img src={logo.asset.url} alt={logo.title} />;
  }
  return null;
};

const Header = ({ title = "Missing title", navItems, router, logo }) => {
  const [showNav, setShowNav] = useState(false);
  const hideMenu = () => setShowNav(false);
  const handleMenuToggle = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", hideMenu);
    return () => {
      router.events.off("routeChangeComplete", hideMenu);
    };
  }, []);

  return (
    <header className={`py-6 ${ramyoon.variable}`}>
      <div className="holder mx-auto px-4">
        <div className="h-16 flex justify-between items-center">
          <Link
            href={{
              pathname: "index",
              query: { slug: "/" },
            }}
            as="/"
            legacyBehavior
          >
            <a className={`${styles.logo} text-4xl`} title={title}>
              {logo?.asset ? renderLogo(logo, title) : title}
            </a>
          </Link>
          <div>
            <nav
              className={`${styles.navigation} ${
                showNav ? styles["navigation--active"] : ""
              }`}
            >
              <ul className="md:flex">
                {navItems &&
                  navItems.map(({ slug, title, _id }) => {
                    const isActive =
                      router.pathname === "/" &&
                      router.query.slug === slug.current;
                    return (
                      <li key={_id} className="md:ml-4">
                        <Link
                          href={{
                            pathname: "index",
                            query: { slug: slug.current },
                          }}
                          as={`/${slug.current}`}
                          legacyBehavior
                        >
                          <a
                            className={`text-2xl md:text-xl`}
                            data-is-active={isActive ? "true" : false}
                          >
                            {title}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </nav>
            <button
              className={`${styles.toggleMenu} md:hidden ${
                showNav ? styles["toggleMenu--active"] : ""
              }`}
              onClick={handleMenuToggle}
            >
              <SVG src="/assets/images/icon-hamburger.svg" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.string,
    }),
    events: PropTypes.any,
  }),
  title: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.shape({
        current: PropTypes.string,
      }).isRequired,
    })
  ),
  logo: PropTypes.shape({
    asset: PropTypes.shape({
      url: PropTypes.string,
    }),
    logo: PropTypes.string,
  }),
};

export default withRouter(Header);
