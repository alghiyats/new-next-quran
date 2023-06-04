import React, { useState } from 'react';
import clsx from 'clsx';
import ChangeTheme from './ChangeTheme';
import { useSidebar } from '@/contexts/SidebarContext';
import HeaderIcon from './HeaderIcon';
import HamIcon from '../../icons/HamIcon';
import HeaderTitle from './HeaderTitle';
import HeaderSearch from './HeaderSearch';
import SearchIcon from '../../icons/SearchIcon';
import BookmarkIcon from '../../icons/BookmarkIcon';
import ForClose from '../ForClose/ForClose';
import SunIcon from '../../icons/SunIcon';
import MoonIcon from '../../icons/MoonIcon';
import ArrowLeft from '../../icons/ArrowLeft';
import Bookmarks from '../Bookmark/Bookmarks';

export default function Header() {
   const { onToggle, isOpen } = useSidebar();
   const [openTheme, setOpenTheme] = useState(false);
   const [openBookmarks, setOpenBookmarks] = useState(false);

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
                  <HeaderIcon onClick={onToggle}>{isOpen ? <ArrowLeft /> : <HamIcon />}</HeaderIcon>
               </div>
               <HeaderTitle title='Next Quran' />
            </div>
            <div
               className={clsx(
                  'grow transition-all duration-1 ease-ease px-[25px]',
                  'sm:grow-0 sm:pr-5'
               )}>
               <div
                  className={
                     'h-full flex items-center justify-between sm:justify-end relative w-[calc(100%_+_15px)] left-[-7.5px] right-[-7.5px]'
                  }>
                  <HeaderSearch placeholder="Try 'Adventure'" />
                  <div className={'flex justify-end relative mx-[7.5px]'}>
                     <div>
                        <ul className='text-[11px] flex m-0 p-0 list-none relative w-[calc(100%_+_14px)] left-[-7px] right-[-7px] justify-end [&_li]:mx-[2px] [&>*]:relative'>
                           <li className='hidden sm:block cursor-pointer'>
                              <HeaderIcon>
                                 <SearchIcon />
                              </HeaderIcon>
                           </li>
                           <li className='cursor-pointer'>
                              <HeaderIcon onClick={() => setOpenBookmarks(true)}>
                                 <BookmarkIcon />
                              </HeaderIcon>
                           </li>
                           <li className='cursor-pointer'>
                              <HeaderIcon onClick={() => setOpenTheme(true)}>
                                 <MoonIcon />
                                 <SunIcon />
                              </HeaderIcon>
                              <ChangeTheme openTheme={openTheme} />
                              <ForClose
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
