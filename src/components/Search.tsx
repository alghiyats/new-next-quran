export default function Searc({ search, setSearch, placeholder }) {
   return (
      <div className='my-6 p-1'>
         <form className='relative flex items-center'>
            <span className='w-6 h-6 flex items-center justify-center absolute ml-4'>
               <svg
                  className='h-5 w-5'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g>
                     <path
                        className='stroke-gray-500 dark:stroke-slate-200 stroke-2'
                        d='M20 20L15.8033 15.8033C15.8033 15.8033 14 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 11.0137 17.9484 11.5153 17.85 12'
                        stroke='#000000'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                     />
                  </g>
               </svg>
            </span>

            <input
               type='search'
               className='dark:bg-darkSecondary shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl bg-secondary w-full py-4 pl-12 pr-4 font-semibold focus:outline-none'
               value={search}
               onChange={e => setSearch(e.target.value)}
               placeholder={placeholder}
            />
         </form>
      </div>
   );
}
