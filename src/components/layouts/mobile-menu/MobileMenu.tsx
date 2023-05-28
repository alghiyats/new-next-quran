import { useOpen } from '@/contexts/GlobalContext';
import clsx from 'clsx';
import React from 'react';

export default function MobileMenu() {
   const { open, setOpen } = useOpen();
   const toggleSidebar = () => {
      setOpen(!open);
   };

   return (
      <div className='lg:hidden fixed rounded-[12px_12px_0_0] bg-mobB text-mobT shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)] z-[12] text-xs px-5 py-0 bottom-0 inset-x-0 mt-0 dark:bg-darkBa dark:text-darkTa'>
         <ul className='h-[55px] flex items-center justify-center list-none m-0 p-0 [&_li]:flex [&_li]:justify-center [&_li]:flex-[1_0_20%] [&_li_>*]:flex-col [&_li_>*]:relative [&_li_>*]:inline-flex [&_li_>*]:items-center [&_li_>*]:justify-center [&_li_>*]:min-w-[35px] [&_li_>*]:h-[35px] [&_li_>*]:transition-all [&_li_>*]:duration-100 [&_li_>*]:ease-ease [&_li_>*]:text-inherit [&_li_>*]:px-2 [&_li_>*]:py-0 rounded-[20px] [&_li_>*]:dark:text-darkT'>
            <li>
               <span onClick={toggleSidebar}>
                  <svg
                     className={clsx(
                        open && 'fill-linkC dark:fill-darkU',
                        'stroke-mobT opacity-80 mx-[3px] shrink-0 fill-none w-[22px] h-[22px] dark:stroke-darkT'
                     )}
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
            </li>
         </ul>
      </div>
   );
}
