import Link from 'next/link';

const ArchivesPage = async () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const { data: volumes, status: volumesStatus } = await fetch(`${baseURL}/api/volumes`).then((res) => res.json());
  const { data: issues, status: issuesStatus } = await fetch(`${baseURL}/api/issues`).then((res) => res.json());

  if (volumesStatus !== 200 || issuesStatus !== 200) return null;

  return (
    <div className='min-h-dvh flex items-start flex-col gap-y-12'>
      <h1 className='text-xl lg:text-3xl font-serif text-black'>Archives</h1>x
      <div className='w-full flex-1 flex flex-col items-stretch justify-start gap-8'>
        {volumes.map((volume) => (
          <div key={volume._id} className='space-y-5'>
            <div className='w-max bg-[var(--royal-yellow)] py-2 px-4 font-sans font-lg font-medium text-black'>
              <Link href={`/archives/${volume._id}`}>{volume.year}</Link>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4'>
              {issues
                .filter((issue) => issue.volume._ref === volume._id)
                .map((issue) => (
                  <div
                    key={issue._id}
                    className='w-max space-y-5 cursor-pointer hover:text-blue-700 duration-200 relative after:content-[""] after:w-0 after:h-[0.3px] hover:after:w-full after:duration-200 after:absolute after:-bottom-0.5 after:left-0 after:bg-black hover:after:bg-blue-700 after:rounded-full'>
                    <Link href={`/archives/${volume._id}/${issue._id}`}>
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
