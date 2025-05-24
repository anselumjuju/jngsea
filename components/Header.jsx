'use client';

import Image from 'next/image';
import Link from 'next/link';
import SideBar from './SideBar';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  if (pathname.includes('/studio')) return null;
  return (
    <header className='px-2 py-4 space-y-3'>
      <div className='lg:px-2 flex items-center justify-between'>
        {/* Logo */}
        <Link href={'/'}>
          <Image src={'/assets/logo.svg'} alt='logo' width={100} height={10} className='w-32 lg:w-40' />
        </Link>
        {/* Laptop */}
        <ul className='hidden xl:flex items-center gap-6 text-nowrap'>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/archives'}>Current Issue</Link>
          </li>
          <li>
            <Link href={'/archives'}>Archives</Link>
          </li>
          <li className='relative group'>
            {/* Guidelines main trigger */}
            <span className='flex items-center cursor-pointer'>
              Guidelines <ChevronDown className='size-5 ml-1' strokeWidth={1.5} />
            </span>

            {/* First dropdown */}
            <ul className='absolute top-full left-0 w-max max-h-0 bg-white shadow-2xl shadow-gray-400 flex flex-col items-start gap-1 text-nowrap overflow-clip group-hover:overflow-visible group-hover:max-h-96 duration-300 ease-in transition-all z-10'>
              <li className='p-2'>
                <Link href='/guidelines/reviewer-guidelines'>Reviewer Guidelines</Link>
              </li>

              {/* Nested dropdown */}
              <li className='relative group/sub'>
                <Link href='/guidelines/author-guidelines' className='flex items-center cursor-pointer p-2'>
                  Author Guidelines <ChevronRight className='size-5 ml-1' strokeWidth={1.5} />
                </Link>

                <ul className='absolute top-0 left-full w-max max-h-0 bg-white shadow-2xl shadow-gray-400 flex flex-col items-start gap-1 text-nowrap overflow-clip group-hover/sub:max-h-96 duration-300 ease-in transition-all z-20'>
                  <li className='p-2'>
                    <Link href='/guidelines/author-guidelines/aims-scope'>Aims & Scope</Link>
                  </li>
                  <li className='p-2'>
                    <Link href='/guidelines/author-guidelines/indexing-services'>Indexing Services</Link>
                  </li>
                  <li className='p-2'>
                    <Link href='/guidelines/author-guidelines/open-access-ethics'>Open Access Ethics</Link>
                  </li>
                  <li className='p-2'>
                    <Link href='/guidelines/author-guidelines/publication-charge'>Publication Charge</Link>
                  </li>
                  <li className='p-2'>
                    <Link href='/guidelines/author-guidelines/submission'>Submission</Link>
                  </li>
                </ul>
              </li>

              <li className='p-2'>
                <Link href='/guidelines/writing-tips'>Writing Tips</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href={'/editorial-board'}>Editorial Board</Link>
          </li>
          <li>
            <Link href={'/faqs'}>FAQs</Link>
          </li>
          <li>
            <Link href={'/contact'}>Contact</Link>
          </li>
          <Link href={'/guidelines/author-guidelines/submission'}>
            <button className='bg-[var(--royal-blue)] text-white py-2 px-6 text-sm text-nowrap cursor-pointer'>Publish With Us</button>
          </Link>
        </ul>
        {/* Mobile */}
        <div className='xl:hidden'>
          <SideBar />
        </div>
      </div>
      <div className='w-full h-0.5 mx-auto px-2 bg-neutral-300' />
    </header>
  );
};

export default Header;
