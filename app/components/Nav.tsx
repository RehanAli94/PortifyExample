'use client'
import React from 'react';
// import {Link} from 'react-scroll';
import { BiHomeAlt , BiUser } from 'react-icons/bi';
import {BsClipboardData,BsBriefcase,BsChatSquare, BsChatSquareText} from 'react-icons/bs';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
// import { Link } from 'react-scroll'


const Nav = () => {
  


    return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className="container mx-auto">
<div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
 <Link 
    href='#home' className=' active:text-white cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
    <BiHomeAlt/>
  </Link>
<Link 
  href='#about'  className='active:text-white cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
 <BiUser/>
  </Link>
  <Link 
  href='#services' className='ease-in active:text-white cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
  <BsClipboardData/>
  </Link>
  <Link 
  href='#work' className = 'ease-in active:text-white cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
  <BsBriefcase/>
  </Link>
  <Link 
  href='#contact' className='ease-in active:active active:text-white cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
  <BsChatSquareText/>
  </Link>
</div>
</div>

  </nav>;
  };

  export default Nav;