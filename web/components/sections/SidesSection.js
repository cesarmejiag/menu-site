import PropTypes from "prop-types";
import Section from "../Section";
import BlockContent from "../BlockContent";
import Figure from "./../Figure";

const SidesSection = ({ image, text, reverse }) => {
  const { heading, intro, text: blocks } = text;
  return (
    <Section>
      <div className="grid grid-cols-1 gap-y-5 md:gap-y-0 md:grid-cols-2 md:gap-x-10 items-center">
        <div className={reverse ? "order-last" : "order-first"}>
          <Figure value={image} />
        </div>
        <div className={reverse ? "order-first" : "order-last"}>
          <h2 className="text-3xl">{heading}</h2>
          <h4 className="text-lg">{intro}</h4>
          <BlockContent blocks={blocks} />
        </div>
      </div>
    </Section>
  );
};

SidesSection.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    caption: PropTypes.string,
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  text: PropTypes.shape({
    heading: PropTypes.string,
    intro: PropTypes.string,
    text: PropTypes.arrayOf(PropTypes.object),
  }),
  reverse: PropTypes.bool,
};

export default SidesSection;
