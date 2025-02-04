import React from 'react';
import { Link } from 'react-router-dom';

interface NewsProps {
  news: any[];
  num: number;
  className?: string;
}

const Sidebar = ({ news, num, className }: NewsProps) => {
  const article = news[num];

  return (
    <aside className={`w-full md:w-4/12 border-l px-3 py-4 absolute md:static top-0 right-0 bg-white z-10 ${className}`}>
      {article ? (
        <Link 
        to="/details" 
        state={{ data: news[num] }} 
        className="block hover:bg-gray-100 p-2 rounded-lg transition"
      >
      
          {/* Immagine responsiva */}
          {article.multimedia && article.multimedia.length > 0 ? (
            <img className="w-full h-auto md:h-40 object-cover rounded-lg" 
              src={article.multimedia[0].url} 
              alt={article.title} 
            />
          ) : (
            <p>Immagine non disponibile</p>
          )}

          {/* Titolo e testo */}
          <h1 className="text-lg md:text-2xl font-medium font-serif mt-4 md:mt-7">
            {article.title || "Titolo non disponibile"}
          </h1>

          <p className="text-sm md:text-base text-gray-700">
            {article.abstract || "Nessun riassunto disponibile"}
          </p>
        </Link>
      ) : (
        <p>Articolo non disponibile</p>
      )}
    </aside>
  );
};

export default Sidebar;
