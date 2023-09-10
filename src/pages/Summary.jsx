import HomeHeader from "../components/Home/HomeHeader";
import Footer from "../shared/partial/Footer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Summary = () => {
  const [ readMore, setReadMore ] = useState(false);
  const {id} = useParams();
  const { data: info, isLoading } = useQuery({
    queryKey: ['info', id],
    queryFn: async () => {
      return axios.get(`https://kitsu.io/api/edge/anime/${id}`).then(res=> res.data);
    }
  });

  const formatDate = (dateParam) => {
    const dateObject = new Date(dateParam);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  if (isLoading) return;

  const getyear = (date) => {
    const dateArray = date.split("-");
    return ` (${dateArray[0]})`;
  }

  return (
    <div className="min-h-screen relative flex flex-col">
      <HomeHeader />
      <main className="bg-gray-100 flex flex-1 flex-col px-4 lg:px-[15%] items-center py-8">
        {info.data.attributes.coverImage?.large &&
          <div 
            className="bg-contain min-h-[20vh] relative flex flex-col"
            >
            <img 
              src={info.data.attributes.coverImage.large} 
              alt={info.data.attributes.titles.en}
              className="flex-1 w-full"
            />
          </div>
        }
        <div className="w-full py-6 flex-col 2xl:flex-row flex gap-x-8 justify-center items-center 2xl:items-start">
          <div className="min-w-[140px]">
            <div className="min-h-[10vh] flex flex-col items-center">
              <img 
                className="h-[200px] rounded-sm"
                src={info.data.attributes.posterImage?.medium} 
                alt={info.data.attributes.titles.en} 
              />
              <div 
                className="my-4 rounded-md bg-green-500 text-white text-sm py-1 px-4 cursor-pointer"
              >
                Add to favorites
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h1 className="text-primaryBg font-bold text-2xl text-start mb-4">
              {info.data.attributes.titles.en || info.data.attributes.titles.en_jp}
              <span className="font-medium">{getyear(info.data.attributes.startDate)}</span>
            </h1>
            <p className={readMore ? 'readMore' : 'readLess'}>
              {info.data.attributes.description}
            </p>
            <span 
              className="text-lg text-primaryBg font-bold cursor-pointer hover:underline"
              onClick={() => setReadMore(!readMore)}>{readMore ? 'read less...' : 'read more...'}
            </span>
          </div>
          <div 
            className="bg-white border flex flex-col justify-center border-gray-300 min-w-[300px] rounded-md py-4
            px-8 max-h-[276px] "
          >
            <p className="font-bold text-gray-700">Anime Details</p>
            <div className="flex gap-x-8">
              <div className="flex flex-col text-sm gap-y-3 mt-3 font-bold text-gray-800">
                <p>English</p>
                <p>Japanese</p>
                <p>Type</p>
                <p>Status</p>
                <p>Aired</p>
                <p>Rating</p>
              </div>
              <div className="flex flex-col text-sm gap-y-3 mt-3 items-center">
                <p className="truncate max-w-[150px]">{info.data.attributes.titles?.en || '---'}</p>
                <p className="truncate max-w-[150px]">{info.data.attributes.titles.ja_jp || '---'}</p>
                <p className="truncate max-w-[150px]">{info.data.attributes.subtype || '---'}</p>
                <p className="truncate max-w-[150px]">{info.data.attributes.status === 'finished' ? 'Finished' : 'Currently Airing'}</p>
                <p className="truncate max-w-[150px]">{formatDate(info.data.attributes.startDate) || '---'}</p>
                <p className="truncate max-w-[150px]">{info.data.attributes.ageRatingGuide || '---'}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Summary