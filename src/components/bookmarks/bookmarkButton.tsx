import { useBookmarkContext } from '@/contexts/GlobalContext';

export default function BookmarkButton({ item, id }: any) {
   const { handleBookmarkClick, bookmarkSaved } = useBookmarkContext();

   return (
      <span
         onClick={() => handleBookmarkClick(item, id)}
         className='w-6 h-6 flex items-center justify-center cursor-pointer'>
         <svg
            className='w-5 h-5 fill-none dark:group-hover:stroke-darkU dark:stroke-darkT stroke-iconC'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <g transform='translate(4.500000, 2.500000)'>
               <path d='M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z' />

               {bookmarkSaved?.some(e => e.numberInQuran === id) ? (
                  <line
                     transform='translate(-4.500000, -2.500000)'
                     x1={15}
                     x2={9}
                     y1={9}
                     y2={9}
                  />
               ) : (
                  <>
                     <line
                        transform='translate(-4.500000, -2.500000)'
                        x1={12}
                        x2={12}
                        y1={6}
                        y2={12}
                     />
                     <line
                        transform='translate(-4.500000, -2.500000)'
                        x1={15}
                        x2={9}
                        y1={9}
                        y2={9}
                     />
                  </>
               )}
            </g>
         </svg>
      </span>
   );
}
