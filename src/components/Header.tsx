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
                  <div
                     className={`flex cursor-pointer items-center gap-x-1 rounded-md p-2  hover:bg-gray-200 hover:dark:bg-gray-700 mr-2`}>
                     <svg
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <g>
                           <path
                              className='stroke-gray-500 dark:stroke-slate-200'
                              d='M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20'
                              stroke='#000000'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                           />
                        </g>
                     </svg>
                  </div>
                  <Link href={'/'}>
                     <span className='font-bold'>Next Quran</span>
                  </Link>
               </div>
               <div className='ml-2 flex gap-x-2'>
                  <Link href={'/'}>
                     <div
                        className={`${
                           router.pathname === '/' && 'bg-gray-100 dark:bg-gray-800'
                        } flex cursor-pointer items-center gap-x-1 rounded-md  p-2 sm:py-2 sm:px-4 hover:bg-gray-200 hover:dark:bg-gray-700`}>
                        <svg
                           className='w-5 h-5'
                           viewBox='0 0 24 24'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'>
                           <g>
                              <path
                                 className='stroke-gray-500 dark:stroke-slate-200'
                                 d='M15 16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7957 13 12 13C11.2044 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L4 10L8 6.5M12 3L20 10L20 20H15'
                                 stroke='#000000'
                                 strokeWidth='1.5'
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                              />
                           </g>
                        </svg>
                        <span className='hidden sm:block text-sm font-medium'>Home</span>
                     </div>
                  </Link>
                  <Link href={'/surah'}>
                     <div
                        className={`${
                           router.pathname === '/surah' && 'bg-gray-100 dark:bg-gray-800'
                        } flex cursor-pointer items-center gap-x-1 rounded-md  p-2 sm:py-2 sm:px-4 hover:bg-gray-200 hover:dark:bg-gray-700`}>
                        <svg
                           className='w-5 h-5'
                           viewBox='0 0 24 24'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'>
                           <g>
                              <path
                                 className='stroke-gray-500 dark:stroke-slate-200'
                                 d='M15 11H4M6 5C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V7C20 5.89543 19.1046 5 18 5H15M15 3V7M9 3V7M9 5H12'
                                 stroke='#000000'
                                 strokeWidth='1.5'
                                 strokeLinecap='round'
                              />
                           </g>
                        </svg>
                        <span className='hidden sm:block text-sm font-medium'>Surah</span>
                     </div>
                  </Link>
                  <div
                     className={`${
                        router.pathname === '/bookmark' && 'bg-gray-100 dark:bg-gray-800'
                     } flex cursor-pointer items-center gap-x-1 rounded-md p-2 sm:py-2 sm:px-4 hover:bg-gray-100 hover:dark:bg-gray-700`}>
                     <svg
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <g>
                           <path
                              className='stroke-gray-500 dark:stroke-slate-200'
                              d='M18 13V21L12 15L6 21V17M18 8V6C18 4.89543 17.1046 4 16 4H8C6.89543 4 6 4.89543 6 6V13'
                              stroke='#000000'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                           />
                        </g>
                     </svg>
                     <span className='hidden sm:block text-sm font-medium'>Bookmark</span>
                  </div>
                  <div
                     onClick={theme === 'dark' ? () => setTheme('light') : () => setTheme('dark')}
                     className='flex cursor-pointer select-none items-center rounded-md p-2 hover:bg-gray-100 hover:dark:bg-gray-700'>
                     <svg
                        className='h-5 w-5 fill-none'
                        viewBox='0 0 24 24'>
                        {theme !== 'dark' ? (
                           <g>
                              <path
                                 className='stroke-gray-500 dark:stroke-slate-200'
                                 d='M20 12C20 7.11149 16.0007 3.13144 11 3C16.6829 8.75775 10.952 18.6176 3 17C4.65938 19.4319 7.77111 21 11 21C13.8836 21 16.3745 19.7215 18 17.7163'
                                 stroke='#000000'
                                 strokeWidth='1.5'
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                              />
                           </g>
                        ) : (
                           <g>
                              <path
                                 className='stroke-gray-500 dark:stroke-slate-200'
                                 d='M3 12H5M5.00006 19L7.00006 17M12 19V21M17 17L19 19M5 5L7 7M19 12H21M16.9999 7L18.9999 5M12 3V5M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z'
                                 stroke='#000000'
                                 strokeWidth='1.5'
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
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
