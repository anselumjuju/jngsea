import Link from 'next/link';
import { notFound } from 'next/navigation';

const getData = async () => {
  const volumesRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/volumes`);
  const issuesRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/issues`);

  const volumes = await volumesRes.json();
  const issues = await issuesRes.json();

  if (volumes.status !== 200 || issues.status !== 200) notFound();

  return { volumes: volumes.data, issues: issues.data };
};

const ArchivesPage = async () => {
  const { volumes, issues } = await getData();
  if (!volumes || !issues) notFound();

  return (
    <div className='min-h-dvh flex items-start flex-col gap-y-12'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>Archives</h1>
      <div className='w-full flex-1 flex flex-col items-stretch justify-start gap-8'>
        {volumes.map((volume) => (
          <div key={volume._id} className='space-y-5'>
            <div className='w-max bg-[var(--royal-yellow)] py-2 px-4 font-sans font-lg font-medium text-black'>
              <Link href={`/archives/${volume.slug}`}>{volume.year}</Link>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4'>
              {issues
                .filter((issue) => issue.volume._id === volume._id)
                .map((issue) => (
                  <div
                    key={issue._id}
                    className='w-max space-y-5 cursor-pointer hover:text-blue-700 duration-200 relative after:content-[""] after:w-0 after:h-[0.3px] hover:after:w-full after:duration-200 after:absolute after:-bottom-0.5 after:left-0 after:bg-black hover:after:bg-blue-700 after:rounded-full'>
                    <Link href={`/archives/${volume.slug}/${issue.slug}`}>
                      {volume.name} - ({issue.name})
                    </Link>
                  </div>
                ))}
            </div>
            <div className='w-full h-0.5 my-12 bg-neutral-300' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchivesPage;
