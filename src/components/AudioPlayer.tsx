import { useState } from 'react';

const AudioPlayer = ({ value }) => {
    const [song, setSong] = useState(null);

    function handleButtonClick(e) {
        const newSong = new Audio();
        newSong.src = e.target.value;
        newSong.play();
        setSong(newSong);
    }
    return (
        <button
            onClick={handleButtonClick} value={value}
            className='w-6 h-6 flex items-center justify-center cursor-pointer'>Play
            {/* <svg
                className='fill-gray-500 dark:fill-slate-200 w-5 h-5'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                {isLoading && (
                    <path
                        d='M12 3V6M3 12H6M5.63607 5.63604L7.75739 7.75736M5.63604 18.3639L7.75736 16.2426M21 12.0005H18M18.364 5.63639L16.2427 7.75771M11.9998 21.0002V18.0002M18.3639 18.3642L16.2426 16.2429'
                        stroke='#000000'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'></path>
                )}
                {isLoading && isPlaying && (
                    <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M14 8C14.5523 8 15 8.44772 15 9L15 15C15 15.5523 14.5523 16 14 16C13.4477 16 13 15.5523 13 15L13 9C13 8.44772 13.4477 8 14 8ZM10 8C10.5523 8 11 8.44772 11 9L11 15C11 15.5523 10.5523 16 10 16C9.44771 16 9 15.5523 9 15L9 9C9 8.44772 9.44772 8 10 8ZM7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782Z'
                    />
                )}
                {isLoading && !isPlaying && (
                    <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M3 5.49686C3 3.17662 5.52116 1.73465 7.52106 2.91106L18.5764 9.41423C20.5484 10.5742 20.5484 13.4259 18.5764 14.5858L7.52106 21.089C5.52116 22.2654 3 20.8234 3 18.5032V5.49686Z'
                    />
                )}
            </svg> */}
        </button>
    );
};

export default AudioPlayer;
