import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'featuredArticle',
  title: 'Featured Article',
  type: 'document',
  fields: [
    defineField({
      name: 'article',
      title: 'Article',
      type: 'reference',
      to: [{ type: 'article' }],
      description: 'Select the article to be featured',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'article.title',
      volume: 'article.volume.name',
      issue: 'article.issue.name',
    },
    prepare: ({ title, volume, issue }) => ({
      title,
      subtitle: `${volume} - ${issue}`,
    }),
  },
});
