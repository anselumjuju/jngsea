import ArticleCard from '@/components/ArticleCard';
import SearchBar from '@/components/SearchBar';
import { notFound } from 'next/navigation';

const getData = async ({ query }) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/search?query=${query}`;
  console.log(url);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/search?query=${query}`);
  const articles = await res.json();

  if (articles.status !== 200) notFound();

  return { articles: articles.data };
};

const page = async ({ params }) => {
  const { query } = await params;
  const { articles } = await getData({ query });
  if (!articles) notFound();

  return (
    <div className='max-w-screen-xl mx-auto px-2 min-h-dvh flex items-start flex-col gap-y-8'>
      <SearchBar />
      <h1 className='text-xl lg:text-3xl font-serif text-black'>Search results for "{query}"</h1>

      {articles.length > 0 ? (
        <div className='w-full px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4'>
          {articles.map((article) => (
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

export default page;
