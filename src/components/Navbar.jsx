import React from "react";
import { useEffect } from "react";
const Navbar = ({menuOpen , setMenuOpen}) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  },[menuOpen])

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Here in <a></a> there is a doubt  */}
          <a href="#home" className="font-mono text-xl font-bold text-white ">
            Oops<span className="text-blue-500">.Harshit</span>
          </a>

          {/* Mobile View Hamburger Icon  */}
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          {/* Desktop View  Placing all Icons where we can Route*/}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">{" "}Home{" "}
            </a>

            <a href="#about" className="text-gray-300 hover:text-white transition-colors">{" "}About{" "}
            </a>

            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">{" "}Project{" "}
            </a>

            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">{" "}Contact{" "}
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
