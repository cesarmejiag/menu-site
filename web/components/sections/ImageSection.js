import PropTypes from "prop-types";
import BlockContent from "../BlockContent";
import { urlFor } from "@/lib/api";
import Cta from "../Cta";
import Section from "../Section";

import styles from "../../styles/ImageSection.module.css";

const ImageSection = ({ heading, label, text, image, cta }) => {
  if (!image) {
    return null;
  }
  return (
    <Section>
      <div className={styles.imageSection}>
        <figure className={styles.content}>
          <img
            src={urlFor(image).auto("format").width(2000).url()}
            className={styles.image}
            alt={heading}
          />
          <figcaption className={styles.figcaption}>
            <div className={styles.caption}>
              <div className={styles.captionBox}>
                <div className={`text-xs ${styles.label}`}>{label}</div>
                <h2 className={`text-2xl ${styles.title}`}>{heading}</h2>
                {text && <BlockContent blocks={text} />}
                {cta && cta.route && <Cta {...cta} />}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </Section>
  );
};

ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
};

export default ImageSection;
