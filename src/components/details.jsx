import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import moment from 'moment';
import TheNewYorkTimes from "../images/TheNewYorkTimes.png";
import Footer from './footer';
import backarrow from '../images/backarrow.png';

const Details = () => {
    const location = useLocation();
    const article = location.state?.data; 

    return (
        <>
            <div className='p-4 shadow-lg flex justify-center items-center'>
                <img src={TheNewYorkTimes} className='w-40 sm:w-52' alt="NYT Logo" />
            </div>

            <div className="w-full sm:w-8/12 mx-auto p-4">
                <Link to="/">
                    <div className='flex items-center justify-start relative'>
                        <img src={backarrow} className='w-5 h-5 cursor-pointer' alt="Back arrow"/>
                        <h1 className="rounded-md cursor-pointer transition-colors font-bold ">Back to home</h1>
                    </div>
                </Link>

                <div className='sm:w-9/12 mx-auto text-center sm:text-left mt-6'>
                    <h1 className="font-bold text-2xl">{article ? article.title : "Title not available"}</h1>
                </div>

                {article && article.multimedia && article.multimedia[0] && article.multimedia[0].url && (
                    <img
                        className="w-full h-auto mt-4 object-cover rounded-lg"
                        src={article.multimedia[0].url}
                        alt={article.title}
                    />
                )}

                <div className='flex flex-col sm:flex-row items-center sm:items-start font-bold mt-4 text-gray-600'>
                    <h1>{moment(article?.pub_date).format('DD-MM-YYYY')}</h1>
                    {article && article.source && <h1 className='sm:ml-3'>• {article.source}</h1>}
                </div>

                <p className="font-serif text-lg mt-3 sm:w-9/12 mx-auto text-justify">
                     {article?.snippet || article?.abstract || "Description not available."}
                </p>
            </div>

            <Footer />
        </>
    );
};

export default Details;
