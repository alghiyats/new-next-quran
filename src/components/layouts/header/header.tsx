import React, { useState } from 'react';
import clsx from 'clsx';
import ChangeTheme from './ChangeTheme';
import IconSVG from './iconSVG';
import Search from './search';
import Close from '../../close';
import Bookmarks from '../../bookmarks/bookmarks';
import { useSidebar } from '@/contexts/SidebarContext';
import { useTheme } from 'next-themes';

export default function Header() {
   const { isOpen, toggleSidebar } = useSidebar();
   const [openTheme, setOpenTheme] = useState(false);
   const [openBookmarks, setOpenBookmarks] = useState(false);
   const { theme } = useTheme();

   return (
      <header
         className={clsx(
            'w-full z-10 sticky shadow-[0_0_15px_rgba(0,0,0,0.07)] top-0',
            'sm:shadow-none sm:border-none',
            'dark:lg:border-b dark:lg:shadow-none dark:lg:border-b-[rgba(255,255,255,0.15)] dark:lg:border-solid'
         )}>
         <div
            className={clsx(
               'relative h-headerH text-headerC bg-headerB flex',
               'dark:bg-darkB dark:text-darkT'
            )}>
            <div
               className={clsx(
                  'flex items-center w-navW transition-all duration-1 ease-ease pl-5',
                  'sm:grow sm:w-1/2 sm:pl-[15px]'
               )}>
               <div className={clsx('flex-[0_0_30px]', 'text-[11px] flex m-0 p-0')}>
                  <IconSVG
                     onClick={toggleSidebar}
                     customStyle={clsx(
                        isOpen ? '[&>*:last-child]:opacity-100' : '[&>*:first-child]:opacity-100',
                        '[&>*]:opacity-0 [&>*]:transition-all [&>*]:duration-1 [&>*]:ease-ease',
                        'z-[1] stroke-headerI fill-none w-5 h-5 opacity-80'
                     )}>
                     <g>
                        <path d='M 3 18 H 14 M 10 6 H 21' />
                        <line
                           className='svgC'
                           x1={3}
                           x2={21}
                           y1={12}
                           y2={12}
                        />
                     </g>
                     <g transform='translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) translate(5.000000, 8.500000)'>
                        <path d='M14,0 C14,0 9.856,7 7,7 C4.145,7 0,0 0,0' />
                     </g>
                  </IconSVG>
               </div>
               <div className={clsx('w-[calc(100%_-_30px)] pl-[5px]')}>
                  <h1 className='block text-inherit text-headerT font-bold'>
                     <span className='overflow-hidden whitespace-nowrap text-ellipsis block select-none'>
                        Next Quran
                     </span>
                  </h1>
               </div>
            </div>
            <div
               className={clsx(
                  'grow transition-all duration-1 ease-ease px-[25px]',
                  'sm:grow-0 sm:pr-5'
               )}>
               <div
                  className={
                     'h-full flex items-center justify-between relative w-[calc(100%_+_15px)] left-[-7.5px] right-[-7.5px]'
                  }>
                  <Search />
                  <div className={'flex justify-end relative mx-[7.5px]'}>
                     <div>
                        <ul className='text-[11px] flex m-0 p-0 list-none relative w-[calc(100%_+_14px)] left-[-7px] right-[-7px] justify-end [&_li]:mx-[2px] [&>*]:relative'>
                           <li className='hidden sm:block cursor-pointer'>
                              <IconSVG
                                 htmlFor={'searchIn'}
                                 as={'label'}
                                 customStyle='z-[1] stroke-headerI fill-none w-5 h-5 opacity-80'>
                                 <g>
                                    <circle
                                       cx='11.36167'
                                       cy='11.36167'
                                       r='9.36167'
                                    />
                                    <line
                                       className='svgC'
                                       x1={22}
                                       x2='19.9332'
                                       y1={22}
                                       y2='19.9332'
                                    />
                                 </g>
                              </IconSVG>
                           </li>
                           <li className='cursor-pointer'>
                              <IconSVG
                                 onClick={() => setOpenBookmarks(true)}
                                 customStyle='z-[1] stroke-headerI fill-none w-5 h-5 opacity-80'>
                                 <g transform='translate(4.500000, 2.500000)'>
                                    <path d='M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z' />
                                 </g>
                              </IconSVG>
                           </li>
                           <li className='cursor-pointer'>
                              <IconSVG
                                 onClick={() => setOpenTheme(true)}
                                 customStyle='z-[1] stroke-headerI fill-none w-5 h-5 opacity-80'>
                                 <g className='dark:hidden'>
                                    <path d='M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z' />
                                    <path
                                       d='M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z'
                                       strokeWidth={2}
                                    />
                                 </g>
                                 <g className='hidden dark:block'>
                                    <path
                                       d='M183.72453,170.371a10.4306,10.4306,0,0,1-.8987,3.793,11.19849,11.19849,0,0,1-5.73738,5.72881,10.43255,10.43255,0,0,1-3.77582.89138,1.99388,1.99388,0,0,0-1.52447,3.18176,10.82936,10.82936,0,1,0,15.118-15.11819A1.99364,1.99364,0,0,0,183.72453,170.371Z'
                                       transform='translate(-169.3959 -166.45548)'
                                    />
                                 </g>
                              </IconSVG>
                              <ChangeTheme openTheme={openTheme} />
                              <Close
                                 onClick={() => setOpenTheme(false)}
                                 customStyles={clsx(
                                    openTheme ? 'visible opacity-100 z-[17]' : 'invisible opacity-0'
                                 )}
                              />
                           </li>
                        </ul>
                     </div>
                     <Bookmarks
                        openBookmarks={openBookmarks}
                        setOpenBookmarks={setOpenBookmarks}
                     />
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}
