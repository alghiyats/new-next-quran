import clsx from 'clsx';
import React from 'react';

export default function ForClose({
   onClick,
   customStyles,
}: {
   onClick?: any;
   customStyles?: string;
}) {
   return (
      <div
         onClick={onClick}
         className={clsx(
            customStyles,
            'block fixed z-[1] transition-all duration-1 ease-ease bg-transparent -inset-2/4 cursor-auto'
         )}></div>
   );
}
