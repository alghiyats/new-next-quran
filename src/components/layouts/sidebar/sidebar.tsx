import clsx from 'clsx';
import React from 'react';
import Close from '@/components/close';
import { ListMenu } from './listMenu';
import { useSidebar } from '@/contexts/SidebarContext';
import Link from 'next/link';

export default function Sidebar() {
   const { isOpen, toggleSidebar } = useSidebar();
   return (
      <>
         <div
            className={clsx(
               !isOpen ? 'lg:w-[75px]' : 'lg:w-[230px] sm:ml-[0!important]',
               'lg:shrink-0 lg:relative lg:transition-all lg:duration-1 lg:ease-ease lg:z-[1]',
               'sm:flex sm:justify-start sm:fixed sm:ml-[-100%] sm:z-20 sm:transition-all sm:duration-1 sm:ease-ease sm:w-full sm:h-full sm:left-0 sm:inset-y-0'
            )}>
            <div
               className={clsx(
                  'sm:w-[85%] sm:max-w-[480px] sm:h-full sm:transition-[inherit] sm:z-[3] sm:overflow-hidden sm:relative sm:shadow-[0_5px_30px_0_rgba(0,0,0,0.05)] sm:rounded-[0_12px_12px_0]',
                  'lg:sticky lg:top-[60px] dark:lg:top-[61px]'
               )}>
               <div
                  className={clsx(
                     'sm:overflow-y-scroll sm:overflow-x-hidden sm:w-full sm:h-full sm:pt-[60px]',
                     'bg-contentB dark:bg-darkB dark:text-darkT',
                     'lg:shadow-[0_0_15px_rgba(0,0,0,0.07)] lg:flex lg:h-[calc(100vh_-_61px)] lg:text-[13px] lg:relative dark:lg:shadow-none [&>*]:lg:w-full'
                  )}>
                  <div
                     className={clsx(
                        'flex bg-inherit absolute z-[2] px-2.5 py-0 top-0 inset-x-0 sm:px-[15px]',
                        'lg:hidden'
                     )}>
                     <span
                        onClick={toggleSidebar}
                        aria-label='Close'
                        className={clsx(
                           'sm:py-[15px] sm:px-[10px]',
                           'before:content-["✕"] before:text-[14px] leading-[18px]',
                           'after:content-[attr(aria-label)] after:text-[11px] after:mx-2 after:opacity-60'
                        )}
                     />
                  </div>
                  <div
                     className={clsx(
                        'py-5 px-[15px] pb-[100px] sm:pt-0',
                        'lg:p-5 lg:w-full',
                        !isOpen
                           ? 'lg:overflow-y-visible lg:overflow-x-visible'
                           : 'lg:overflow-y-hidden lg:overflow-x-hidden'
                     )}>
                     <div>
                        <ul className='list-none m-0 p-0 [&>li]:relative'>
                           {ListMenu?.map((list, i) => {
                              return (
                                 <li key={i}>
                                    <Link href={list.path}>
                                       <a
                                          className={clsx(
                                             'hover:opacity-90 hover:bg-transB hover:text-linkC flex items-center relative w-[calc(100%_+_10px)] left-[-5px] right-[-5px] transition-all duration-1 ease-ease px-[5px] py-2.5 rounded-lg',
                                             'dark:text-darkT dark:hover:bg-[rgba(0,0,0,.15)] dark:hover:text-darkU',
                                             '[&>*]:mx-[5px] group',
                                             !isOpen &&
                                                'lg:max-w-[40px] lg:rounded-[15px] lg:hover:opacity-100 lg:hover:text-inherit'
                                          )}>
                                          {list.icon}
                                          <span
                                             className={clsx(
                                                'block font-medium whitespace-nowrap overflow-hidden text-ellipsis flex-[1_0_calc(100%_-_64px)]',
                                                !isOpen &&
                                                   'lg:absolute lg:max-w-[160px] lg:bg-contentB lg:text-bodyC lg:opacity-0 lg:invisible lg:shadow-[0_5px_20px_0_rgba(0,0,0,0.1)] lg:z-[1] lg:mx-[5px] lg:my-0 lg:px-2.5 lg:py-2 lg:rounded-[5px_16px_16px_16px] lg:left-[35px] lg:top-[3px] lg:dark:bg-darkBa lg:dark:shadow-[0_10px_40px_rgba(0,0,0,0.2)] lg:dark:text-darkTa lg:group-hover:opacity-100 lg:group-hover:visible'
                                             )}>
                                             {list.name}
                                          </span>
                                       </a>
                                    </Link>
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <Close
               onClick={toggleSidebar}
               customStyles={clsx(
                  !isOpen ? 'sm:opacity-0 sm:invisible' : 'sm:opacity-100 sm:visible',
                  'lg:hidden sm:bg-[rgba(0,0,0,0.2)] sm:backdrop-saturate-[180%] sm:backdrop-blur-[10px]'
               )}
            />
         </div>
      </>
   );
}
