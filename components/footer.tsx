import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
// import "tailwindcss/tailwind.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 relative w-auto text-gray-50 mt-20 p-2">
      <div className=" items-center justify-center text-center">
        <h1 className="text-2xl text-gray-400 mt-8 ">
          Developed by:{" "}
          <span className="font-bold font-mono text-2xl text-white">
            Mustapha Jaiteh, Software Developer
          </span>
        </h1>
        <h2 className="text-gray-300 text-2xl font-bold">Contact me at:</h2>

        <p>
          <span className="text-gray-400">Email:</span> jaitehm20@gmail.com
        </p>

        <p>
          <span className="text-gray-400">Phone:</span> +220 3609991
        </p>
        <a
          href="https://mustik-portfolio.netlify.app/"
          className="inline-block relative text-xs font-bold tracking-wider "
        >
          <span className="text-gray-400">My portfolio: </span>{" "}
          mustik-portfolio.netlify.app
        </a>
        <br />
        {/* <a
          href="https://github.com/mustapha-jaiteh"
          className="inline-block relative text-xs font-bold tracking-wider mb-4"
        >
          <span className="text-gray-400">My github: </span>
          github.com/mustapha-jaiteh
        </a> */}
      </div>
      <div className="-bottom-1 h-px left-0 right-0 bg-gray-200 mt-8"></div>
      <div className="relative z-10 flex gap-x-4 items-center justify-center h-9 p-1 rounded-md mt-4 mb-10 ">
        <a
          href="https://github.com/mustapha-jaiteh"
          className="text-gray-400 text-3xl hover:text-gray-600"
        >
          <FaGithub className="w-6 h-6 lg:w-8 lg:h-8 " />
        </a>
        <a
          href="https://www.linkedin.com/in/mustapha-jaiteh-a61513278/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 text-3xl hover:text-blue-900"
        >
          <FaLinkedin className="w-6 h-6 lg:w-8 lg:h-8" />
        </a>

        <a
          href="https://wa.me/2203609991?text=Hi%20Mustik,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 text-3x hover:text-green-800 "
        >
          <FaWhatsapp className="w-6 h-6 lg:w-8 lg:h-8 " />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
