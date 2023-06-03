import clsx from 'clsx';
import React from 'react';

export default function HeaderSearch({ placeholder }: { placeholder: string }) {
   return (
      <div
         className={clsx('sm:m-0 mx-[7.5px]', 'fixed z-[12] top-0 inset-x-0 lg:static sm:hidden')}>
         <form
            className={clsx('relative min-w-[320px]')}
            target='_top'>
            <div
               className={clsx(
                  'relative block transition-all duration-1 ease-ease z-[2] border-0 outline-0',
                  'text-[13px] mt-0 rounded-srchDr bg-[rgba(0,0,0,0.03)] w-[calc(100%_+_26px)] left-[-13px] right-[-13px] py-[12px] px-[42px] h-auto',
                  'hover:bg-transB dark:hover:bg-darkBa',
                  'dark:bg-darkBs'
               )}
               defaultValue=''>
               <span className='text-[rgba(0,0,0,.5)] dark:text-[rgba(255,255,255,.25)]'>
                  {placeholder}
               </span>
            </div>

            <span
               className={clsx(
                  'absolute flex items-center z-[3] opacity-70 h-full bg-transparent p-0 border-0 left-0 top-0 outline-0'
               )}>
               <svg
                  className='w-5 h-5 fill-srchI dark:fill-darkT opacity-80'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g>
                     <path d='M11.0002 1.98828C6.03023 1.98828 1.99023 6.02828 1.99023 10.9983C1.99023 15.9683 6.03023 20.0083 11.0002 20.0083C15.9702 20.0083 20.0102 15.9683 20.0102 10.9983C20.0102 6.02828 15.9702 1.98828 11.0002 1.98828ZM11.0002 13.2483H8.00023C7.59023 13.2483 7.25023 12.9083 7.25023 12.4983C7.25023 12.0883 7.59023 11.7483 8.00023 11.7483H11.0002C11.4102 11.7483 11.7502 12.0883 11.7502 12.4983C11.7502 12.9083 11.4102 13.2483 11.0002 13.2483ZM14.0002 10.2483H8.00023C7.59023 10.2483 7.25023 9.90828 7.25023 9.49828C7.25023 9.08828 7.59023 8.74828 8.00023 8.74828H14.0002C14.4102 8.74828 14.7502 9.08828 14.7502 9.49828C14.7502 9.90828 14.4102 10.2483 14.0002 10.2483Z' />
                     <path d='M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z' />
                  </g>
               </svg>
            </span>
         </form>
      </div>
   );
}
