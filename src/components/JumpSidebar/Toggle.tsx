import clsx from 'clsx';
import React from 'react';

export default function Toggle({ onToggle, isOpen }) {
   return (
      <div
         onClick={onToggle}
         className='flex bg-inherit absolute inset-x-0 px-[10px] z-[2]'>
         <div
            className={clsx(
               'absolute left-[-45px] top-24 transition-all duration-100 ease-ease',
               isOpen && 'invisible opacity-0'
            )}>
            <svg
               className='w-5 h-5 absolute right-[-2px] top-[-19px] fill-contentB dark:fill-darkB rotate-[92deg] transition-[inherit]'
               viewBox='0 0 160 160'>
               <path
                  d='M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z'
                  transform='translate(0 10)'></path>
            </svg>
            <span className='flex items-center justify-center w-[45px] h-10 rounded-[20px_0_0_20px] bg-contentB dark:bg-darkB shadow-[0_5px_20px_0_rgba(0,0,0,.1)] transition-[inherit]'>
               <svg
                  className='w-5 h-5 fill-iconC dark:fill-darkT'
                  viewBox='0 0 24 24'>
                  <g>
                     <path d='M14.9303 2.5V8.4C14.9303 8.84 14.4103 9.06 14.0903 8.77L12.3403 7.16C12.1503 6.98 11.8503 6.98 11.6603 7.16L9.91031 8.76C9.59031 9.06 9.07031 8.83 9.07031 8.4V2.5C9.07031 2.22 9.29031 2 9.57031 2H14.4303C14.7103 2 14.9303 2.22 14.9303 2.5Z' />
                     <path d='M16.98 2.05891C16.69 2.01891 16.43 2.26891 16.43 2.55891V8.57891C16.43 9.33891 15.98 10.0289 15.28 10.3389C14.58 10.6389 13.77 10.5089 13.21 9.98891L12.34 9.18891C12.15 9.00891 11.86 9.00891 11.66 9.18891L10.79 9.98891C10.43 10.3289 9.96 10.4989 9.49 10.4989C9.23 10.4989 8.97 10.4489 8.72 10.3389C8.02 10.0289 7.57 9.33891 7.57 8.57891V2.55891C7.57 2.26891 7.31 2.01891 7.02 2.05891C4.22 2.40891 3 4.29891 3 6.99891V16.9989C3 19.9989 4.5 21.9989 8 21.9989H16C19.5 21.9989 21 19.9989 21 16.9989V6.99891C21 4.29891 19.78 2.40891 16.98 2.05891ZM17.5 18.7489H9C8.59 18.7489 8.25 18.4089 8.25 17.9989C8.25 17.5889 8.59 17.2489 9 17.2489H17.5C17.91 17.2489 18.25 17.5889 18.25 17.9989C18.25 18.4089 17.91 18.7489 17.5 18.7489ZM17.5 14.7489H13.25C12.84 14.7489 12.5 14.4089 12.5 13.9989C12.5 13.5889 12.84 13.2489 13.25 13.2489H17.5C17.91 13.2489 18.25 13.5889 18.25 13.9989C18.25 14.4089 17.91 14.7489 17.5 14.7489Z' />
                  </g>
               </svg>
            </span>
            <svg
               className='w-5 h-5 absolute top-auto right-[-2px] bottom-[-19px] fill-contentB dark:fill-darkB rotate-[-2deg] transition-[inherit]'
               viewBox='0 0 160 160'>
               <path
                  d='M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z'
                  transform='translate(0 10)'></path>
            </svg>
         </div>
         <div
            className='flex w-full top-0 before:content-[attr(data-text)] before:grow before:pt-6 before:px-[10px] before:text-[90%] before:opacity-70'
            data-text='Jump'>
            <span
               className='px-[10px] pt-6 flex items-center justify-end relative shrink-0 min-w-[40px] before:content-[attr(aria-label)] before:text-[11px] before:mx-4 before:opacity-60 after:content-["\2715"] after:leading-[18px] after:text-[14px]'
               data-texxt='Close'></span>
         </div>
      </div>
   );
}
