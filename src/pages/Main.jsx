import { HiSearch as SearchIcon } from 'react-icons/hi';
import { BsArrowRightCircleFill as ArrowIcon } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ResultList from '../components/Main/ResultList';

const Main = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const { data: list, isLoading } = useQuery({
    queryKey: ['searchAnime', search],
    queryFn: async ({ queryKey }) => {
      const input = queryKey[1]
      return axios.get(`https://kitsu.io/api/edge/anime/?filter[text]=${input}`).then(res => res.data);
    }
  });

  useEffect(() => {
  
    return setSearch('');
  },[])

  const loadingComp = (
    <div className="flex flex-col justify-center items-center absolute h-[80px] py-1 inset-x-0 -bottom-[79px] rounded-bl-md rounded-br-md bg-gray-300">
      <h1 className='text-xl bold text-black'>Loading...</h1>
    </div> 
    );

  
  return (
    <main className='bg-gray-100 flex flex-1 flex-col px-4 lg:px-[20%] items-center py-8'>
      <h1 
        className='text-primaryBg text-4xl font-extrabold my-10 cursor-pointer'
        onClick={() => navigate('/')}
      >ANISOURCE</h1>
      <form className='flex w-full items-center relative'>
        <div className='w-full flex relative z-30'>
          <input type="text" 
            className='w-0 flex-1 text-gray-500 border py-3 px-4 border-gray-300 border-r-0 focus:outline-none rounded-bl-md rounded-tl-md'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div 
          className='bg-primaryBg flex items-center justify-center h-[50px] w-[84px] cursor-pointer rounded-tr-md rounded-br-md'
        >
          <SearchIcon className='text-white text-2xl' />
        </div>
        {search ? ( isLoading ? loadingComp : <ResultList result={list.data} /> ) : null}
      </form>
      <p className='mt-3 text-md italic'>Immerse Yourself in the World of Anime!</p>
      <div 
        className='viewBtn border rounded-md border-primaryBg flex items-center justify-center py-2 px-4 cursor-pointer gap-x-3 transition-all duration-200 hover:bg-primaryBg my-16'
        onClick={() => navigate('/home')}
        >
        <p className='label text-primaryBg font-semibold'>View Full Site</p>
        <ArrowIcon className='label text-primaryBg'/>
      </div>
      <div className='flex flex-col gap-y-10'>
        <p>
          <span className='text-xl font-bold'>Welcome to AniSource - Your Gateway to a World of Anime Awesomeness!</span>
          <br />
          AniSource is an anime channel that immerses you in the captivating universe of Japanese animation, offering an unparalleled journey through the vast and diverse world of anime. With a passion for all things anime, AniSource is the ultimate destination for fans, both new and seasoned, seeking an unforgettable experience filled with entertainment, inspiration, and nostalgia.
        </p>
        <p>
          <span className='text-xl font-bold'>A Treasure Trove of Anime Content:</span>
          <br />
          At AniSource, we curate an extensive collection of anime content that covers a wide spectrum of genres, from action-packed shonen battles to heartwarming slice-of-life stories, and from futuristic sci-fi adventures to enchanting tales of fantasy and magic. Our goal is to cater to a broad audience, ensuring there's something for everyone to enjoy.
        </p>
        <p>
          <span className='text-xl font-bold'>Discover New Series and Classics Alike:</span>
          <br />
          AniSource is dedicated to introducing viewers to the latest anime sensations while also paying homage to timeless classics that have shaped the industry. Whether you're a devoted follower of the newest releases or eager to explore anime gems from yesteryears, AniSource is your reliable source for all the best series and movies.
        </p>
        <p>
          <span className='text-xl font-bold'>Insightful Reviews and Thought-Provoking Analysis:</span>
          <br />
          Our channel doesn't just showcase anime; it also offers in-depth reviews and thought-provoking analysis of various series. Dive into discussions that explore the themes, character developments, and artistic merits of your favorite anime, fostering a deeper appreciation for the medium's creativity and storytelling.
        </p>
        <p>
          <span className='text-xl font-bold'>A Safe Haven for Anime Enthusiasts:</span>
          <br />
          AniSource is committed to creating a safe and inclusive space for all anime enthusiasts, promoting respect and understanding among fans from diverse backgrounds. We encourage healthy discussions and discourage toxicity, ensuring a positive and enjoyable experience for everyone.
        </p>
        <p>
          <span className='text-xl font-bold'>Community and Engagement:</span>
          <br />
          We believe in the power of anime to bring people together and create a vibrant community. Join the AniSource family and interact with like-minded fans through discussions, polls, and special events. Your voice matters, and we value your input in shaping the content we provide.
        </p>
        <p>
          <span className='text-xl font-bold'>Subscribe and Embark on Your Anime Adventure:</span>
          <br />
          So, whether you're a seasoned otaku or a newcomer to the world of anime, AniSource promises to be your ultimate guide. Subscribe to our channel, hit the notification bell, and let us be your trusted AniSource for all things anime! Get ready to dive into an ocean of captivating stories, boundless imagination, and unforgettable moments that only anime can provide. Join us now and let the anime magic begin!
        </p>
      </div>
    </main>
  )
}

export default Main