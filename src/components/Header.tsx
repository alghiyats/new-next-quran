import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

type Props = {
  onLoad: () => void;
};

export default function Header({ onLoad }: Props) {

  onLoad();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='bg-white sticky top-0 dark:bg-black'>
      <div className={`shadow-md py-3`}>
        <div className='flex justify-between max-w-[1000px] mx-auto px-6'>
          <div className='flex items-center'>
            <Link href={'/'}>
              <span className='font-semibold'>Next Quran</span>
            </Link>
          </div>
          <div className='ml-2 flex gap-x-2'>
            <Link href={'/'}>
              <div
                className={`${router.pathname === '/' && 'bg-gray-100 dark:bg-gray-800'
                  } flex cursor-pointer items-center gap-x-1 rounded-md  p-2 sm:py-2 sm:px-4 hover:bg-gray-200 hover:dark:bg-gray-700`}>
                <span className='hidden sm:block text-sm font-medium'>Home</span>
              </div>
            </Link>
            <Link href={'/surah'}>
              <div
                className={`${router.pathname === '/surah' && 'bg-gray-100 dark:bg-gray-800'
                  } flex cursor-pointer items-center gap-x-1 rounded-md  p-2 sm:py-2 sm:px-4 hover:bg-gray-200 hover:dark:bg-gray-700`}>
                <span className='hidden sm:block text-sm font-medium'>Surah</span>
              </div>
            </Link>
            <div
              className={`${router.pathname === '/bookmark' && 'bg-gray-100 dark:bg-gray-800'
                } flex cursor-pointer items-center gap-x-1 rounded-md p-2 sm:py-2 sm:px-4 hover:bg-gray-100 hover:dark:bg-gray-700`}>
              <span className='hidden sm:block text-sm font-medium'>Bookmark</span>
            </div>
            <div onClick={
              theme === 'dark' ? () => setTheme('light') : () => setTheme('dark')
            } className='flex cursor-pointer select-none items-center rounded-md p-2 hover:bg-gray-100 hover:dark:bg-gray-700'>
              <svg
                className='h-5 w-5 stroke-gray-500 dark:stroke-slate-200 fill-none'
                viewBox='0 0 24 24'>
                {theme === 'dark' ? (
                  <g>
                    <path d='M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z' />
                    <path
                      d='M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z'
                      strokeWidth={2}
                    />
                  </g>
                ) : (
                  <g>
                    <path
                      d='M183.72453,170.371a10.4306,10.4306,0,0,1-.8987,3.793,11.19849,11.19849,0,0,1-5.73738,5.72881,10.43255,10.43255,0,0,1-3.77582.89138,1.99388,1.99388,0,0,0-1.52447,3.18176,10.82936,10.82936,0,1,0,15.118-15.11819A1.99364,1.99364,0,0,0,183.72453,170.371Z'
                      transform='translate(-169.3959 -166.45548)'
                    />
                  </g>
                )}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
