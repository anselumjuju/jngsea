import ArticleCard from '@/components/ArticleCard';
import { notFound } from 'next/navigation';

const getData = async ({ issueSlug }) => {
  const issueRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/issues/${issueSlug}`);
  const articlesRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`);

  const issue = await issueRes.json();
  const articles = await articlesRes.json();

  if (issue.status !== 200 || articles.status !== 200) notFound();

  return { issue: issue.data, articles: articles.data };
};

const IssuesPage = async ({ params }) => {
  const { volumeSlug, issueSlug } = await params;
  const { issue, articles } = await getData({ volumeSlug, issueSlug });

  if (!issue || !articles) notFound();

  const filteredArticles = articles.filter((article) => article.issue._id === issue._id);

  return (
    <div className='min-h-dvh flex items-start flex-col gap-y-8'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>Issue - {issue.name}</h1>

      {filteredArticles.length > 0 ? (
        <div key={issue._id} className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {filteredArticles.map((article) => (
            <div key={article._id} className='sm:max-w-[350px] mx-auto'>
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      ) : (
        <div className='w-full flex-1 flex items-center justify-center'>
          <p className='text-lg'>No articles found.</p>
        </div>
      )}
    </div>
  );
};

export default IssuesPage;
