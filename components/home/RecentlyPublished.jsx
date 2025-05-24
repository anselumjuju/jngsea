import { notFound } from 'next/navigation';
import ArticleCard from '../ArticleCard';

const getRecentlyPublished = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/recent`);
  const { data, status } = await res.json();
  if (status !== 200) notFound();
  return { data };
};

const RecentlyPublished = async () => {
  const { data } = await getRecentlyPublished();
  return (
    <div className='max-w-screen-xl mx-auto px-2 flex flex-col gap-10'>
      <h1 className='text-4xl font-serif'>Recently Published</h1>
      <div className='h-max grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {data.map((item, index) => (
          <div key={index} className='max-w-[350px] lg:max-w-[270px]'>
            <ArticleCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyPublished;
