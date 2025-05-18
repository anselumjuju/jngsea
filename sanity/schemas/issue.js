import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'issue',
  title: 'Issue',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Issue Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'volume',
      title: 'Volume',
      type: 'reference',
      to: [{ type: 'volume' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'volume.name',
    },
  },
});
