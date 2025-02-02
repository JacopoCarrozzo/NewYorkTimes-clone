import React, { useEffect, useState, useRef } from 'react';
import Navbar from './navbar.tsx';
import Home from './home.tsx';
import Sidebar from './sidebar.tsx';
import News from './news.tsx';
import Footer from './footer.tsx';

const API_KEY = "ySxO2sDNnT13huwGZPAElOXY5bAJGZsX"; 


const Main = () => {
    const [news, setNews] = useState<any[]>([]);
    const [menu, setMenu] = useState('world'); 
    const [search, setSearch] = useState ('')

    
    const getNews = async () => {
        try {
            const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${menu}.json?api-key=${API_KEY}`);
            const json = await response.json();
            console.log(`Dati ricevuti per la categoria ${menu}:`, json); 
            setNews(json.results || []); 
        } catch (err) {
            console.error("Errore nel recupero delle news:", err);
        }
    };

    useEffect(() => {
        getNews();
    }, [menu]);

    return (
        <div>
            <Navbar searchRef={searchRef} setMenu={setMenu} setSearch={setSearch}/>
            <div className="flex">
                <Home news={news} num={0}/>
                <Sidebar news={news} num={5}/>
            </div>
            <hr/>
            <div className="flex mt-3">
                <Home news={news} num={1}/>
                <Sidebar news={news} num={6}/>
            </div>
            <hr/>
            <div className="flex mt-3">
                <Home news={news} num={2}/>
                <Sidebar news={news} num={7}/>
            </div>
            <hr/>
            <div className="flex mt-3">
                <Home news={news} num={3}/>
                <Sidebar news={news} num={8}/>
            </div>
            <hr/>
            <div className="flex mt-3">
                <Home news={news} num={4}/>
                <Sidebar news={news} num={9}/>
            </div>
            <hr/>
            <News searchRef={searchRef} search={search} news={news}/>
            <Footer setMenu={setMenu}/>
        </div>
    );
};

export default Main;
