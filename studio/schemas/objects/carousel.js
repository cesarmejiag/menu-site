export default {
  type: 'object',
  name: 'carousel',
  title: 'Carousel',
  fieldsets: [
    {
      title: 'Configuration',
      name: 'configuration',
    },
  ],
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'figure'}],
    },
    {
      name: 'autoplay',
      type: 'boolean',
      title: 'Autoplay',
      description: 'Activate to start changing slides automatically.',
      fieldset: 'configuration',
    },
    {
      name: 'delay',
      type: 'number',
      title: 'Delay',
      description: 'Delay between transitions.',
      fieldset: 'configuration',
    },
    {
      name: 'slidesPerView',
      type: 'number',
      title: 'Slides per view',
      description:
        "Number of slides per view (slides visible at the same time on slider's container).",
      fieldset: 'configuration',
    },
    {
      name: 'spaceBetween',
      type: 'number',
      title: 'Space Between',
      description: 'Distance between slides in px.',
      fieldset: 'configuration',
    },
  ],
  preview: {
    select: {
      images: 'images',
    },
    prepare({images}) {
      const title =
        images && images.length > 0 ? `${images.length} image(s) selected` : 'No images selcted'
      return {
        title,
        subtitle: 'Carousel',
      }
    },
  },
}
