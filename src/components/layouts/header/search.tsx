import clsx from 'clsx';
import React from 'react';
import Close from '../../close';

export default function Search() {
   return (
      <div className={clsx('sm:m-0 mx-[7.5px]', 'fixed z-[12] top-0 inset-x-0 lg:static')}>
         <form
            className={clsx('relative min-w-[320px]')}
            target='_top'>
            <input
               className={clsx(
                  'relative block placeholder-[rgba(0,0,0,.5)] dark:placeholder-[rgba(255,255,255,.25)] bg-srchB mt-[-100%] w-full h-[72px] transition-all duration-1 ease-ease z-[2] rounded-[0_0_20px_20px] px-[55px] py-2.5 border-0 outline-0',
                  'lg:text-[13px] lg:mt-0 lg:rounded-srchDr lg:bg-[rgba(0,0,0,0.03)] lg:w-[calc(100%_+_26px)] lg:left-[-13px] lg:right-[-13px] lg:py-[12px] lg:px-[42px] lg:h-auto',
                  'lg:focus:shadow-none lg:focus:bg-transB lg:focus:mt-0 [&:focus~button]:opacity-90 dark:focus:bg-darkBa focus:mt-0 focus:shadow-[0_10px_40px_rgba(0,0,0,0.2)]',
                  'lg:hover:bg-transB lg:dark:hover:bg-darkBa',
                  'dark:bg-darkBa lg:dark:bg-darkBs'
               )}
               aria-label='Cari blog ini'
               autoComplete='off'
               id='searchIn'
               minLength={3}
               placeholder="Try 'Adventure'"
               defaultValue=''
            />
            <span
               className={clsx(
                  'absolute flex items-center z-[3] opacity-70 h-full bg-transparent px-5 py-0 border-0 left-0 top-0 outline-0',
                  'lg:p-0'
               )}>
               <svg
                  className={
                     'w-[18px] h-[18px] stroke-srchI dark:stroke-darkT fill-none opacity-80'
                  }
                  viewBox='0 0 24 24'>
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
               </svg>
            </span>
            <button
               aria-label='Clear'
               className={clsx(
                  'absolute flex items-center z-[3] h-full bg-transparent px-5 py-0 border-0 top-0 outline-0',
                  'lg:p-0',
                  'left-auto right-0 opacity-0 text-[13px] before:content-["✕"]'
               )}
               data-text='âœ•'
               type='reset'
            />
            <Close
               customStyles={clsx(
                  'sm:[input:focus~&]:opacity-100 sm:[input:focus~&]:visible opacity-0 invisible sm:[input:focus~&]:bg-[rgba(0,0,0,0.2)] sm:[input:focus~&]:backdrop-saturate-[180%] sm:[input:focus~&]:backdrop-blur-[10px]'
               )}
            />
         </form>
      </div>
   );
}
