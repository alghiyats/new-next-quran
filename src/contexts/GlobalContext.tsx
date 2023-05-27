import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext<any>({});

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
   const [openNav, setOpenNav] = useState(true);
   const [open, setOpen] = useState(false);

   const handleAddBookmark = useCallback((data: any, id: number) => {
      if (typeof window !== 'undefined') {
         const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
         const newBookmark = data?.verses?.find((verse: any) => verse.number.inQuran === id);
         if (newBookmark) {
            const {
               number: { inSurah, inQuran },
            } = newBookmark;
            const isDuplicate = bookmarks.some((bookmark: any) => bookmark.number_id === inQuran);
            if (!isDuplicate) {
               bookmarks.push({
                  numberSurah: data?.number,
                  name: data?.name,
                  numberInQuran: inQuran,
                  numberInSurah: inSurah,
               });
               localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

               if (typeof window !== 'undefined') {
                  window.dispatchEvent(new Event('bookmarks'));
               }
            }
         }
      }
   }, []);

   const handleRemoveBookmark = useCallback((number: number) => {
      if (typeof window !== 'undefined') {
         const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
         const newBookmarks = bookmarks
            .filter((bookmark: any) => bookmark.numberInQuran !== number)
            .map((bookmark: any) => ({ ...bookmark }));
         localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));

         if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('bookmarks'));
         }
      }
   }, []);

   const handleBookmarkClick = useCallback((item: any, number: number) => {
      if (typeof window !== 'undefined') {
         const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
         const isSaved = bookmarks.some((bookmark: any) => bookmark.numberInQuran === number);
         if (isSaved) {
            handleRemoveBookmark(number);
         } else {
            handleAddBookmark(item, number);
         }
      }
   }, []);

   const [bookmarkSaved, setBookmarkSaved] = useState<any>();

   useEffect(() => {
      const datas = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      setBookmarkSaved(datas);

      const handleLastReadChange = () => {
         const newData = JSON.parse(localStorage.getItem('bookmarks') || '[]');
         setBookmarkSaved(newData);
      };

      window.addEventListener('bookmarks', handleLastReadChange);

      return () => {
         window.removeEventListener('bookmarks', handleLastReadChange);
      };
   }, []);

   return (
      <GlobalContext.Provider
         value={{
            openNav,
            setOpenNav,
            handleBookmarkClick,
            bookmarkSaved,
            handleRemoveBookmark,
            open,
            setOpen,
         }}>
         {children}
      </GlobalContext.Provider>
   );
};

export const useBookmarkContext = () => useContext(GlobalContext);
export const useOpen = () => useContext(GlobalContext);
