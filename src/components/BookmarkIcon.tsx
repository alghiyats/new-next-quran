import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
function BookmarkIcon({ favId }) {
   const [items, setItems] = useState(getStorageList());
   function getStorageList() {
      const list = localStorage.getItem('bookmarks');
      if (list) {
         return JSON.parse(list);
      } else {
         return [];
      }
   }

   useEffect(() => {
      localStorage.setItem('bookmarks', JSON.stringify(items));
   }, [items]);
   const Favorites = items === null ? false : items.includes(favId);
   const handleToggleFavourite = () => {
      if (Favorites) {
         console.log('remove item');
         const currentList = getStorageList();
         const removeItemId = favId;
         for (var i = 0; i < currentList.length; i++) {
            if (currentList[i] === removeItemId) {
               currentList.splice(i, 1);
            }
            setItems(currentList);
         }
      } else {
         console.log('add item');
         const currentList = getStorageList();
         const newList = [...currentList, favId];
         setItems(newList);
      }
   };
   return (
      <>
         <span
            onClick={handleToggleFavourite}
            className='w-6 h-6 flex items-center justify-center cursor-pointer duration-200'>
            <svg
               className='w-5 h-5 fill-none stroke-gray-500'
               width={20}
               height={20}
               stroke='currentColor'
               strokeWidth={2}
               fill='none'
               viewBox='0 0 24 24'>
               <g transform='translate(4.500000, 2.500000)'>
                  <path d='M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z' />
                  {Favorites ? (
                     <line
                        className='svgC h'
                        transform='translate(-4.500000, -2.500000)'
                        x1={15}
                        x2={9}
                        y1={9}
                        y2={9}
                     />
                  ) : (
                     <>
                        <line
                           className='svgC v'
                           transform='translate(-4.500000, -2.500000)'
                           x1={12}
                           x2={12}
                           y1={6}
                           y2={12}
                        />

                        <line
                           className='svgC h'
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
      </>
   );
}
const FavoriteIcon = dynamic(() => Promise.resolve(BookmarkIcon), {
   ssr: false,
});
export default FavoriteIcon;
