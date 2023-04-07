import { Chapter } from '../interfaces/Chapter';
import AudioPlayer from './AudioPlayer';
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
   audio: string
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
   audio
}: SurahDetailProps) => {

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
                     className='fill-gray-500 dark:fill-slate-200 w-5 h-5'
                     viewBox='0 0 24 24'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg'>
                     <g>
                        <path d='M20.5 16V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15H19.5C20.05 15 20.5 15.45 20.5 16Z'></path>
                        <path d='M15.5 2H8.5C4.5 2 3.5 3 3.5 7V14.58C4.26 13.91 5.26 13.5 6.35 13.5H19.5C20.05 13.5 20.5 13.05 20.5 12.5V7C20.5 3 19.5 2 15.5 2ZM13 10.75H8C7.59 10.75 7.25 10.41 7.25 10C7.25 9.59 7.59 9.25 8 9.25H13C13.41 9.25 13.75 9.59 13.75 10C13.75 10.41 13.41 10.75 13 10.75ZM16 7.25H8C7.59 7.25 7.25 6.91 7.25 6.5C7.25 6.09 7.59 5.75 8 5.75H16C16.41 5.75 16.75 6.09 16.75 6.5C16.75 6.91 16.41 7.25 16 7.25Z'></path>
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
               {/* <AudioPlayer value={audio} /> */}
            </div>
         </div>
         <div className='m-6'>
            <p
               className='my-4 font-arabic md:text-3xl text-2xl leading-[4.5rem_!important]'
               dir='rtl'>
               {arab}&nbsp;{ayat.toLocaleString('ar-EG')}
            </p>
            <p
               className='text-sm mb-3 font-latin'
               dangerouslySetInnerHTML={{ __html: latin }}></p>
            <p className='text-sm font-arti font-extralight'>{translation}</p>
         </div>
      </div>
   );
};

export default SurahDetail;
