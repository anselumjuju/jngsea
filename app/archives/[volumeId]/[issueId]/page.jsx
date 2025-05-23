import ArticleCard from '@/components/ArticleCard';

const IssuesPage = async ({ params }) => {
  const issueId = (await params).issueId;
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const { data: issue, status: issueStatus } = await fetch(`${baseURL}/api/issues/${issueId}`).then((res) => res.json());
  const { data: articles, status: articlesStatus } = await fetch(`${baseURL}/api/articles`).then((res) => res.json());

  if (issueStatus !== 200 || articlesStatus !== 200) return null;
  const filteredArticles = articles.filter((article) => article.issue._ref === issueId);

  return (
    <div className='min-h-dvh flex items-start flex-col gap-y-8'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>Issue - {issue?.name}</h1>

      {filteredArticles.length > 0 ? (
        <div key={issue._id} className='w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4'>
          {filteredArticles.map((article) => (
            <div key={article._id} className='max-w-[350px]'>
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
