'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className='cursor-pointer' onClick={() => setIsOpen(true)}>
        <Menu className='size-7' />
      </button>
      {isOpen && (
        <div className={`w-[60%] max-w-[400px] h-dvh px-6 pt-24 bg-white shadow-2xl fixed top-0 right-0 z-5000`}>
          <button className='cursor-pointer' onClick={() => setIsOpen(false)}>
            <X className='size-7 absolute top-4 right-4' />
            <ul className='flex flex-col items-start gap-6 text-nowrap'>
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
              <li>
                <Link href={'/guidelines/author-guidelines'}>Author Guidelines</Link>
              </li>
              <li>
                <Link href={'/guidelines/reviewer-guidelines'}>Reviewer Guidelines</Link>
              </li>
              <li>
                <Link href={'/editorial-board'}>Editorial Board</Link>
              </li>
              <li>
                <Link href={'/guidelines/author-guidelines/aims-scope'}>Aims & Scope</Link>
              </li>
              <li>
                <Link href={'/guidelines/author-guidelines/publication-charge'}>Publication Charges</Link>
              </li>
              <li>
                <Link href={'/guidelines/writing-tips'}>Writing Tips</Link>
              </li>
              <li>
                <Link href={'/contact'}>Contact</Link>
              </li>
              <Link href={'/guidelines/author-guidelines/submission'}>
                <button className='bg-[var(--royal-blue)] text-white py-2 px-6 text-sm text-nowrap cursor-pointer'>Publish with Us</button>
              </Link>
            </ul>
          </button>
        </div>
      )}
    </div>
  );
};

export default SideBar;
