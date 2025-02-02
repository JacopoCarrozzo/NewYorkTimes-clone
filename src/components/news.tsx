import React, {} from 'react';
import { Link } from 'react-router-dom';

interface NewsProps {
  news: {
    title: string;
    multimedia?: { url: string }[];}[];
    search: string; 
    searchRef: React.RefObject<HTMLHeadingElement>;
}


const News = ({ news, search, searchRef  }: NewsProps) => {
  const filteredNews = news?.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <h1 ref={searchRef} className="text-lg sm:text-xl md:text-2xl font-bold p-3 ml-4 sm:ml-7 mt-4">NEWS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {filteredNews.length > 0 ? (
          filteredNews.map((article, index) => (
      <Link 
          key={index} 
          to="/details" 
          state={{ data: article }} 
          className="block"
        >
          <div className="w-full max-w-xs mx-auto cursor-pointer">
            {article?.multimedia?.[0]?.url ? (
              <img className="w-full h-40 object-cover rounded-lg shadow-md" src={article.multimedia[0].url} alt={article.title}/>
            ) : (
              <div className="w-full h-40 bg-gray-300 flex items-center justify-center text-sm text-gray-600 rounded-lg">
                Nessuna immagine
              </div>
            )}
            <h1 className="mt-2 font-semibold text-lg text-center">{article?.title || "Titolo non disponibile"}</h1>
          </div>
        </Link>
      ))
    ) : (
      <p className="text-center col-span-full text-gray-500">Nessun articolo trovato.</p>
    )}
  </div>
</>
);
};

export default News;
