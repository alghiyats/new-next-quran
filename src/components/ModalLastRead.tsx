import React from 'react';

export default function ModalLastRead({ handleConfirm, handleCancel, isModalOpen }) {
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
            <div className='pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px] z-30'>
               <div className='pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600'>
                  <div className='relative p-4'>
                     <p>This is a vertically centered modal.</p>
                  </div>
                  <div className='flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
                     <button
                        onClick={() => handleCancel()}
                        type='button'
                        className='inline-block rounded bg-[rgb(227_235_247)] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200'
                        data-te-modal-dismiss
                        data-te-ripple-init
                        data-te-ripple-color='light'>
                        Close
                     </button>
                     <button
                        onClick={() => handleConfirm()}
                        type='button'
                        className='ml-1 inline-block rounded bg-[rgb(59_113_202)] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'>
                        Save changes
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
