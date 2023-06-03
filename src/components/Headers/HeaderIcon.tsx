import clsx from 'clsx';
import React from 'react';

export default function HeaderIcon({
   children,
   onClick,
}: {
   children: React.ReactNode;
   onClick?: () => void;
}) {
   return (
      <span
         onClick={onClick}
         className={clsx(
            'flex items-center relative w-[30px] h-[30px] justify-center placeholder:w-[30px]',
            'after:content-[""] after:bg-transB dark:after:bg-darkBs after:rounded-iconHr after:absolute after:transition-all after:duration-1 after:ease-ease after:opacity-0 after:invisible after:inset-0',
            'hover:after:opacity-100 hover:after:visible hover:after:scale-[1.3]',
            '[&_svg>*]:dark:fill-darkT [&_svg]:z-[1] [&_svg>*]:fill-iconC [&_svg]:w-5 [&_svg]:h-5'
         )}>
         {children}
      </span>
   );
}
