import HomeHeader from "../components/Home/HomeHeader";
import Footer from "../shared/partial/Footer";
import ShowCard from "../components/Home/ShowCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Pagination } from "@mui/material"
import { useState, useEffect } from "react";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: animeList, isLoading } = useQuery({
    queryKey: ['animeList', currentPage],
    queryFn: async ({ queryKey }) => {
      const startingIndex = 20 * (queryKey[1] - 1);
      return axios.get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${startingIndex}`)
      .then(res => res.data);
    }
  })

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const onPageChange = (event, page) => {
    setCurrentPage(page);
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <HomeHeader />
      <main className="bg-gray-100 flex flex-1 flex-col px-4 lg:px-[20%] items-center py-8">
        {isLoading ? <h1 className="text-3xl font-bold">Loading..</h1> : 
          <div className="w-full flex flex-1 flex-col">
            <h1 className="text-xl font-bold mb-4">Explore</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 flex-1 gap-4 xl:grid-cols-5">
              {animeList.data.map(anime => {
                console.log(anime)
                return (
                  <ShowCard 
                    key={anime.id}
                    id={anime.id}
                    cardImage={anime.attributes.posterImage?.large}
                    title1={anime.attributes.titles?.en}
                    title2={anime.attributes.titles?.en_jp}
                    jpTitle={anime.attributes.titles?.ja_jp}
                    episodeCount={anime.attributes?.episodeCount}
                    description={anime.attributes?.description}
                    status={anime.attributes?.status}
                    dateAired={anime.attributes?.startDate}
                    endDate={anime.attributes?.endDate}
                  />  
                );
              })}
            </div>
          </div>
        }
        <Pagination 
          count={Math.ceil(12_067/20)} 
          color="secondary" 
          className="mt-9 "
          onChange={onPageChange}
         />
      </main>
      <Footer />
    </div>
  )
}

export default Home