import React, { useEffect, useState, useRef, useCallback } from 'react';
import Navbar from './navbar.jsx';
import Home from './home.jsx';
import Sidebar from './sidebar.jsx';
import News from './news.jsx';
import Footer from './footer.jsx';

const API_KEY = "ySxO2sDNnT13huwGZPAElOXY5bAJGZsX"; 

const Main = () => {
    const [news, setNews] = useState([]);
    const [menu, setMenu] = useState('world'); 
    const [search, setSearch] = useState('');

    const searchRef = useRef(null);

    const getNews = useCallback(async () => {
        try {
            const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${menu}.json?api-key=${API_KEY}`);
            const json = await response.json();
            setNews(json.results || []); 
        } catch (err) {
            console.error("Errore nel recupero delle news:", err);
        }
    }, [menu]);

    useEffect(() => {
        getNews();
    }, [getNews])

    return (
        <div>
            <Navbar searchRef={searchRef} setMenu={setMenu} setSearch={setSearch} />
            <div className="flex flex-col md:flex-row">
                <Home news={news} num={0} />
                <Sidebar news={news} num={5} className="hidden md:block" />
            </div>
            <hr />
            <div className="flex flex-col md:flex-row mt-3">
                <Home news={news} num={1} />
                <Sidebar news={news} num={6} className="hidden md:block" />
            </div>
            <hr />
            <div className="flex flex-col md:flex-row mt-3">
                <Home news={news} num={2} />
                <Sidebar news={news} num={7} className="hidden md:block" />
            </div>
            <hr />
            <div className="flex flex-col md:flex-row mt-3">
                <Home news={news} num={3} />
                <Sidebar news={news} num={8} className="hidden md:block" />
            </div>
            <hr />
            <div className="flex mt-3">
                <Home news={news} num={4} />
                <Sidebar news={news} num={9} className="hidden md:block" />
            </div>
            <hr />
            <News searchRef={searchRef} search={search} news={news} />
            <Footer setMenu={setMenu} />
        </div>
    );
};

export default Main;
