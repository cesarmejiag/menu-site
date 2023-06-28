import { ramyoon } from "@/styles/fonts/fonts";
import styles from "./../styles/Section.module.css";

const Section = ({ heading, intro, children }) => {
  return (
    <section className={`py-6 ${ramyoon.variable}`}>
      {/* Heading */}
      {(heading || intro) && (
        <div className={`mb-6 ${styles.heading}`}>
          {heading && <h1 className="text-5xl mb-4">{heading}</h1>}
          {intro && <h3 className="text-lg">{intro}</h3>}
        </div>
      )}
      {/* Main */}
      <div className={styles.body}>{children}</div>
    </section>
  );
};

export default Section;
