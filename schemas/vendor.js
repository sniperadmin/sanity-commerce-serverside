export default {
  name: 'vendor',
  title: 'Vendor',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'logo',
      title: 'logo',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'dispatcher',
      title: 'Dispatch Service',
      // this creates relationships
      type: 'reference',
      to: [
        {
          type: 'dispatch'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
}
