// /sanity/schemaTypes/article.js

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'DOI',
      title: 'DOI (Digital Object Identifier)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ISSN',
      title: 'ISSN',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'volume',
      title: 'Volume',
      type: 'reference',
      to: [{ type: 'volume' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'issue',
      title: 'Issue',
      type: 'reference',
      to: [{ type: 'issue' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(4).max(8).error('Select between 4 to 8 relevant keywords.'),
    }),
    defineField({
      name: 'pdf',
      title: 'PDF Upload',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      volumeName: 'volume.name',
      issueName: 'issue.name',
    },
    prepare({ title, volumeName, issueName }) {
      return {
        title,
        subtitle: `${volumeName} - ${issueName}`,
      };
    },
  },
});
