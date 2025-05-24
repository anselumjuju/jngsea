import Link from 'next/link';
import { notFound } from 'next/navigation';

const getData = async ({ volumeSlug }) => {
  const volumeRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/volumes/${volumeSlug}`);
  const issuesRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/issues`);
  const articlesRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`);

  const volume = await volumeRes.json();
  const issues = await issuesRes.json();
  const articles = await articlesRes.json();

  if (volume.status !== 200 || issues.status !== 200 || articles.status !== 200) notFound();

  return { volume: volume.data, issues: issues.data, articles: articles.data };
};

const VolumesPage = async ({ params }) => {
  const { volumeSlug } = await params;
  const { volume, issues, articles } = await getData({ volumeSlug });

  return (
    <div className='min-h-dvh flex items-start flex-col gap-y-12'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>
        {volume.name} - {volume.year}
      </h1>
      <div className='w-full flex-1 flex flex-col items-stretch justify-start gap-8'>
        <div className='space-y-8'>
          <h4 className='w-max bg-[var(--royal-yellow)] py-2 px-4 font-sans font-lg font-medium text-black'>{volume.year}</h4>
          <div className='w-full flex flex-col items-stretch justify-start gap-8'>
            {issues
              .filter((issue) => issue.volume._id === volume._id)
              .map((issue, index) => (
                <div className='space-y-5'>
                  <div
                    key={issue._id}
                    className='w-max space-y-5 cursor-pointer hover:text-blue-700 duration-200 relative after:content-[""] after:w-0 after:h-[0.3px] hover:after:w-full after:duration-200 after:absolute after:-bottom-0.5 after:left-0 after:bg-black hover:after:bg-blue-700 after:rounded-full'>
                    <Link href={`/archives/${volume.slug}/${issue.slug}`} className='font-semibold text-lg'>
                      {index + 1}) Issue - {issue.name} ({volume.name})
                    </Link>
                  </div>
                  <ul className='w-full pl-8 flex flex-col items-start justify-start gap-4'>
                    {articles.filter((article) => article.issue._id === issue._id).length > 0 ? (
                      articles
                        .filter((article) => article.issue._id === issue._id)
                        .map((article) => (
                          <li key={article._id} className='w-full list-disc list-outside'>
                            <Link href={`/archives/${volume.slug}/${issue.slug}/${article.slug}`} className='line-clamp-2'>
                              {article.title}
                            </Link>
                          </li>
                        ))
                    ) : (
                      <li>No articles found</li>
                    )}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumesPage;
