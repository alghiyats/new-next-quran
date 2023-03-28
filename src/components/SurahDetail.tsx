import { Chapter } from '../interfaces/Chapter';
import Bookmark from './Bookmark';
import LastRead from './LastRead';
type SurahDetailProps = {
   item: Chapter;
   arab: string;
   translation: string;
   ayat: number;
   data: any;
   latin: string;
   check: any;
   id: number;
   Tafsir: any;
   setCheck: any;
   setNewData: any;
   setIsModalOpen: any;
};

const SurahDetail = ({
   item,
   arab,
   translation,
   ayat,
   latin,
   check,
   id,
   Tafsir,
   setCheck,
   setIsModalOpen,
   setNewData,
}: SurahDetailProps) => {
   const gh = w => {
      const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
      const numberString = String(w);
      let result = '';

      for (let i = 0; i < numberString.length; i++) {
         const digit = parseInt(numberString[i]);
         result += arabicNumbers[digit];
      }

      return result;
   };

   return (
      <div
         id={`${ayat}`}
         className='bg-secondary dark:bg-darkSecondary scroll-mt-20 flex shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl justify-between flex-col gap-y-2'>
         <div className='px-4 py-2 gap-3 dark:bg-darkBg bg-lightBg flex items-center w-full justify-between rounded-t-xl'>
            <div>
               <span className='text-sm'>{ayat}</span>
            </div>
            <div className='flex items-center flex-row-reverse gap-2'>
               <span
                  onClick={() => Tafsir(id)}
                  className='w-6 h-6 flex items-center justify-center cursor-pointer'>
                  <svg
                     className='w-5 h-5'
                     viewBox='0 0 24 24'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg'>
                     <g>
                        <path
                           className='stroke-gray-500 dark:stroke-slate-200'
                           d='M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z'
                           stroke='#000000'
                           strokeWidth={2}
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        />
                        <path
                           className='stroke-gray-500 dark:stroke-slate-200'
                           d='M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z'
                           stroke='#000000'
                           strokeWidth={2}
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        />
                        <path
                           className='stroke-gray-500 dark:stroke-slate-200'
                           d='M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z'
                           stroke='#000000'
                           strokeWidth={2}
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        />
                     </g>
                  </svg>
               </span>
               <LastRead
                  item={item}
                  id={id}
                  ayat={ayat}
                  check={check}
                  setCheck={setCheck}
                  setIsModalOpen={setIsModalOpen}
                  setNewData={setNewData}
               />
               <Bookmark
                  item={item}
                  id={id}
               />
            </div>
         </div>
         <div className='m-6'>
            <p
               className='my-4 font-arabic md:text-3xl text-2xl leading-[3.5rem_!important]'
               dir='rtl'>
               {arab}&nbsp;{gh(ayat)}
            </p>
            <p
               className='text-sm font-semibold mb-2'
               dangerouslySetInnerHTML={{ __html: latin }}></p>
            <p className='text-sm'>{translation}</p>
         </div>
      </div>
   );
};

export default SurahDetail;
