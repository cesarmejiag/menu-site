export default {
  type: 'object',
  name: 'textSection',
  title: 'Text',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'intro',
      type: 'string',
      title: 'Intro',
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading}) {
      return {
        title: `${heading}`,
        subtitle: 'Text section',
      }
    },
  },
}
