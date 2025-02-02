import React from 'react';
import TheNewYorkTimes from "../images/TheNewYorkTimes.png";

interface menuProp {
  setMenu?: (category: string) => void;
}

const Footer = (props:menuProp) => {
  return (
    <div className="p-7 bg-gray-100">
      <div>
        <hr />
        <hr className="mt-1" />
        {/* Logo responsivo */}
        <div className="flex justify-center sm:justify-start">
          <img src={TheNewYorkTimes} className="w-auto h-8 mt-3" alt="NYT Logo" />
        </div>

        {/* Menu responsive */}
        <div className="flex flex-wrap justify-between p-4 text-center sm:text-left">
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <h1 className="font-bold text-sm">NEWS</h1>
            <h1 className='cursor-pointer' onClick={() => props.setMenu && props.setMenu('home')}>Home Page</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('World')}>World</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('health')}>Coronavirus</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('us')}>U.S. World</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('politics')}>U.S. Politics</h1>
          </div>
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <h1 className="font-bold text-sm">OPINION</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('opinion')}>Today's Opinion</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('editorials')}>Editorials</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('opinion-video')}>Opinion video</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('letters')}>Letters</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('columnists')}>Columnists</h1>
          </div>
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <h1 className="font-bold text-sm">ARTS</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('movies')}>Movies</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('books')}>Books</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('arts')}>Arts</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('music')}>Music</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('dance')}>Dance</h1>
          </div>
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <h1 className="font-bold text-sm">LIVING</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('food')}>Food</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('wellness')}>Wellness</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('travel')}>Travel</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('Love')}>Love</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('jobs')}>Jobs</h1>
          </div>
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <h1 className="font-bold text-sm">MORE</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('food')}>Food</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('cooking')}>Cooking</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('graphics')}>Graphics</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('podcasts')}>Podcasts</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('video')}>Video</h1>
            <h1 className='cursor-pointer'onClick={() => props.setMenu && props.setMenu('articles')}>Articles</h1>
          </div>
        </div>

        {/* Copyright con testo responsivo */}
        <h1 className="mt-5 text-xs text-center text-gray-600 leading-5">
          © 2025 La Società del New York Times |  
          <span className="block sm:inline"> Contattaci | Accessibilità | Lavora con noi | Pubblicità</span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
