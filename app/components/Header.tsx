import React from "react";
// images
import Image from 'next/image'
import Logo  from '../assets/logo.svg';
const Header = () => {
    return <header id="header" className=" relative py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo  */}
          <a href="#">
            <Image src={Logo} alt="loading..." />
          </a>
          {/* button */}
          <button className="btn btn-sm">Work with Me</button>
        </div>
      </div>
    </header>;
  };
  
  export default Header;