import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-1 w-full">
      <div className="text-center">
        <p className="text-sm mt-2">All Rights Reserved © {new Date().getFullYear()}</p>
        <p className="text-sm flex justify-center items-center gap-2 mt-1">
          Created with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-green-500"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          by <a href="https://github.com/Manpreets59/Password-Manager" target="_blank" rel="noopener noreferrer" className="text-green-500 underline">Manpreet Singh</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;