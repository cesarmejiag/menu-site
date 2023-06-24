import Link from "next/link";
import PropTypes from "prop-types";

const Cta = ({ title, route, link }) => {
  if (route?.slug?.current) {
    return (
      <Link
        href={{ pathname: "/", query: { slug: route.slug.current } }}
        as={`/${route.slug.current}`}
        legacy
      >
        <a>{title}</a>
      </Link>
    );
  }

  if (link) {
    return <a href={link}>{title}</a>;
  }

  return <a>{title}</a>;
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
