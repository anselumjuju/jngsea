import Image from 'next/image';

const EditorInChief = () => {
  return (
    <div className='w-full px-2 py-10 bg-[var(--royal-yellow)]'>
      <div className='max-w-screen-lg mx-auto flex items-start justify-between gap-10'>
        <div className='w-[50%] relative hidden sm:inline-block'>
          <Image src={'/images/editorInChief.png'} alt='logo' width={100} height={100} className='w-full' unoptimized lazyBoundary='400px' />
          <div className='w-full h-full absolute top-4 left-4 border-r border-b border-neutral-500' />
        </div>
        <div className='w-full flex flex-col items-start gap-y-10 text-neutral-700'>
          <h1 className='text-4xl font-serif text-black'>Editor-in-chief</h1>
          <div className='w-[70%] mx-auto relative sm:hidden'>
            <Image src={'/images/editorInChief.png'} alt='logo' width={100} height={100} className='w-full' unoptimized lazyBoundary='400px' />
            <div className='w-full h-full absolute top-4 left-4 border-r border-b border-neutral-500' />
          </div>
          <div>
            <p className='pb-8'>
              Welcome to the Journal of Next-Gen Science and Technology Applications! <br />
              As we navigate the rapidly evolving landscape of science and technology, our journal serves as a platform for innovators, researchers, and practitioners to share
              groundbreaking discoveries and applications.
              <br />
              We invite submissions that showcase cutting-edge advancements, explore new frontiers, and shape the future of technology.
              <br />
              Join us in pushing the boundaries of knowledge and innovation.
            </p>
            <p className='font-bold text-[var(--royal-blue)]'>Dr Krishnan Anand</p>
            <p>Editor In Chief</p>
            <p>JNGSTA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorInChief;
