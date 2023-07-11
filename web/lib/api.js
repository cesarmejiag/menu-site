import imageUrlBuilder from "@sanity/image-url";
import client from "./client";

const builder = imageUrlBuilder(client);

export async function getPage(slug) {
  const contentTemplate = `
  {
    ...,
    content[] {
      ...,
      file {
        ...,
        asset->
      },
      cta {
        ...,
        route->
      },
      ctas[] {
        ...,
        route->
      },
    }
  }`;

  // If no slug, get frontpage.
  if (!slug) {
    return await client.fetch(`
      *[_id == "global-config"][0] {
        frontpage -> ${contentTemplate}
      }`);
  } else {
    return await client.fetch(
      `
      *[_type == "route" && slug.current == $slug][0] {
        page-> ${contentTemplate}
      }`,
      { slug }
    );
  }
}

export async function getGlobalConfig() {
  let config;
  try {
    config = await client.fetch(`
    *[_id == "global-config"] {
      ...,
      logo {asset->{extension, url}},
      mainNavigation[] -> {
        ...,
        "title": page->title
      },
      socialLinks[] {
        ...,
        "icon": icon.asset->url
      }
    }[0]
  `);
  } catch (err) {
    console.error(`Can't retreive global config.`, err);
  }
  return config;
}

export function urlFor(source) {
  return builder.image(source);
}
