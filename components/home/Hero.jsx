import Image from 'next/image';
import SearchBar from '../SearchBar';

const Hero = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full max-w-screen-lg xl:max-w-screen-xl px-2 pt-[5dvh]'>
        <SearchBar />
      </div>
      <Image src={'/images/hero.png'} alt='logo' width={100} height={100} className='w-full min-h-[400px] object-cover -mt-6 -z-10' unoptimized priority />
    </div>
  );
};

export default Hero;
