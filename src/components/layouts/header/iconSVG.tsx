import clsx from 'clsx';
import React from 'react';

export default function IconSVG({
   as: Element = 'span',
   htmlFor,
   children,
   customStyle,
   onClick,
}: {
   as?: any;
   htmlFor?: any;
   children: React.ReactNode;
   customStyle?: string;
   onClick?: any;
}) {
   return (
      <Element
         onClick={onClick}
         htmlFor={htmlFor}
         className={clsx(
            'flex items-center relative w-[30px] h-[30px] justify-center placeholder:w-[30px]',
            'after:content-[""] after:bg-transB dark:after:bg-darkBs after:rounded-iconHr after:absolute after:transition-all after:duration-1 after:ease-ease after:opacity-0 after:invisible after:inset-0',
            'hover:after:opacity-100 hover:after:visible hover:after:scale-[1.3]'
         )}>
         <svg
            className={clsx(customStyle, 'stroke-iconC dark:stroke-darkT fill-none stroke-1')}
            strokeLinecap='round'
            strokeLinejoin='round'
            viewBox='0 0 24 24'>
            {children}
         </svg>
      </Element>
   );
}
