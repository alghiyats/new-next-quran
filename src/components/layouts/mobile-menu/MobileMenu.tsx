import { useOpen } from '@/contexts/GlobalContext';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const IsHome = ({ children }: { children?: React.ReactNode }) => {
   const router = useRouter();
   if (router.pathname === '/') {
      return <span>{children}</span>;
   }
   return <Link href={'/'}>{children}</Link>;
};

export default function MobileMenu() {
   const { open, setOpen } = useOpen();
   const toggleSidebar = () => {
      setOpen(!open);
   };

   const { setTheme } = useTheme();
   const router = useRouter();

   return (
      <div className='lg:hidden fixed rounded-[12px_12px_0_0] bg-mobB text-mobT shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)] z-[15] text-xs px-5 py-0 bottom-0 inset-x-0 mt-0 dark:bg-darkBa dark:text-darkTa'>
         <ul className='h-[55px] flex items-center justify-center list-none m-0 p-0 [&_li]:flex [&_li]:justify-center [&_li]:flex-[1_0_20%] [&_li_>*]:flex-col [&_li_>*]:relative [&_li_>*]:inline-flex [&_li_>*]:items-center [&_li_>*]:justify-center [&_li_>*]:min-w-[35px] [&_li_>*]:h-[35px] [&_li_>*]:transition-all [&_li_>*]:duration-100 [&_li_>*]:ease-ease [&_li_>*]:text-inherit [&_li_>*]:px-2 [&_li_>*]:py-0 rounded-[20px] [&_li_>*]:dark:text-darkT'>
            <li>
               <IsHome>
                  <svg
                     className='stroke-mobT opacity-80 mx-[3px] shrink-0 fill-none w-[22px] h-[22px] dark:stroke-darkT hover:fill-linkC hover:dark:fill-darkU'
                     xmlns='http://www.w3.org/2000/svg'
                     viewBox='0 0 24 24'>
                     <g transform='translate(2.400000, 2.000000)'>
                        <line
                           x1='6.6787'
                           y1='14.1354'
                           x2='12.4937'
                           y2='14.1354'
                        />
                        <path d='M1.24344979e-14,11.713 C1.24344979e-14,6.082 0.614,6.475 3.919,3.41 C5.365,2.246 7.615,0 9.558,0 C11.5,0 13.795,2.235 15.254,3.41 C18.559,6.475 19.172,6.082 19.172,11.713 C19.172,20 17.213,20 9.586,20 C1.959,20 1.24344979e-14,20 1.24344979e-14,11.713 Z' />
                     </g>
                  </svg>
               </IsHome>
            </li>
            {router.pathname != '/' && router.pathname != '/surah' && (
               <li>
                  <span onClick={toggleSidebar}>
                     <svg
                        className={clsx(
                           open && 'fill-linkC dark:fill-darkU',
                           'stroke-mobT opacity-80 mx-[3px] shrink-0 fill-none w-[22px] h-[22px] dark:stroke-darkT'
                        )}
                        viewBox='0 0 24 24'>
                        <g>
                           <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={5}
                           />
                           <path
                              d='M175.376,181.85188c1.11615-2.25844,2.38586-3.16,3.49436-3.49435,1.91917-.57878,3.21384.58547,5.12781,0a6.13147,6.13147,0,0,0,3.42179-3.4218'
                              transform='translate(-169.39801 -166.39381)'
                           />
                        </g>
                     </svg>
                  </span>
               </li>
            )}

            <li>
               <span>
                  <svg
                     className={clsx(
                        'stroke-mobT opacity-80 mx-[3px] shrink-0 fill-none w-[22px] h-[22px] dark:stroke-darkT hover:fill-linkC hover:dark:fill-darkU'
                     )}
                     viewBox='0 0 24 24'>
                     <g>
                        <path
                           d='M188.9,174.86929l-1.42615-.24236a2.8036,2.8036,0,0,1-2.29428-2.29428l-.24236-1.42621a3,3,0,0,0-2.9576-2.4974h-1.16436a3,3,0,0,0-2.9576,2.4974l-.24236,1.42621a2.8036,2.8036,0,0,1-2.29428,2.29428l-1.42621.24236a3,3,0,0,0-2.4974,2.9576v1.16436a3,3,0,0,0,2.4974,2.9576l1.42621.24236a2.8036,2.8036,0,0,1,2.29428,2.29428l.24236,1.42615a3,3,0,0,0,2.9576,2.4974h1.16437a3,3,0,0,0,2.95759-2.4974l.24236-1.42616a2.8036,2.8036,0,0,1,2.29427-2.29427l1.42616-.24236a3,3,0,0,0,2.4974-2.95759v-1.16437A3,3,0,0,0,188.9,174.86929Z'
                           transform='translate(-169.39739 -166.40904)'
                        />
                        <circle
                           cx={12}
                           cy={12}
                           r='1.75'
                        />
                     </g>
                  </svg>
               </span>
            </li>
            <li>
               <span>
                  <svg
                     onClick={() => setTheme('dark')}
                     className={clsx(
                        'stroke-mobT opacity-80 mx-[3px] shrink-0 fill-none w-[22px] h-[22px] dark:stroke-darkT dark:hidden hover:fill-linkC hover:dark:fill-darkU'
                     )}
                     viewBox='0 0 24 24'>
                     <g>
                        <path d='M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z' />
                        <path
                           d='M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z'
                           strokeWidth={2}
                        />
                     </g>
                  </svg>
                  <svg
                     onClick={() => setTheme('light')}
                     className={clsx(
                        'stroke-mobT opacity-80 mx-[3px] shrink-0 fill-none w-[22px] h-[22px] dark:stroke-darkT hidden dark:block hover:fill-linkC hover:dark:fill-darkU'
                     )}
                     viewBox='0 0 24 24'>
                     <g>
                        <path
                           d='M183.72453,170.371a10.4306,10.4306,0,0,1-.8987,3.793,11.19849,11.19849,0,0,1-5.73738,5.72881,10.43255,10.43255,0,0,1-3.77582.89138,1.99388,1.99388,0,0,0-1.52447,3.18176,10.82936,10.82936,0,1,0,15.118-15.11819A1.99364,1.99364,0,0,0,183.72453,170.371Z'
                           transform='translate(-169.3959 -166.45548)'
                        />
                     </g>
                  </svg>
               </span>
            </li>
         </ul>
      </div>
   );
}
