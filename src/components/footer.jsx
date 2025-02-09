import React from 'react';
import TheNewYorkTimes from "../images/TheNewYorkTimes.png";

const Footer = (props) => {
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
            <h1 className='cursor-pointer' onClick={() => {props.setMenu && props.setMenu('home'); window.scrollTo({ top: 0, behavior: 'smooth' });}}>Home</h1>
            <h1 className='cursor-pointer' onClick={() => {props.setMenu && props.setMenu('World'); window.scrollTo({ top: 0, behavior: 'smooth' });}}>World</h1>
            <h1 className='cursor-pointer' onClick={() => {props.setMenu && props.setMenu('health'); window.scrollTo({ top: 0, behavior: 'smooth' });}}>Coronavirus</h1>
            <h1 className='cursor-pointer' onClick={() => {props.setMenu && props.setMenu('us'); window.scrollTo({ top: 0, behavior: 'smooth' });}}>U.S. World</h1>
            <h1 className='cursor-pointer' onClick={() => {props.setMenu && props.setMenu('politics'); window.scrollTo({ top: 0, behavior: 'smooth' });}}>U.S. Politics</h1>
          </div>
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <h1 className="font-bold text-sm">ARTS</h1>
            <h1 className='cursor-pointer' onClick={() => {props.setMenu && props.setMenu('movies'); window.scrollTo({ top: 0, behavior: 'smooth' });}}>Movies</h1>
            <h1 className='cursor-pointer' onClick={() => {props.setMenu && props.setMenu('books'); window.scrollTo({ top: 0, behavior: 'smooth' });}}>Books</h1>
            <h1 className='cursor-pointer' onClick={() => {props.setMenu && props.setMenu('arts'); window.scrollTo({ top: 0, behavior: 'smooth' });}}>Arts</h1>
          </div>
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <h1 className="font-bold text-sm">LIVING</h1>
            <h1 className='cursor-pointer' onClick={() => {props.setMenu && props.setMenu('food'); window.scrollTo({ top: 0, behavior: 'smooth' });}}>Food</h1>
            <h1 className='cursor-pointer' onClick={() => {props.setMenu && props.setMenu('travel'); window.scrollTo({ top: 0, behavior: 'smooth' });}}>Travel</h1>
            <h1 className='cursor-pointer' onClick={() => {props.setMenu && props.setMenu('jobs'); window.scrollTo({ top: 0, behavior: 'smooth' });}}>Jobs</h1>
          </div>
        </div>

        {/* Copyright con testo responsivo */}
        <h1 className="mt-5 text-xs text-center text-gray-600 leading-5">
          © 2025 The New York Times Company |  
          <span className="block sm:inline"> Contact Us | Accessibility | Work with us | Advertising</span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
