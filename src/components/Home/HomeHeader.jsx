import { Link, useNavigate } from 'react-router-dom';
import { HiSearch as SearchIcon } from 'react-icons/hi';

const HomeHeader = () => {

  const navigate = useNavigate();

  return (
    <header className="bg-primaryBg flex items-center justify-between py-4 px-6 lg:px-[20%]">
      <div>
        <h1 
          className="text-white font-bold text-3xl cursor-pointer"
          onClick={() => navigate('/')}
        >ANISOURCE</h1>
        <p className='text-white text-sm font-thin italic'>Immerse Yourself in the World of Anime!</p>
      </div>
      <div className='flex w-[35%] relative items-center'>
        <input type="text" placeholder='Enter anime name' className='text-gray-500 text-sm w-0 flex-1 py-2 px-3 rounded-tl-md rounded-bl-md focus:outline-none'/>
        <div className='bg-white h-[36px] w-10 flex items-center justify-center rounded-tr-md rounded-br-md'>
          <SearchIcon className='text-primaryBg '/>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader