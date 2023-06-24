import PropTypes from "prop-types";
import { NextSeo } from "next-seo";
import imageUrlBuilder from "@sanity/image-url";
import client from "@/client";
import Layout from "@/components/Layout";
import RenderSections from "@/components/RenderSections";

const builder = imageUrlBuilder(client);
const pageQuery = `
  *[_id == "global-config"][0] {
    frontpage -> {
      ...,
      content[] {
        ...,
        cta {
          ...,
          route->
        },
        ctas[] {
          ...,
          route->
        }
      }
    }
  }
`;

export default function Home({
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
          url: builder.image(openGraphImage).width(800).height(600).url(),
          width: 800,
          height: 600,
          alt: title,
        },
        // Facebook recommended size
        {
          url: builder.image(openGraphImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: title,
        },
        // Square 1:1
        {
          url: builder.image(openGraphImage).width(600).height(600).url(),
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

Home.getInitialProps = async function () {
  const res = await client.fetch(pageQuery);
  return { ...res.frontpage, slug: "/" };
};

Home.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  // TODO: improve types
  disallowRobots: PropTypes.any,
  openGraphImage: PropTypes.any,
  content: PropTypes.any,
  config: PropTypes.any,
  slug: PropTypes.any,
};
