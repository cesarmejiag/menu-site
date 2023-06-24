import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { withRouter } from "next/router";
import SVG from "react-inlinesvg";

const renderLogo = (logo) => {
  if (!logo || !logo.asset) {
    return null;
  }
  if (logo.asset.extension === "svg") {
    return <SVG src={logo.asset.url} />;
  }
  return <img src={logo.asset.url} alt={logo.title} />;
};

const Navigation = ({ title = "Missing title", navItems, router, logo }) => {
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
    <nav className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <Link
              href={{
                pathname: "/",
                query: {
                  slug: "/",
                },
              }}
              as="/"
              legacyBehavior
            >
              <a title={title}>{renderLogo(logo)}</a>
            </Link>
          </div>
          <div>
            <ul className="flex">
              {navItems &&
                navItems.map(({ slug, title, _id }) => {
                  const isActive =
                    router.pathname === "/" &&
                    router.query.slug === slug.current;
                  return (
                    <li key={_id} className="ml-4">
                      <Link
                        href={{ pathname: "/", query: { slug: slug.current } }}
                        as={`/${slug.current}`}
                        legacyBehavior
                      >
                        <a data-is-active={isActive ? "true" : false}>
                          {title}
                        </a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
            <button onClick={handleMenuToggle}>Toogle Nav</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
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

export default withRouter(Navigation);
