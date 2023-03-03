import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function Header() {
  const router = useRouter();
  return (
    <div className="top-0 sticky border-b border-sky-600">
      <div className="h-14 bg-white px-6 flex justify-between items-center max-w-[1280px] mx-auto">
        <div>
          <Link href={'/'}>
            <h1 className="font-bold">Next Quran</h1>
          </Link>
        </div>
        <div>
          <ul className="flex gap-4">
            <Link href={'/'}>
              <li className={router.pathname === '/' ? 'text-sky-700' : ''}>
                Home
              </li>
            </Link>
            <Link href={'/about'}>
              <li
                className={router.pathname === '/about' ? 'text-sky-700' : ''}>
                About
              </li>
            </Link>
            <Link href={'/surah'}>
              <li
                className={router.pathname === '/surah' ? 'text-sky-700' : ''}>
                Surah
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
