import React from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import TheNewYorkTimes from "../images/TheNewYorkTimes.png";
import Footer from '../components/footer.tsx';

const Details = () => {
    const location = useLocation();
    const article = location?.state?.data;

    console.log("Dati articolo:", article);

    return (
        <>
            {/* Header con logo */}
            <div className='p-4 shadow-lg flex justify-center sm:justify-start'>
                <img src={TheNewYorkTimes} className='w-40 sm:w-52' alt="NYT Logo" />
            </div>

            {/* Contenuto principale */}
            <div className="w-full sm:w-8/12 mx-auto p-4">

                {/* Titolo e descrizione */}
                <div className='sm:w-9/12 mx-auto text-center sm:text-left'>
                    <h1 className="font-bold text-2xl">{article?.title || "Titolo non disponibile"}</h1>
                    
                </div>

                {/* Immagine principale */}
                {article?.multimedia?.[0]?.url && (
                    <img
                        className="w-full h-auto mt-4 object-cover rounded-lg"
                        src={article.multimedia[0].url}
                        alt={article.title}
                    />
                )}

                {/* Data e Fonte */}
                <div className='flex flex-col sm:flex-row items-center sm:items-start font-bold mt-4 text-gray-600'>
                    <h1>{moment(article?.pub_date).format('DD-MM-YYYY')}</h1>
                    {article?.source && <h1 className='sm:ml-3'>• {article.source}</h1>}
                </div>

                {/* Contenuto dell'articolo */}
                <p className="font-serif text-lg mt-3 sm:w-9/12 mx-auto text-justify">
                     {article?.snippet || article?.abstract || "Descrizione non disponibile."}
                </p>


            </div>

            <Footer />
        </>
    );
};

export default Details;
