import PropTypes from "prop-types";
import { upperFirst } from "lodash";
import * as SectionComponents from "./sections";

function resolveSections(section) {
  // eslint-disable-next-line import/namespace
  const Section = SectionComponents[upperFirst(section._type)];
  if (Section) {
    return Section;
  }
  console.error(`Can't find section`, section); // eslint-disable-line no-console
  return null;
}

const RenderSections = ({ sections }) => {
  if (!sections) {
    console.error(`Missing section`);
    return <div>Missing sections</div>;
  }
  return (
    <>
      {sections.map((section) => {
        const SectionComponent = resolveSections(section);
        if (!SectionComponent) {
          return <div key={section._key}>Missing section {section._type}</div>;
        }
        return <SectionComponent {...section} key={section._key} />;
      })}
    </>
  );
};

RenderSections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      _type: PropTypes.string,
      _key: PropTypes.string,
      sections: PropTypes.instanceOf(PropTypes.object),
    })
  ),
};

export default RenderSections;
