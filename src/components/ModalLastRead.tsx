export default function ModalLastRead({ handleConfirm, handleCancel, data }) {
   return (
      <>
         <div
            className={`block fixed top-0 left-0 z-20 h-full w-full overflow-y-auto overflow-x-hidden outline-none`}
            tabIndex={-1}
            role='dialog'>
            <div
               onClick={() => handleCancel()}
               className='transition-all duration-300 ease-in-out fixed top-0 left-0 z-[19] bg-black w-screen h-screen opacity-50'
            />
            <div className='pointer-events-none relative flex min-h-[calc(100%-1rem)] mx-auto translate-y-[-50px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] w-[75%] min-[576px]:max-w-[500px] z-30'>
               <div className='pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-secondary bg-clip-padding text-current shadow-lg outline-none dark:bg-darkSecondary'>
                  <div className='flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
                     <h5
                        className='text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200'
                        id='exampleModalScrollableLabel'>
                        Terakhir dibaca
                     </h5>
                     <button
                        onClick={() => handleCancel()}
                        type='button'
                        className='box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
                        data-te-modal-dismiss
                        aria-label='Close'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           fill='none'
                           viewBox='0 0 24 24'
                           strokeWidth='1.5'
                           stroke='currentColor'
                           className='h-6 w-6'>
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M6 18L18 6M6 6l12 12'
                           />
                        </svg>
                     </button>
                  </div>
                  <div className='relative p-4'>
                     <p>
                        Ingin mengganti {data?.nama_latin} ayat {data?.ayat.map(x => x.nomor)}
                     </p>
                  </div>
                  <div className='flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
                     <button
                        onClick={() => handleConfirm()}
                        type='button'
                        className='ml-1 inline-block rounded bg-lightBg dark:bg-darkBg px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white '>
                        Simpan
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
