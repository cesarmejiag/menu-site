// TODO: Create object schema.
export default {
  type: 'object',
  name: 'videoSection',
  title: 'Video',
  fields: [
    {
      type: 'file',
      name: 'file',
      title: 'File',
    },
    {
      type: 'portableText',
      name: 'text',
      title: 'Text',
    },
    /* {
      type: 'boolean',
      name: 'auto',
      title: 'Auto',
      description: 'Auto determine sizes.',
    },
    {
      type: 'number',
      name: 'width',
      title: 'Width',
      hidden: ({parent, value}) => parent?.auto,
    },
    {
      type: 'number',
      name: 'height',
      title: 'Height',
      hidden: ({parent, value}) => parent?.auto,
    }, */
  ],
  preview: {
    prepare() {
      return {
        title: `Video`,
        subtitle: 'Video section',
      }
    },
  },
}
