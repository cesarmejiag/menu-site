import PropTypes from "prop-types";
import { urlFor } from "@/lib/api";

import styles from "../../styles/Hero.module.css";
import BlockContent from "../BlockContent";
import Cta from "../Cta";
import Section from "../Section";

const Hero = ({ heading, backgroundImage, tagline, ctas }) => {
  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage)
          .width(2000)
          .auto("format")
          .url()}")`,
      }
    : {};

  return (
    <Section contained={false}>
      <div className={styles.hero} style={style}>
        <div className={styles.content}>
          <h1 className={`text-5xl md:text-7xl ${styles.title}`}>{heading}</h1>
          <div className={styles.tagline}>
            {tagline && <BlockContent blocks={tagline} />}
          </div>
          {ctas && (
            <div className={styles.ctas}>
              {ctas.map((cta) => (
                <Cta {...cta} key={cta._key} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
};

export default Hero;
