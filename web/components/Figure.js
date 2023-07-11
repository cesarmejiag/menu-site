import PropTypes from "prop-types";
import { urlFor } from "@/lib/api";

import { ramyoon } from "@/styles/fonts/fonts";
import styles from "../styles/Figure.module.css";

const Figure = ({ value }) => {
  const { alt, caption, asset } = value;
  if (!asset) {
    return undefined;
  }
  return (
    <figure className={styles.content}>
      <img
        src={urlFor(asset).auto("format").width(2000).url()}
        className={styles.image}
        alt={alt}
      />
      {caption && (
        <figcaption className={styles.figcaption}>
          <p className={`${ramyoon.className} text-xl`}>{caption}</p>
        </figcaption>
      )}
    </figure>
  );
};

Figure.propTypes = {
  value: PropTypes.shape({
    alt: PropTypes.string,
    caption: PropTypes.string,
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
};

export default Figure;
