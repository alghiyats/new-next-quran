import Link from 'next/link';
import React from 'react';

export default function Footer() {
   return (
      <footer className='pb-5 pt-10 text-[97%] px-6 max-w-screen-xl mx-auto'>
         <div className='p-5 bg-secondary dark:bg-darkSecondary rounded-xl shadow-[0_5px_35px_rgba(0,0,0,.1)] relative overflow-hidden'>
            <div className='flex flex-wrap relative -left-[15px] -right-[15px]'>
               <div className='mx-[15px]'>
                  <div className='pb-4'>
                     <div
                        className='before:content-[attr(data-text)] before:text-[13px] before:block before:mb-1'
                        data-text='Made with ️❤️ by Next Quran'>
                        <div>
                           <div className='flex-[0_0_calc(100%_-_82px)]'>
                              <h2 className='text-inherit text-xl font-bold'>Next Quran</h2>
                              <p className='mt-1 overflow-hidden'>Baca Al-Quran Online.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='flex justify-between items-baseline relative w-[calc(100%_+_20px)] -left-[10px] -right-[10px]'>
               <div className='mx-[10px]'>
                  <div className='inline-flex'>
                     <span className='credit'>
                        <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>©</span>
                        <span>{new Date().getFullYear()} </span>
                        <bdi>
                           <Link
                              href='/'
                              className='inline-flex items-center'>
                              Next Quran
                              <svg
                                 viewBox='0 0 24 24'
                                 className='ml-1 w-[13px] h-[13px] fill-link dark:fill-darkLink'>
                                 <path d='M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z' />
                              </svg>
                           </Link>
                        </bdi>{' '}
                        ‧ All rights reserved.
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
