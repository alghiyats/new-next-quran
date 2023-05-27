import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import MobileMenu from '@/components/layouts/mobile-menu/MobileMenu';
import Sidebar from '@/components/layouts/sidebar';
import { SidebarProvider } from '@/contexts/SidebarContext';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
   children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
   return (
      <div>
         <SidebarProvider>
            <Header />
            <div className='lg:flex'>
               <Sidebar />
               <div
                  className={clsx(
                     'grow relative transition-all duration-100 ease-ease pt-5',
                     'lg:w-[calc(100%_-_230px)] lg:pt-[30px]',
                     'before:content-[""] before:absolute before:top-[-60px] before:h-[calc(100%_+_60px)] before:left-0 dark:before:border-[rgba(255,255,255,.15)] lg:dark:before:border-r-[rgba(255,255,255,0.15)] lg:dark:before:border-r lg:dark:before:border-solid'
                  )}>
                  <div className='max-w-contentW mx-auto px-5 lg:px-[25px]'>
                     <div className='flex-wrap justify-center pb-10 lg:flex'>{children}</div>
                     <MobileMenu />
                     <Footer />
                  </div>
               </div>
            </div>
         </SidebarProvider>
      </div>
   );
};

export default Layout;
