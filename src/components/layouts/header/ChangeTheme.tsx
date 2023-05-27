import { useEffect, useState } from 'react';
import Head from 'next/head';
import clsx from 'clsx';
import { useTheme } from 'next-themes';

export default function ChangeTheme({ openTheme }: any) {
   const [mounted, setMounted] = useState(false);
   const { theme, setTheme } = useTheme();

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return null;
   }

   return (
      <div
         data-text='Change Theme'
         className={clsx(
            'block absolute top-0 right-0 py-2.5 w-[150px] bg-white dark:bg-darkBs text-sm rounded-[10px_5px_10px_10px] shadow-[0_0_15px_rgba(0,_0,_0,_0.07)] duration-200 overflow-hidden z-[18] cursor-auto before:content-[attr(data-text)] before:block before:p-[0_15px_10px] before:w-full before:text-xs before:opacity-70',
            openTheme ? 'opacity-100 visible' : 'opacity-0 invisible'
         )}>
         <span
            className={clsx(
               'block before:text-inherit cursor-pointer p-[8px_10px] m-[5px] rounded-lg hover:bg-[rgba(0,0,0,0.05)] before:content-[attr(aria-label)] before:opacity-90',
               theme === 'light' && 'bg-[rgba(0,0,0,0.1)]'
            )}
            aria-label='Light'
            onClick={() => setTheme('light')}></span>
         <span
            className={clsx(
               'block before:text-inherit cursor-pointer p-[8px_10px] m-[5px] rounded-lg hover:bg-[rgba(0,0,0,0.05)] before:content-[attr(aria-label)] before:opacity-90',
               theme === 'dark' && 'bg-[rgba(0,0,0,0.1)]'
            )}
            aria-label='Dark'
            onClick={() => setTheme('dark')}></span>
         <span
            className={clsx(
               'block before:text-inherit cursor-pointer p-[8px_10px] m-[5px] rounded-lg hover:bg-[rgba(0,0,0,0.05)] before:content-[attr(aria-label)] before:opacity-90',
               theme === 'system' && 'bg-[rgba(0,0,0,0.1)]'
            )}
            aria-label='System'
            onClick={() => setTheme('system')}></span>
      </div>
   );
}
