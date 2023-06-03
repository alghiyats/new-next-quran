import JumpSidebar from '@/components/JumpSidebar/JumpSidebar';
import SurahInfo from '@/components/surah-info';
import React from 'react';

export default function DetailLayout({
   children,
   dataAyah,
   dataSurah,
}: {
   children: React.ReactNode;
   dataAyah: any;
   dataSurah: any;
}) {
   return (
      <>
         <main className='scroll-pb-6 lg:flex-[1_0_calc(100%_-_250px_-_25px)] lg:w-[calc(100%_-_250px_-_25px)] flex flex-col gap-[30px] relative'>
            <SurahInfo
               name={dataAyah?.name}
               revelation={dataAyah?.revelation}
               numberOfVerses={dataAyah?.numberOfVerses}
               preBismillah={dataAyah?.preBismillah}
            />
            {children}
         </main>
         <JumpSidebar
            dataAyah={dataAyah}
            dataSurah={dataSurah}
         />
      </>
   );
}
