import PropTypes from "prop-types";
import BlockContent from "../BlockContent";

const TextSection = ({ heading, label, text }) => {
  return (
    <div>
      <section>
        <div>{label}</div>
        <div>{heading}</div>
        <BlockContent blocks={text} />
      </section>
    </div>
  );
};

TextSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
};

export default TextSection;
