import Link from 'next/link';

const VolumesPage = async ({ params }) => {
  const volumeId = (await params).volumeId;
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const { data: volume, status: volumesStatus } = await fetch(`${baseURL}/api/volumes/${volumeId}`).then((res) => res.json());
  const { data: issues, status: issuesStatus } = await fetch(`${baseURL}/api/issues`).then((res) => res.json());
  const { data: articles, status: articlesStatus } = await fetch(`${baseURL}/api/articles`).then((res) => res.json());

  if (volumesStatus !== 200 || issuesStatus !== 200 || articlesStatus !== 200) return null;

  return (
    <div className='min-h-dvh flex items-start flex-col gap-y-12'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>
        {volume.name} - {volume.year}
      </h1>
      <div className='w-full flex-1 flex flex-col items-stretch justify-start gap-8'>
        <div key={volume._id} className='space-y-8'>
          <div className='w-max bg-[var(--royal-yellow)] py-2 px-4 font-sans font-lg font-medium text-black'>
            <Link href={`/archives/${volume._id}`}>{volume.year}</Link>
          </div>
          <div className='w-full flex flex-col items-stretch justify-start gap-8'>
            {issues
              .filter((issue) => issue.volume._ref === volume._id)
              .map((issue, index) => (
                <div className='space-y-5'>
                  <div
                    key={issue._id}
                    className='w-max space-y-5 cursor-pointer hover:text-blue-700 duration-200 relative after:content-[""] after:w-0 after:h-[0.3px] hover:after:w-full after:duration-200 after:absolute after:-bottom-0.5 after:left-0 after:bg-black hover:after:bg-blue-700 after:rounded-full'>
                    <Link href={`/archives/${volume._id}/${issue._id}`} className='font-semibold text-lg'>
                      {index + 1}) Issue - {issue.name} ({volume.name})
                    </Link>
                  </div>
                  <ul className='w-full pl-8 flex flex-col items-start justify-start gap-4'>
                    {articles
                      .filter((article) => article.issue._ref === issue._id)
                      .map((article) => (
                        <li key={article._id} className='w-full list-disc list-outside'>
                          <Link href={`/archives/${volume._id}/${issue._id}/${article._id}`} className='line-clamp-2'>
                            {article.title}
                          </Link>
                        </li>
                      ))}
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
