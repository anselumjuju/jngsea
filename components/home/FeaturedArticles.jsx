import urlFor from '@/lib/imageUrlBuilder';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const getFeaturedArticle = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/featured`);
  const { data, status } = await res.json();
  if (status !== 200) notFound();
  return { article: data };
};

const FeaturedArticles = async () => {
  const { article } = await getFeaturedArticle();

  return (
    <div className='max-w-screen-xl mx-auto px-2 flex flex-col gap-10'>
      <h1 className='text-4xl font-serif'>Featured Articles</h1>
      <div className='h-full flex flex-col md:flex-row gap-6'>
        <div className='w-full h-[350px] md:h-[300px]'>
          <Image src={urlFor(article.image).url()} alt={article.title} width={100} height={100} className='w-full h-full object-cover' unoptimized lazyBoundary='400px' />
        </div>
        <div className='w-full h-full flex flex-col items-start justify-between gap-2'>
          <h1 className='text-lg font-bold line-clamp-3'>{article.title}</h1>
          <p className='text-sm text-neutral-600 line-clamp-10'>{article.description}</p>
          <button className='mt-6 border px-6 py-1 border-neutral-700 text-sm cursor-pointer'>
            <Link href={`/archives/${article.volume.slug}/${article.issue.slug}/${article.slug}`}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticles;
