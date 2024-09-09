import React, { useState, useEffect } from 'react';
import PlyrComponent from '../components/PlyrComponent';
import { FaLock, FaUserCircle,FaCloudDownloadAlt,FaRegFilePdf } from 'react-icons/fa'; // For profile and lock icons

const videoList = [
  {
    id: 1,
    title: 'Chapter 01 Basics of HTML',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
  {
    id: 2,
    title: 'Chapter 02 Basics of CSS',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    id: 3,
    title: 'Chapter 03 Basics of JavaScript',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    id: 4,
    title: 'Chapter 04 Basics of Tailwind CSS',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
];

function VideoPage() {
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);
  const [progress, setProgress] = useState(0);

  // Reset progress when a new video is selected
  useEffect(() => {
    setProgress(0);
  }, [currentVideo]);

  // Calculate and update progress based on Plyr's timeupdate event
  const handleTimeUpdate = (event) => {
    const currentTime = event.detail.plyr.currentTime;
    const duration = event.detail.plyr.duration;
    const newProgress = (currentTime / duration) * 100;
    setProgress(newProgress);
  };

  return (
    <div className='mt-10 flex flex-col md:flex-row justify-between px-4 md:px-14 bg-gray-50 dark:bg-gray-950 dark:text-white transition-colors'>

      {/* Left Section - Video Player and Progress */}
      <aside className='md:w-[60%] w-full flex flex-col gap-4'>
        {/* Video Title */}
        <h1 className='ml-4 my-0 text-lg font-semibold'>{currentVideo.title}</h1>

        {/* Video Player */}
        <div className='w-full rounded-xl overflow-hidden shadow-2xl'>
        <PlyrComponent
  options={{
    controls: [
      'rewind',
      'play',
      'fast-forward',
      'progress',
      'current-time',
      'duration',
      'mute',
      'volume',
      'settings',
      'fullscreen',
    ],
    i18n: {
      restart: 'Restart',
      rewind: 'Rewind {seektime}s',
      play: 'Play',
      pause: 'Pause',
      fastForward: 'Forward {seektime}s',
      seek: 'Seek',
      seekLabel: '{currentTime} of {duration}',
      played: 'Played',
      buffered: 'Buffered',
      currentTime: 'Current time',
      duration: 'Duration',
      volume: 'Volume',
      mute: 'Mute',
      unmute: 'Unmute',
      enableCaptions: 'Enable captions',
      disableCaptions: 'Disable captions',
      download: 'Download',
      enterFullscreen: 'Enter fullscreen',
      exitFullscreen: 'Exit fullscreen',
      frameTitle: 'Player for {title}',
      captions: 'Captions',
      settings: 'Settings',
      menuBack: 'Go back to previous menu',
      speed: 'Speed',
      normal: 'Normal',
      quality: 'Quality',
      loop: 'Loop',
    },
  }}
  sources={{
    sources: [
      {
        src: currentVideo.src,
        type: 'video/mp4',
      },
    ],
  }}
  onTimeUpdate={handleTimeUpdate}
/>
        </div>

        {/* Video Progress Bar */}
        <div className='w-full flex items-center mt-4'>
          <div className='relative h-2 w-full rounded-full bg-gray-300'>
            <span
              className='absolute bg-gray-700 top-0 left-0 h-full rounded-full'
              style={{ width: `${progress}%` }}
            ></span>
          </div>
        </div>

        {/* Video Description */}
        <div className='w-full flex flex-col items-center'>
            <div className='relative h-2 py-2 my-[.6rem] w-full rounded-lg shadow-md bg-white'>
                <span className='absolute bg-gray-700 top-1/2 translate-y-[-50%] left-1 w-1/3 h-3 rounded-full'></span>
            </div>
            <div className='rating w-full rounded-full border border-gray-700 shadow-md flex justify-between px-5 bg-white h-10'>
            
                <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </div>

                <div className='w-auto flex justify-end gap-4 py-1'>
                <FaCloudDownloadAlt className='text-3xl'/>
                <FaRegFilePdf className='text-3xl'/>    
                </div>
            </div>
            <p className='w-[85%] text-center mt-3 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro temporibus iste fuga illum soluta dolorum provident itaque?</p>
        </div>
        <div className='note  flex flex-col items-center'>
            <div className='flex gap-3 mt-3'>
                <h2>Note</h2>
                <img className='h-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrQQyDzraK-fywQVCs0gmCssQFXTZmoM3LQ&usqp=CAU" alt="" />
            </div>

            <div className='relative shadow-2xl rounded-xl mb-3 w-[17rem] h-[17rem] bg-gray-100 overflow-hidden'>
                <textarea className='resize-none w-full h-full pr-8 pt-10 border-none' name=""></textarea>
                <span className='absolute top-2 right-2 w-7 cursor-pointer'><img src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png" alt="" /></span>
            </div>
        </div>
      </aside>

      {/* Right Section - Profile, Chapter List, Certificate */}
      <aside className='md:w-[40%] w-full md:pl-6 mt-8 md:mt-0 border p-4 ml-5 border-gray-800 bg-white'>
        {/* Profile Section */}
        <div className='flex flex-col items-center'>
          <FaUserCircle className='text-6xl text-gray-500 mb-2' />
          <h2 className='text-lg font-medium'>John Doe</h2>
        </div>

        {/* Chapter List */}
        <ul className='space-y-4 mt-4'>
  {videoList.map((video) => (
    <li
      key={video.id}
      onClick={() => setCurrentVideo(video)}
      className={`cursor-pointer p-4 rounded-lg shadow-md relative overflow-hidden ${
        currentVideo.id === video.id
          ? 'bg-gray-700 text-white'
          : 'bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-300'
      }`}
    >
      {/* Progress Bar Behind Text */}
      <div
        className='absolute top-0 left-0 h-full bg-gray-400'
        style={{
          width: currentVideo.id === video.id ? `${progress}%` : '0%',
          zIndex: 0,
        }}
      ></div>

      {/* Chapter Text */}
      <div className='relative z-10 flex items-center'>
        <span className='mr-2'>
          {/* Play Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-6.586 3.764A1 1 0 017 13.764V10.236a1 1 0 011.166-.97l6.586 3.764a1 1 0 010 1.732z" />
          </svg>
        </span>
        <span>{video.title}</span>
      </div>
    </li>
  ))}
</ul>


        {/* Certificate Section */}
        <div className='mt-6 flex flex-col items-center gap-10'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtabE7782ZI-k1Nrd9u32r9yKTibYcAUuDyw&usqp=CAU' // Replace with actual certificate image path
            alt='Certificate'
            className='w-48 h-32 mb-2'
          />
          <button className='flex items-center gap-2 text-gray-500'>
            <FaLock className='text-xl' />
            Unlock This Certificate
          </button>
        </div>
      </aside>
    </div>
  );
}

export default VideoPage;
