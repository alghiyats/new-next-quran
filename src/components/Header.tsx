import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Header() {
   const router = useRouter();
   const [mounted, setMounted] = useState(false);
   const { theme, setTheme } = useTheme();
   const [isTop, setIsTop] = useState(true);

   const Nav = [
      {
         title: 'Home',
         path: '/',
         icon: (
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
         ),
      },
      {
         title: 'Surah',
         path: '/surah',
         icon: (
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
         ),
      },
      {
         title: 'Bookmark',
         path: '/bookmark',
         icon: (
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
         ),
      },
   ];

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return null;
   }

   const handleScroll = () => {
      setIsTop(window.scrollY === 0);
   };

   if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
   }

   return (
      <div
         className={`${
            isTop
               ? ''
               : 'dark:border-b dark:border-[rgba(255,255,255,.15)] dark:border-solid shadow-md dark:shadow-none '
         }bg-[#fffdfc] fixed top-0 dark:bg-darkPrimary w-full px-3 z-40`}>
         <div className={`duration-300 py-4`}>
            <div className='flex justify-between max-w-screen-xl mx-auto px-3'>
               <div className='flex items-center'>
                  <Link href={'/'}>
                     <span className='font-bold'>Next Quran</span>
                  </Link>
               </div>

               <div className='flex gap-x-2'>
                  {Nav.map((to, i) => (
                     <Link
                        href={to.path}
                        key={i}>
                        <div
                           className={`${
                              router.pathname === to.path && 'bg-lightBg dark:bg-darkSecondary'
                           } flex cursor-pointer items-center gap-x-1 rounded-md  p-2 sm:py-2 sm:px-4 hover:bg-lightBg hover:dark:bg-darkSecondary`}>
                           {to.icon}
                           <span className='hidden sm:block text-sm font-medium'>{to.title}</span>
                        </div>
                     </Link>
                  ))}
                  <div
                     onClick={theme === 'dark' ? () => setTheme('light') : () => setTheme('dark')}
                     className='flex cursor-pointer select-none items-center rounded-md p-2 hover:bg-lightBg hover:dark:bg-darkSecondary'>
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
