import article from '../schemas/article';
import featuredArticle from '../schemas/featuredArticle';
import issue from '../schemas/issue';
import volume from '../schemas/volume';

export const schema = {
  types: [featuredArticle, volume, issue, article],
};
