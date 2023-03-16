export default function ModalLastRead({
   actionConfirm,
   actionCancel,
   children,
   modalTitle,
   titleConfirm,
}) {
   return (
      <>
         <div
            className='fixed flex justify-center items-center left-0 z-50 h-[80%] w-full overflow-y-auto overflow-x-hidden outline-none'
            tabIndex={-1}>
            <div
               onClick={actionCancel}
               className='undefined transition-all duration-300 ease-in-out fixed top-0 left-0 z-[29] bg-black w-screen h-screen opacity-50'
               data-te-backdrop-show
            />
            <div className='z-30 pointer-events-none relative h-[80%] w-[85%] sm:w-[60%] md:w-[55%] lg:w-[50%] translate-y-[-50px]  transition-all duration-300 ease-in-out'>
               <div className='pointer-events-auto relative flex max-h-[100%] w-full flex-col overflow-hidden rounded-md border-none bg-secondary bg-clip-padding text-current shadow-lg outline-none dark:bg-darkSecondary'>
                  <div className='flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
                     <h5 className='text-xl font-medium leading-normal'>{modalTitle}</h5>
                     <button
                        onClick={actionCancel}
                        type='button'
                        className='box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
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
                  {children}
                  <div className='flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
                     <button
                        onClick={actionConfirm}
                        type='button'
                        className='ml-1 inline-block rounded bg-lightBg dark:bg-darkBg px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal'>
                        {titleConfirm}
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
