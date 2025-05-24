import urlFor from '@/lib/imageUrlBuilder';
import Image from 'next/image';
import Link from 'next/link';

const ArticleCard = ({ image, title, description, issue, volume, slug }) => {
  return (
    <div className='h-full flex flex-col gap-2'>
      <div className='w-full basis-[200px] flex-none overflow-hidden rounded-md'>
        <Image src={urlFor(image).url()} alt={title} width={100} height={100} className='w-full h-full object-cover' unoptimized lazyBoundary='400px' />
      </div>
      <div className='w-full h-full flex flex-col items-start justify-between gap-2'>
        <h1 className='text-base font-bold line-clamp-2'>{title}</h1>
        <p className='text-sm text-neutral-600 line-clamp-3'>{description}</p>
        <button className='border px-6 py-1 border-neutral-700 text-sm cursor-pointer'>
          <Link href={`/archives/${volume.slug}/${issue.slug}/${slug}`}>Read More</Link>
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
