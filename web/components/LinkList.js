import Link from "next/link";
import { withRouter } from "next/router";
import PropTypes from "prop-types";

import { ramyoon } from "@/styles/fonts/fonts";
import styles from "@/styles/LinkList.module.css";

const LinkList = ({ links, router }) => {
  return (
    <ul>
      {links &&
        links.map(({ slug, title, _id }) => {
          const isActive =
            router.pathname === "/" && router.query.slug === slug.current;
          return (
            <li key={_id} className="mb-2">
              <Link
                href={{
                  pathname: "/",
                  query: { slug: slug.current },
                }}
                as={`/${slug.current}`}
                legacyBehavior
              >
                <a
                  data-is-active={isActive ? true : false}
                  className={`${styles.linkList__anchor} p-2 text-xl ${ramyoon.className}`}
                >
                  {title}
                </a>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

LinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.shape({
        current: PropTypes.string,
      }).isRequired,
    })
  ),
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.string,
    }),
    events: PropTypes.any,
  }),
};

export default withRouter(LinkList);
