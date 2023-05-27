import { useBookmarkContext } from '@/contexts/GlobalContext';

export default function BookmarkButton({ item, id }: any) {
   const { handleBookmarkClick, bookmarkSaved } = useBookmarkContext();

   return (
      <span
         onClick={() => handleBookmarkClick(item, id)}
         className='w-6 h-6 flex items-center justify-center cursor-pointer'>
         {bookmarkSaved?.some(e => e.numberInQuran === id) ? (
            <svg
               className='fill-gray-500 dark:fill-slate-200 w-5 h-5'
               viewBox='0 0 24 24'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'>
               <g>
                  <path d='M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2ZM14.5003 11.4H9.50031C9.09031 11.4 8.75031 11.06 8.75031 10.65C8.75031 10.24 9.09031 9.9 9.50031 9.9H14.5003C14.9103 9.9 15.2503 10.24 15.2503 10.65C15.2503 11.06 14.9103 11.4 14.5003 11.4Z'></path>
               </g>
            </svg>
         ) : (
            <svg
               className='fill-gray-500 dark:fill-slate-200 w-5 h-5'
               viewBox='0 0 24 24'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'>
               <g>
                  <path d='M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2ZM14.5003 11.4H12.7503V13.21C12.7503 13.62 12.4103 13.96 12.0003 13.96C11.5903 13.96 11.2503 13.62 11.2503 13.21V11.4H9.50031C9.09031 11.4 8.75031 11.06 8.75031 10.65C8.75031 10.24 9.09031 9.9 9.50031 9.9H11.2503V8.21C11.2503 7.8 11.5903 7.46 12.0003 7.46C12.4103 7.46 12.7503 7.8 12.7503 8.21V9.9H14.5003C14.9103 9.9 15.2503 10.24 15.2503 10.65C15.2503 11.06 14.9103 11.4 14.5003 11.4Z'></path>
               </g>
            </svg>
         )}
      </span>
   );
}
