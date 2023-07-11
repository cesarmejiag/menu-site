import PropTypes from "prop-types";
import { ramyoon } from "@/styles/fonts/fonts";
import styles from "./../styles/Section.module.css";

const Section = ({ heading, intro, contained = true, children }) => {
  let sectionClassName = `${ramyoon.variable}`;

  if (contained) {
    sectionClassName += " holder mx-auto px-4 py-6";
  }

  return (
    <section className={sectionClassName}>
      {/* Heading */}
      {(heading || intro) && (
        <div className={`mb-6 ${styles.heading}`}>
          {heading && <h1 className="text-5xl mb-4">{heading}</h1>}
          {intro && <h3 className="text-lg/6">{intro}</h3>}
        </div>
      )}
      {/* Main */}
      <div className={styles.body}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  heading: PropTypes.string,
  intro: PropTypes.string,
  contained: PropTypes.bool,
  children: PropTypes.node,
};

export default Section;
