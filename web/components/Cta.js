import Link from "next/link";
import PropTypes from "prop-types";

import { ramyoon } from "@/styles/fonts/fonts";

const Cta = ({ title, route, link }) => {
  const anchorClasses = `button button--active ${ramyoon.className}`;

  if (route?.slug?.current) {
    return (
      <Link
        href={{ pathname: "/[slug]", query: { slug: route.slug.current } }}
        as={`/${route.slug.current}`}
        legacyBehavior
      >
        <a className={anchorClasses}>{title}</a>
      </Link>
    );
  }

  if (link) {
    return (
      <a className={anchorClasses} href={link}>
        {title}
      </a>
    );
  }

  return <a className={anchorClasses}>{title}</a>;
};

Cta.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string,
    }),
  }),
  link: PropTypes.string,
};

export default Cta;
