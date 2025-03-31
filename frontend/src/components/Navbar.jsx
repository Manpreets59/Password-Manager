import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white fixed top-0 w-full">
      <div className="mycontainer flex justify-between items-center px-20 py-5 h-14">
        <div className="logo font-bold text-white text-2xl ">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>
        <ul>
          <li className="flex gap-4 ">
            <a className="hover:font-bold" href="#">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              About
            </a>
            <a className="hover:font-bold" href="#">
              Contact
            </a>
            <a className="hover:font-bold" href="#">
              <button>
                <a
                  href="https://github.com/Manpreets59/Password-Manager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/jjxzcivr.json"
                    trigger="hover"
                    colors="primary:#ffffff,secondary:#ffffff"
                  ></lord-icon>
                </a>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
