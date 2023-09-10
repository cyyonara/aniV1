import { GiHamburgerMenu as Menu } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-primaryBg flex items-center justify-between py-4 relative px-4 lg:px-[20%]">
      <h1 
        className="text-white font-bold text-3xl cursor-pointer"
        onClick={() => navigate('/')}
      >ANISOURCE</h1>
      <nav className='hidden md:flex'>
        <ul className="text-white flex gap-x-8">
          <Link to='/home'>
            <li className='text-xl hover:underline font-light'>Home</li>
          </Link>
          <Link to='*'>
            <li className='text-xl hover:underline font-light'>About</li>
          </Link>
        </ul>
      </nav>
      <Menu 
        className='text-white text-2xl cursor-pointer md:hidden'
        onClick={() => setToggle(!toggle)}
      />
      {toggle && (
        <nav className='bg-primaryBg absolute inset-x-0 top-[68px] md:hidden'>
          <ul className="text-white flex flex-col items-center w-full">
            <Link to='/home' className='w-full text-center py-4 transition-color duration-200 hover:bg-[#571958]'>
              <li className='text-xl w-full font-light'>Home</li>
            </Link>
            <Link to='*' className='w-full text-center py-4 transition-color duration-200 hover:bg-[#571958]'>
              <li className='text-xl w-full font-light'>About</li>
            </Link>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header