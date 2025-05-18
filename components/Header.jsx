'use client';

import Image from 'next/image';
import Link from 'next/link';
import SideBar from './SideBar';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  if (pathname.includes('/studio')) return null;
  return (
    <header className='px-2 py-4 space-y-3'>
      <div className='lg:px-2 flex items-center justify-between'>
        {/* Logo */}
        <Link href={'/'}>
          <Image src={'/assets/logo.svg'} alt='logo' width={100} height={100} className='w-32 lg:w-40' />
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
            <Link href={'/archives/1/1'}>Current Issue</Link>
          </li>
          <li>
            <Link href={'/archives'}>Archives</Link>
          </li>
          <li>
            <Link href={'/guidelines/author-guidelines'}>Guidelines</Link>
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
