import React from 'react';

export default function Footer() {
   return (
      <footer className='text-[97%] leading-[1.8em] text-fotT dark:text-darkT pt-10 pb-5 px-0'>
         <div className='relative overflow-hidden shadow-[0_5px_35px_rgba(0,0,0,0.1)] p-5 rounded-[10px] bg-fotB dark:bg-darkBs'>
            <div className='flex flex-wrap relative w-[calc(100%_+_30px)] left-[-15px] right-[-15px]'>
               <div className='mx-6 mb-[30px]'>
                  <div
                     data-text='Made with coffee by'
                     className='before:content-[attr(data-text)] before:text-[13px] before:opacity-60 before:block before:mb-[3px]'>
                     <div className='my-[10px]'>
                        <h2>Next Quran</h2>
                        <p>Baca Al-Quran Online</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className='inline-flex'>
               <span className='credit'>
                  <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>©</span>{' '}
                  <span id='getYear'>2023</span>{' '}
                  <bdi>
                     <a
                        className='inline-flex items-center'
                        href='/'>
                        Next Quran
                        <svg
                           className='w-[13px] h-[13px] mx-[3px] fill-linkC dark:fill-darkU'
                           viewBox='0 0 24 24'>
                           <path d='M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z'></path>
                        </svg>
                     </a>
                  </bdi>{' '}
                  ‧ All rights reserved.
               </span>
            </div>
         </div>
      </footer>
   );
}
