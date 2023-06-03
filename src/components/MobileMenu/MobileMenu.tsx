import { useOpen } from '@/contexts/GlobalContext';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import MoonIcon from '../../icons/MoonIcon';
import SunIcon from '../../icons/SunIcon';
import HomeIcon from '../Sidebars/icons/HomeIcon';
import HamIcon from '@/icons/HamIcon';
import { useSidebar } from '@/contexts/SidebarContext';

const IsHome = ({ children }: { children?: React.ReactNode }) => {
   const router = useRouter();
   if (router.pathname === '/') {
      return <span className='opacity-70'>{children}</span>;
   }
   return (
      <Link href={'/'}>
         <a>{children}</a>
      </Link>
   );
};

export default function MobileMenu() {
   const { onToggle } = useSidebar();
   const { theme, setTheme } = useTheme();

   const toggleSidebar = () => {};

   const toggleTheme = () => {
      if (theme == 'dark') setTheme('light');
      else setTheme('dark');
   };

   return (
      <div className='lg:hidden fixed rounded-[12px_12px_0_0] bg-mobB text-mobT shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)] z-[15] text-xs px-5 py-0 bottom-0 inset-x-0 mt-0 dark:bg-darkBa dark:text-darkTa'>
         <ul className='h-[55px] flex items-center justify-center list-none m-0 p-0 [&_li]:flex [&_li]:justify-center [&_li]:flex-[1_0_20%] [&_li_>*]:flex-col [&_li_>*]:relative [&_li_>*]:inline-flex [&_li_>*]:items-center [&_li_>*]:justify-center [&_li_>*]:min-w-[35px] [&_li_>*]:h-[35px] [&_li_>*]:transition-all [&_li_>*]:duration-100 [&_li_>*]:ease-ease [&_li_>*]:text-inherit [&_li_>*]:px-2 [&_li_>*]:py-0 rounded-[20px] [&_li_>*]:dark:text-darkT'>
            <li className='[&_svg]:fill-iconC [&_svg]:dark:fill-darkT'>
               <IsHome>
                  <HomeIcon />
               </IsHome>
            </li>
            <li>
               <span>
                  <svg
                     className='fill-iconC dark:fill-darkT'
                     viewBox='0 0 24 24'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg'>
                     <g>
                        <path d='M20.1 9.2214C18.29 9.2214 17.55 7.9414 18.45 6.3714C18.97 5.4614 18.66 4.3014 17.75 3.7814L16.02 2.7914C15.23 2.3214 14.21 2.6014 13.74 3.3914L13.63 3.5814C12.73 5.1514 11.25 5.1514 10.34 3.5814L10.23 3.3914C9.78 2.6014 8.76 2.3214 7.97 2.7914L6.24 3.7814C5.33 4.3014 5.02 5.4714 5.54 6.3814C6.45 7.9414 5.71 9.2214 3.9 9.2214C2.86 9.2214 2 10.0714 2 11.1214V12.8814C2 13.9214 2.85 14.7814 3.9 14.7814C5.71 14.7814 6.45 16.0614 5.54 17.6314C5.02 18.5414 5.33 19.7014 6.24 20.2214L7.97 21.2114C8.76 21.6814 9.78 21.4014 10.25 20.6114L10.36 20.4214C11.26 18.8514 12.74 18.8514 13.65 20.4214L13.76 20.6114C14.23 21.4014 15.25 21.6814 16.04 21.2114L17.77 20.2214C18.68 19.7014 18.99 18.5314 18.47 17.6314C17.56 16.0614 18.3 14.7814 20.11 14.7814C21.15 14.7814 22.01 13.9314 22.01 12.8814V11.1214C22 10.0814 21.15 9.2214 20.1 9.2214ZM12 15.2514C10.21 15.2514 8.75 13.7914 8.75 12.0014C8.75 10.2114 10.21 8.7514 12 8.7514C13.79 8.7514 15.25 10.2114 15.25 12.0014C15.25 13.7914 13.79 15.2514 12 15.2514Z' />
                     </g>
                  </svg>
               </span>
            </li>
            <li>
               <span
                  onClick={onToggle}
                  className='[&_svg]:fill-iconC [&_svg]:dark:fill-darkT'>
                  <HamIcon />
               </span>
            </li>
            <li>
               <span
                  onClick={toggleTheme}
                  className='[&_svg]:fill-iconC [&_svg]:dark:fill-darkT'>
                  <MoonIcon />
                  <SunIcon />
               </span>
            </li>
            <li>
               <span onClick={() => scrollTo({ top: 0 })}>
                  <svg
                     className='fill-iconC dark:fill-darkT'
                     viewBox='0 0 24 24'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg'>
                     <g>
                        <path d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.82 10.82C16.53 11.11 16.05 11.11 15.76 10.82L12.75 7.81V18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V7.81L8.24 10.82C7.95 11.11 7.47 11.11 7.18 10.82C7.03 10.67 6.96 10.48 6.96 10.29C6.96 10.1 7.04 9.9 7.18 9.76L11.47 5.47C11.61 5.33 11.8 5.25 12 5.25C12.2 5.25 12.39 5.33 12.53 5.47L16.82 9.76C17.11 10.05 17.11 10.52 16.82 10.82Z' />
                     </g>
                  </svg>
               </span>
            </li>
         </ul>
      </div>
   );
}
