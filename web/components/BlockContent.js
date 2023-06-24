import PropTypes from "prop-types";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import client from "@/client";

const builder = imageUrlBuilder(client);

const components = {
  types: {
    image: ({ value }) => (
      <div className="image-wrapper">
        <img src={builder.image(value.asset).url()} alt={value.alt} />
        <div className="image-alt">{value.alt}</div>
      </div>
    ),
  },
};

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
