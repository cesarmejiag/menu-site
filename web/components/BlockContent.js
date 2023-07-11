import PropTypes from "prop-types";
import { PortableText } from "@portabletext/react";
import components from "./components";

const BlockContent = ({ blocks }) => {
  if (!blocks) {
    console.error(`Missing blocks`);
    return null;
  }
  return <PortableText value={blocks} components={components} />;
};

BlockContent.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object),
};

export default BlockContent;
