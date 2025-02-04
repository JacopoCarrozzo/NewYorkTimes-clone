import React from 'react';
import { Link } from 'react-router-dom';

interface NewsProps {
    news: any[];
    num: number; 
}

const Home = ({ news, num }: NewsProps) => {
    console.log(`Rendering article index: ${num}`, news[num]); 

    return (
        <div className="w-full sm:w-8/12 mx-auto p-4">
            {news.length === 0 ? (
                <p>Caricamento in corso...</p>
            ) : news.length > num && news[num] ? (  // ✅ Controllo aggiuntivo per evitare errori di array fuori limite
                <Link to="/details" state={{ data: news[num] }} className="block">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start">
                        {/* Testo */}
                        <div className="sm:w-1/2 w-full text-center sm:text-left">
                            <h1 className="font-bold text-xl font-serif">{news[num].title}</h1>
                            <h2 className="font-serif text-sm mt-2">{news[num].abstract}</h2>
                            <Link  // ✅ Cambiato da <span> a <Link> per garantire la navigazione corretta
                                to="/details"
                                state={{ data: news[num] }}
                                className="text-blue-600 mt-2 inline-block"
                            >
                                Leggi di più
                            </Link>
                        </div>

                        {/* Immagine */}
                        {news[num].multimedia?.[0]?.url && (
                            <img
                                className="w-full sm:w-8/12 h-auto sm:h-96 mt-4 sm:mt-0 sm:ml-7 object-cover"
                                src={news[num].multimedia[0].url}
                                alt={news[num].title}
                            />
                        )}
                    </div>
                </Link>
            ) : (
                <p>Nessun articolo trovato.</p>
            )}
        </div>
    );
};

export default Home;
