import AbstractText from '@/components/ui/AbstractText';
import urlFor from '@/lib/imageUrlBuilder';
import Image from 'next/image';

const getData = async ({ articleSlug }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${articleSlug}`);
  const { data, status } = await res.json();
  if (status !== 200) notFound();
  return { article: data };
};

const ArticlePage = async ({ params }) => {
  const { articleSlug } = await params;

  const { article } = await getData({ articleSlug });

  if (!article) notFound();

  return (
    <div className='min-h-dvh flex items-start flex-col gap-y-8'>
      <div className='space-y-2'>
        <h1 className='text-xl lg:text-2xl font-serif text-black'>{article.title}</h1>
        <p className='max-w-[600px] text-sm text-neutral-600'>{article.author}</p>
      </div>
      {/* Here goes the article */}
      <div className='w-full space-y-1'>
        <div className='flex gap-2 text-sm text-neutral-600'>
          <p>
            <span className='mr-2 font-bold text-neutral-700'>Volume:</span> {article.volume.name} - {article.volume.year}
          </p>
        </div>
        <div className='flex gap-2 text-sm text-neutral-600'>
          <p>
            <span className='mr-2 font-bold text-neutral-700'>Issue:</span> {article.issue.name}
          </p>
        </div>
        <div className='flex gap-2 text-sm text-neutral-600'>
          <p>
            <span className='mr-2 font-bold text-neutral-700'>ISSN:</span> {article.issn}
          </p>
        </div>
        <div className='flex gap-2 text-sm text-neutral-600'>
          <p>
            <span className='mr-2 font-bold text-neutral-700'>DOI:</span> {article.doi}
          </p>
        </div>
      </div>
      <div className='w-full aspect-video lg:aspect-auto lg:max-h-[450px] rounded-md overflow-clip'>
        <Image src={urlFor(article.image).url()} alt={article.title} width={100} height={100} className='w-full h-full object-cover' unoptimized />
      </div>
      <AbstractText abstract={article.abstract} />
      <button className='bg-[var(--royal-blue)] text-white py-2 px-6 text-sm text-nowrap cursor-pointer'>
        <a href={article.pdf} download target='_blank'>
          Download PDF
        </a>
      </button>
    </div>
  );
};

export default ArticlePage;
