import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

function Header() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white sticky top-0 dark:bg-black">
      <div className={`shadow-md py-3`}>
        <div className="flex justify-between max-w-[1000px] mx-auto px-6">
          <div className="flex items-center">
            <div className="hidden cursor-pointer select-none items-center rounded-md border p-2 mr-2 hover:bg-blue-500 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <Link href={'/'}>
              <span className="font-semibold">Next Quran</span>
            </Link>
          </div>
          <div className="ml-2 flex gap-x-2">
            <Link href={'/'}>
              <div
                className={`${
                  router.pathname === '/' ? 'bg-gray-100 dark:bg-gray-700 ' : ''
                }flex cursor-pointer items-center gap-x-1 rounded-md  p-2 sm:py-2 sm:px-4 hover:bg-gray-100 hover:dark:bg-gray-700`}>
                <svg
                  className="h-5 w-5 fill-gray-500 dark:fill-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <g strokeWidth={0} />
                  <g strokeLinecap="round" strokeLinejoin="round" />
                  <g>
                    <rect width={24} height={24} fill="none" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9931 3.43368C12.8564 2.42331 11.1436 2.42331 10.0069 3.43368L2.33565 10.2526C1.92286 10.6195 1.88568 11.2516 2.2526 11.6644C2.61952 12.0771 3.25159 12.1143 3.66437 11.7474L4.00001 11.4491L4.00001 17.0658C3.99996 17.9523 3.99992 18.7161 4.08215 19.3278C4.17028 19.9833 4.36903 20.6117 4.87869 21.1213C5.38835 21.631 6.0167 21.8297 6.67222 21.9179C7.28388 22.0001 8.04769 22 8.93418 22H15.0658C15.9523 22 16.7161 22.0001 17.3278 21.9179C17.9833 21.8297 18.6117 21.631 19.1213 21.1213C19.631 20.6117 19.8297 19.9833 19.9179 19.3278C20.0001 18.7161 20.0001 17.9523 20 17.0659L20 11.4491L20.3356 11.7474C20.7484 12.1143 21.3805 12.0771 21.7474 11.6644C22.1143 11.2516 22.0772 10.6195 21.6644 10.2526L13.9931 3.43368ZM12 16C11.4477 16 11 16.4477 11 17V19C11 19.5523 10.5523 20 10 20C9.44772 20 9 19.5523 9 19V17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17V19C15 19.5523 14.5523 20 14 20C13.4477 20 13 19.5523 13 19V17C13 16.4477 12.5523 16 12 16Z"
                    />
                  </g>
                </svg>
                <span className="hidden sm:block text-sm font-medium">
                  Home
                </span>
              </div>
            </Link>
            <Link href={'/surah'}>
              <div
                className={`${
                  router.pathname === '/surah'
                    ? 'bg-gray-100 dark:bg-gray-700 '
                    : ''
                }flex cursor-pointer items-center gap-x-1 rounded-md  p-2 sm:py-2 sm:px-4 hover:bg-gray-100 hover:dark:bg-gray-700`}>
                <svg
                  className="w-5 h-5 fill-gray-500 dark:fill-white"
                  viewBox="-32 0 512 512"
                  xmlns="http://www.w3.org/2000/svg">
                  <g strokeWidth={0} />
                  <g strokeLinecap="round" strokeLinejoin="round" />
                  <g>
                    <path d="M448 358.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16c0-6.4-3.2-12.8-9.6-19.2-3.2-16-3.2-60.8 0-73.6 6.4-3.2 9.6-9.6 9.6-19.2zM301.08 145.82c.6-1.21 1.76-1.82 2.92-1.82s2.32.61 2.92 1.82l11.18 22.65 25 3.63c2.67.39 3.74 3.67 1.81 5.56l-18.09 17.63 4.27 24.89c.36 2.11-1.31 3.82-3.21 3.82-.5 0-1.02-.12-1.52-.38L304 211.87l-22.36 11.75c-.5.26-1.02.38-1.52.38-1.9 0-3.57-1.71-3.21-3.82l4.27-24.89-18.09-17.63c-1.94-1.89-.87-5.17 1.81-5.56l24.99-3.63 11.19-22.65zm-57.89-69.01c13.67 0 27.26 2.49 40.38 7.41a6.775 6.775 0 1 1-2.38 13.12c-.67 0-3.09-.21-4.13-.21-52.31 0-94.86 42.55-94.86 94.86 0 52.3 42.55 94.86 94.86 94.86 1.03 0 3.48-.21 4.13-.21 3.93 0 6.8 3.14 6.8 6.78 0 2.98-1.94 5.51-4.62 6.42-13.07 4.87-26.59 7.34-40.19 7.34C179.67 307.19 128 255.51 128 192c0-63.52 51.67-115.19 115.19-115.19zM380.8 448H96c-19.2 0-32-12.8-32-32s16-32 32-32h284.8v64z" />
                  </g>
                </svg>
                <span className="hidden sm:block text-sm font-medium">
                  Surah
                </span>
              </div>
            </Link>
            <div className="flex cursor-pointer items-center gap-x-1 rounded-md p-2 sm:py-2 sm:px-4 hover:bg-gray-100 hover:dark:bg-gray-700">
              <div className="relative">
                <svg
                  className="w-5 h-5 fill-gray-500 dark:fill-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <g strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g>
                    <path d="M6,22H19a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H6A2,2,0,0,0,4,4V20A2,2,0,0,0,6,22ZM7,4h5v8L9.5,10,7,12Z" />
                  </g>
                </svg>
                <span className="flex absolute -top-2 -right-2 h-4 w-4 items-center justify-center rounded-full bg-blue-500 dark:bg-emerald-500 p-2 text-xs text-white">
                  3
                </span>
              </div>
              <span className="hidden sm:block text-sm font-medium">
                Bookmark
              </span>
            </div>
            <div
              onClick={
                theme === 'dark'
                  ? () => setTheme('light')
                  : () => setTheme('dark')
              }
              className="flex cursor-pointer select-none items-center rounded-md p-2 hover:bg-gray-100 hover:dark:bg-gray-700">
              {theme !== 'dark' ? (
                <svg
                  className="dark:hidden h-5 w-5 fill-gray-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <g strokeWidth={0} />
                  <g strokeLinecap="round" strokeLinejoin="round" />
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.23129 2.24048C9.24338 1.78695 10.1202 2.81145 9.80357 3.70098C8.72924 6.71928 9.38932 10.1474 11.6193 12.3765C13.8606 14.617 17.3114 15.2755 20.3395 14.1819C21.2206 13.8637 22.2173 14.7319 21.7817 15.7199C21.7688 15.7491 21.7558 15.7782 21.7427 15.8074C20.9674 17.5266 19.7272 19.1434 18.1227 20.2274C16.4125 21.3828 14.3957 22.0001 12.3316 22.0001H12.3306C9.93035 21.9975 7.6057 21.1603 5.75517 19.6321C3.90463 18.1039 2.64345 15.9797 2.18793 13.6237C1.73241 11.2677 2.11094 8.82672 3.2586 6.71917C4.34658 4.72121 6.17608 3.16858 8.20153 2.25386L8.23129 2.24048Z"
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  className="hidden dark:block h-5 w-5 fill-gray-500 dark:fill-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <g strokeWidth={0} />
                  <g strokeLinecap="round" strokeLinejoin="round" />
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
                      fill="#323232 dark:fill-white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C12.5523 2 13 2.44772 13 3V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V3C11 2.44772 11.4477 2 12 2Z"
                      fill="#323232 dark:fill-white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L17.7071 7.70711C17.3166 8.09763 16.6834 8.09763 16.2929 7.70711C15.9024 7.31658 15.9024 6.68342 16.2929 6.29289L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289Z"
                      fill="#323232 dark:fill-white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 12C18 11.4477 18.4477 11 19 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H19C18.4477 13 18 12.5523 18 12Z"
                      fill="#323232 dark:fill-white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.2929 16.2929C16.6834 15.9024 17.3166 15.9024 17.7071 16.2929L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L16.2929 17.7071C15.9024 17.3166 15.9024 16.6834 16.2929 16.2929Z"
                      fill="#323232 dark:fill-white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 18C12.5523 18 13 18.4477 13 19V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V19C11 18.4477 11.4477 18 12 18Z"
                      fill="#323232 dark:fill-white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.70711 16.2929C8.09763 16.6834 8.09763 17.3166 7.70711 17.7071L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L6.29289 16.2929C6.68342 15.9024 7.31658 15.9024 7.70711 16.2929Z"
                      fill="#323232 dark:fill-white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 12C2 11.4477 2.44772 11 3 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H3C2.44772 13 2 12.5523 2 12Z"
                      fill="#323232 dark:fill-white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"
                      fill="#323232 dark:fill-white"
                    />
                  </g>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
