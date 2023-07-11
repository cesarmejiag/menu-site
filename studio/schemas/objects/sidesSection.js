export default {
  type: 'object',
  name: 'sidesSection',
  title: 'Sides',
  fieldsets: [
    {
      title: 'Configuration',
      name: 'configuration',
    },
  ],
  fields: [
    {
      type: 'textSection',
      name: 'text',
      title: 'Text',
    },
    {
      type: 'figure',
      name: 'image',
      title: 'Image',
    },
    {
      type: 'boolean',
      name: 'reverse',
      title: 'Reverse',
      description: 'Change order of columns.',
      fieldset: 'configuration',
    },
  ],
  preview: {
    select: {
      heading: 'text.heading',
      image: 'image',
    },
    prepare({heading, image}) {
      return {
        title: `Sides: ${heading}`,
        subtitle: 'Sides section',
        media: image,
      }
    },
  },
}
