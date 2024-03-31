import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black justify-between text-center items-center lg:p-2 p-12 sticky">
 
      <Link to="/"><h1 className="text-3xl  lg:text-5xl font-bold lg:px-4 brand">Maliki</h1></Link>
    
   

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li className="font-sans text-base ">
          <Link to="/">
            <a href="" className="text-white hover:text-yellow-700">
              Home
            </a>
          </Link>
        </li>

        <li className="font-sans text-base">
          <Link to="blog">
            <a href="" className="text-white hover:text-yellow-700">
              Blog
            </a>
          </Link>
        </li>

        <li className="font-sans text-base">
        <Link to="create">
            <a href="" className="text-white hover:text-yellow-700">
             Create Blog
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
