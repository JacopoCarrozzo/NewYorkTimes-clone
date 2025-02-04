import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import menuIcon from '../images/menu.png';
import lens from '../images/search.png';
import TheNewYorkTimes from "../images/TheNewYorkTimes.png";
import {auth} from '../firebase/setup.tsx'
import { signOut } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


interface MenuProp {
  setMenu: (category: string) => void;
  setSearch: (query: string) => void;
  searchRef: React.RefObject<HTMLHeadingElement>;
}

const Navbar = ({ setMenu, setSearch, searchRef }: MenuProp) => {
  const [searchIcon, setSearchIcon] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navigate = useNavigate()

  const logout = async() =>{
    try{
      await signOut(auth)
      toast.success('LoggedOut successfully')
      setTimeout(()=>{
      navigate('/')
      },2000)
    }catch(err){
      console.error(err)
    }
    
  }
  const categories = {
    'Mondo': 'world',
    'Attività commerciale': 'business',
    'Arti': 'arts',
    'Stile di vita': 'style',
    'Opinione': 'opinion',
    'Cucina': 'food',
    'L\'Atletico': 'sports',
  };

  console.log(auth)

  return (
    <>
      <ToastContainer autoClose={3000}/>
    
      <div className='w-full bg-white shadow-md hidden lg:block'>

      {/* Navbar superiore */}
      <div className='flex items-center justify-between py-3 px-4 relative'>

        {/* Menu & Search */}
        <div className='flex items-center gap-4 flex-1'> 
          <img src={menuIcon} className='w-6 h-6 cursor-pointer' onClick={() => setSideMenu(prev => !prev)} alt="Menu" />
          {sideMenu && <div onMouseLeave={()=> setSideMenu(false)} className=' font-bold text-sm pl-5 pt-32 pb-4 z-10 absolute bg-white mt-52 shadow-2x1 border border-gray-30 left-0 w-48'>
          <h1 onClick={()=> setMenu('Home')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Home Page</h1>
          <h1 onClick={()=> setMenu('world')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">World</h1>
          <h1 onClick={()=> setMenu('business')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Business</h1>
          <h1 onClick={()=> setMenu('us')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">U.S. Politics</h1>
          <h1 onClick={()=> setMenu('us')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">U.S. News</h1>
          <h1 onClick={()=> setMenu('sports')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Sports</h1>
          <h1 onClick={()=> setMenu('health')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Health</h1>
          <h1 onClick={()=> setMenu('opinion')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Opinion</h1>
          <h1 onClick={()=> setMenu('science')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Science</h1>
          <h1 onClick={()=> setMenu('technology')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Tech</h1>
          <h1 onClick={()=> setMenu('arts')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Arts</h1>
          <h1 onClick={()=> setMenu('books')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Book Review</h1>
          <h1 onClick={()=> setMenu('style')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Style</h1>
          <h1 onClick={()=> setMenu('food')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Food</h1>
          <h1 onClick={()=> setMenu('travel')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Travel</h1>
          <h1 onClick={()=> setMenu('magazine')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Magazine</h1>
  

          </div>}

          <div className='flex items-center relative'>
            <img src={lens} onClick={() => setSearchIcon(!searchIcon)} className='w-5 h-5 cursor-pointer hidden lg:block' alt="Search"/>
            {searchIcon && (<input onChange={(e) => setSearch(e.target.value)} placeholder='SEARCH' className='ml-2 w-40 md:w-64 border border-black rounded-md p-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'/>)}
            {searchIcon && <button  onClick={() => searchRef?.current?.scrollIntoView({ behavior: "smooth" })} 
            className="bg-gray-200 text-gray-600 text-xs font-medium px-3 py-3 h-full rounded-lg border-black ml-2">GO</button>}
        
          </div>
          

        </div>
          
        {/* Sezione categorie - Sempre centrata */}
        <div className='hidden md:flex items-center gap-4 text-xs flex-1 justify-center'>
          <h1 onClick={()=> setMenu('us')} className='cursor-pointer'>U.S.</h1>
          <h1 onClick={()=> setMenu('world')} className='cursor-pointer'>INTERNAZIONALE</h1>
          <h1 onClick={()=> setMenu('world')} className='cursor-pointer'>CANADA</h1>
          <h1 onClick={()=> setMenu('world')} className='cursor-pointer'>SPAGNOLO</h1>
          <h1 onClick={()=> setMenu('world')} className='cursor-pointer'>CINA</h1>
        </div>

        {/* Pulsante Log In */}
        <div className="flex-1 flex justify-end">
          {auth?.currentUser?.displayName || auth?.currentUser?.email ? <button className='ml-96 text-xs' onClick={logout}>LOG OUT</button>
          : <Link to='/login'>
          <button className='text-xs bg-slate-500 px-4 py-1 text-white rounded-sm font-bold'>
            LOGIN
          </button>
        </Link>}
        </div>
      </div>

      {/* Seconda riga con data e logo */}
      <div className='flex items-center justify-between px-4 mt-2'>

        {/* Data e "Today's Paper" sotto */}
        <div className='text-left hidden sm:block'>
          <h1 className='font-bold text-xs'>{moment(new Date()).format("dddd, MMMM D, YYYY")}</h1>
          <h1 className='text-gray-500 text-xs cursor-pointer'>Il giornale di oggi</h1>
        </div>

        {/* Logo - Adattivo su mobile */}
        <div className='flex-1 flex justify-center'>
          <img src={TheNewYorkTimes} className='w-48 md:w-96 h-auto' alt="The New York Times Logo"/>
        </div>

        {/* Spazio vuoto per mantenere il bilanciamento */}
        <div className='w-32'></div>
      </div>

      {/* Menu orizzontale - Mostrato solo su desktop */}
      <div className='block mt-3'>
        <hr className='border-t border-gray-300'/>
        <div className="flex flex-wrap justify-center gap-4 text-sm mt-3 md:gap-4 md:text-xs md:flex">
          {Object.keys(categories).map((cat, index) => (
            <React.Fragment key={cat}>
              <h1
                onClick={() => setMenu(categories[cat])}
                className="cursor-pointer hover:underline"
              >
                {cat}
              </h1>
              {cat === "Opinione" && <h1 className="cursor-pointer">|</h1>}
            </React.Fragment>
          ))}
        </div>

        <hr className='border-t border-gray-300 mt-2'/>
      </div>

      

    </div>

    <div className="w-full bg-white shadow-md top-0 left-0 z-50 sm:block md:block lg:hidden">
        <div className="flex items-center justify-between py-3 px-4 relative">
          {/* Menu & Search */}
          <div className="flex items-center gap-4 flex-1">
            {/* Icona menu mobile */}
            <img
              src={menuIcon}
              className="w-6 h-6 cursor-pointer"
              onClick={() => setMobileMenu(!mobileMenu)}
              alt="Menu"
            />

            {/* MENU MOBILE */}
            {mobileMenu && (
    <div onMouseLeave={()=> setMobileMenu(false)} className="fixed inset-0 bg-white shadow-lg p-5 flex flex-col z-50 sm:w-full sm:h-auto sm:top-auto sm:left-auto sm:p-3 sm:gap-1 sm:max-w-md sm:mx-auto overflow-y-auto">
    <h1 onClick={() => setMenu('Home')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Home Page</h1>
    <h1 onClick={() => setMenu('world')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">World</h1>
    <h1 onClick={() => setMenu('business')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Business</h1>
    <h1 onClick={() => setMenu('us')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">U.S. Politics</h1>
    <h1 onClick={() => setMenu('us')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">U.S. News</h1>
    <h1 onClick={() => setMenu('sports')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Sports</h1>
    <h1 onClick={() => setMenu('health')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Health</h1>
    <h1 onClick={() => setMenu('opinion')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Opinion</h1>
    <h1 onClick={() => setMenu('science')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Science</h1>
    <h1 onClick={() => setMenu('technology')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Tech</h1>
    <h1 onClick={() => setMenu('arts')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Arts</h1>
    <h1 onClick={() => setMenu('books')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Book Review</h1>
    <h1 onClick={() => setMenu('style')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Style</h1>
    <h1 onClick={() => setMenu('food')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Food</h1>
    <h1 onClick={() => setMenu('travel')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Travel</h1>
    <h1 onClick={() => setMenu('magazine')} className="mt-2 px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">Magazine</h1>
  </div>
)}   
          </div>

          {/* Logo - visibile sempre */}
          <div className="flex-1 flex justify-center">
            <img src={TheNewYorkTimes} className="w-48 md:w-96 h-auto" alt="The New York Times Logo" />
          </div>

          {/* Login */}
          <div className="flex-1 flex justify-end">
            {auth?.currentUser?.displayName || auth?.currentUser?.email ? (
              <button className="text-xs" onClick={logout}>
                LOG OUT
              </button>
            ) : (
              <Link to="/login">
                <button className="text-xs bg-slate-500 px-4 py-1 text-white rounded-sm font-bold">LOGIN</button>
              </Link>
            )}
          </div>
        </div>
        <div className="w-full p-2 text-sm font-sm border-t bg-white sm:block">
        {moment(new Date()).format("dddd, MMMM D, YYYY")}
        </div>
      </div>

    </>
    
  );
}

export default Navbar;
