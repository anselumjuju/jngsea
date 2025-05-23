import AbstractText from '@/components/ui/AbstractText';
import urlFor from '@/lib/imageUrlBuilder';
import Image from 'next/image';

const ArticlePage = async ({ params }) => {
  const articleSlug = (await params).articleSlug;
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const { data: article, status: articleStatus } = await fetch(`${baseURL}/api/articles/${articleSlug}`).then((res) => res.json());
  const { data: volumes, status: volumesStatus } = await fetch(`${baseURL}/api/volumes`).then((res) => res.json());
  const { data: issues, status: issuesStatus } = await fetch(`${baseURL}/api/issues`).then((res) => res.json());

  if (articleStatus !== 200 || volumesStatus !== 200 || issuesStatus !== 200) return null;
  const volume = volumes.find((volume) => volume._id === article.volume._ref);
  const issue = issues.find((issue) => issue._id === article.issue._ref);

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
            <span className='mr-2 font-bold text-neutral-700'>Volume:</span> {volume.name} - {volume.year}
          </p>
        </div>
        <div className='flex gap-2 text-sm text-neutral-600'>
          <p>
            <span className='mr-2 font-bold text-neutral-700'>Issue:</span> {issue.name}
          </p>
        </div>
        <div className='flex gap-2 text-sm text-neutral-600'>
          <p>
            <span className='mr-2 font-bold text-neutral-700'>ISSN:</span> {article.ISSN}
          </p>
        </div>
        <div className='flex gap-2 text-sm text-neutral-600'>
          <p>
            <span className='mr-2 font-bold text-neutral-700'>DOI:</span> {article.DOI}
          </p>
        </div>
      </div>
      <div className='w-full aspect-video lg:aspect-auto lg:max-h-[450px] rounded-md overflow-clip'>
        <Image src={urlFor(article.image).url()} alt={article.title} width={100} height={100} className='w-full h-full object-cover' unoptimized lazyBoundary='400px' />
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
