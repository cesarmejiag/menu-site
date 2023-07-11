import PropTypes from "prop-types";
import { NextSeo } from "next-seo";
import { getPage, urlFor } from "@/lib/api";
import Layout from "@/components/Layout";
import RenderSections from "@/components/RenderSections";

export default function Internal({
  title,
  description,
  disallowRobots,
  openGraphImage,
  content = [],
  config = {},
  slug,
}) {
  const openGraphImages = openGraphImage
    ? [
        {
          url: urlFor(openGraphImage).width(800).height(600).url(),
          width: 800,
          height: 600,
          alt: title,
        },
        // Facebook recommended size
        {
          url: urlFor(openGraphImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: title,
        },
        // Square 1:1
        {
          url: urlFor(openGraphImage).width(600).height(600).url(),
          width: 600,
          height: 600,
          alt: title,
        },
      ]
    : [];

  return (
    <Layout config={config}>
      <NextSeo
        title={title}
        titleTemplate={`${config.title} | %s`}
        description={description}
        canonical={config.url && `${config.url}/${slug}`}
        openGraph={{ images: openGraphImages }}
        noindex={disallowRobots}
      />
      {content && <RenderSections sections={content} />}
    </Layout>
  );
}

Internal.getInitialProps = async function ({ query }) {
  const { slug } = query;
  if (!query) {
    console.error("no query");
    return;
  }
  const res = await getPage(slug);
  return { ...res.page, slug };
};

Internal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  // TODO: improve types
  disallowRobots: PropTypes.any,
  openGraphImage: PropTypes.any,
  content: PropTypes.any,
  config: PropTypes.any,
  slug: PropTypes.any,
};
