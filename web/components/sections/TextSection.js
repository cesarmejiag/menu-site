import PropTypes from "prop-types";
import BlockContent from "../BlockContent";
import Section from "../Section";

const TextSection = ({ heading, intro, text }) => {
  return (
    <Section heading={heading} intro={intro}>
      {text && <BlockContent blocks={text} />}
    </Section>
  );
};

TextSection.propTypes = {
  heading: PropTypes.string,
  intro: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
};

export default TextSection;
