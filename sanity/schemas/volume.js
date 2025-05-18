import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'volume',
  title: 'Volume',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Volume Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'year',
      title: 'Publication Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(1900).max(new Date().getFullYear()),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'year',
    },
  },
});
