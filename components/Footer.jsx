'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  if (pathname.includes('/studio')) return null;

  return (
    <footer className='w-full pt-14 py-10 bg-[#ccc] text-white space-y-8'>
      <div className='max-w-screen-xl mx-auto p-4 grid grid-cols-2 md:grid-cols-4 gap-8 gap-y-12 lg:gap-16'>
        <div className='w-full col-span-2 flex flex-col items-start gap-y-3'>
          <Image src={'/images/uniOfEdenberg.png'} alt='logo' width={100} height={100} className='w-48' unoptimized lazyBoundary='400px' />
          <div className='space-y-0 text-sm text-neutral-700'>
            <p>University of Edenberg,</p>
            <p>Ariyapatta Campus,</p>
            <p>Stand No 7, Enock Kavu Road,</p>
            <p>P. O. Box: 37209, Lusaka, Zambia</p>
          </div>
        </div>
        <div className='w-full space-y-4'>
          <p className='text-xl font-medium text-neutral-800'>Useful links</p>
          <div className='text-sm text-[var(--royal-blue)] flex flex-col gap-y-2'>
            <Link href={'/archives'}>Archives</Link>
            <Link href={'/current-issue'}>Current Issue</Link>
            <Link href={'/guidelines/author-guidelines'}>Author Guidelines</Link>
            <Link href={'/guidelines/reviewer-guidelines'}>Reviewer Guidelines</Link>
            <Link href={'/writing-tips'}>Writing Tips</Link>
            <Link href={'/guidelines/author-guidelines/submission'}>Publish With Us</Link>
          </div>
        </div>
        <div className='w-full space-y-3'>
          <p className='text-xl font-medium text-neutral-800'>About</p>
          <div className='text-sm text-[var(--royal-blue)] flex flex-col gap-y-2'>
            <Link href={'/about'}>About JNGSTA</Link>
            <Link href={'/editorial-board'}>Editorial Board</Link>
            <Link href={'/faqs'}>FAQs</Link>
            <Link href={'/contact-us'}>Contact Us</Link>
          </div>
        </div>
      </div>

      <div className='max-w-screen-2xl mx-auto space-y-8'>
        <div className='w-full h-[0.5px] mx-auto px-2 bg-neutral-400' />
        <div className='max-w-screen-xl mx-auto px-2 flex items-center justify-between'>
          <Link href={'/'}>
            <Image src={'/assets/logo.svg'} alt='logo' width={100} height={100} className='w-32 lg:w-40' />
          </Link>
          <p className='text-sm text-neutral-800'>&copy; 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
