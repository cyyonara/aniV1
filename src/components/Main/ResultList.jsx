import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResultList = ({ result }) => {
  const navigate = useNavigate();
  const [maxLoad, setMaxLoad] = useState(4);

  const formatDate = (dateParam) => {
    const dateObject = new Date(dateParam);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  if (!result.length) return;

  const displayResult = result.slice(0, maxLoad);

  return (
    <div className="flex flex-col absolute h-[400px] pb-1 inset-x-0 -bottom-[398px] border z-0">
      {displayResult.map(anime => {
      console.log(anime)
        return (
          <section className="bg-gray-200 h-[80px] flex px-3 py-2 cursor-pointer border-b border-gray-400"
            key={anime.id}
            onClick={() => navigate(`/summary/${anime.id}`)}
          >
            <div className="h-full flex gap-x-6">
              <img src={anime.attributes.posterImage.tiny || ''} 
                className="h-full"
              />
              <div className="flex flex-col justify-center items-center">
                <div>
                  <p className="text-xl">{anime.attributes.titles.en || anime.attributes.titles.en_jp}</p>
                  <p className="text-sm">{formatDate(anime.attributes.startDate)}</p>
                </div>
              </div>
            </div>
          </section>  
        );
      })}
      {maxLoad < result.length && 
        <div 
          className="text-white flex justify-center items-center cursor-pointer w-full py-4 bg-primaryBg rounded-bl-md rounded-br-md"
          onClick={() => setMaxLoad(maxLoad + 4)}
          >
            Load more...
        </div>
      }
    </div>
  )
}

export default ResultList