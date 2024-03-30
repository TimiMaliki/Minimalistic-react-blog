import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-black text-white">
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mt-10 p-10">
        <div className="brand">
          <h1 className="text-3xl lg:text-5xl font-bold text-white">Maliki</h1>
        </div>

        <div className="homes">
          <p className="mb-4 font-sans text-xl lg:text-2xl">Home</p>
          <ul>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Works</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Conact</a>
          </li>
          </ul>
        </div>

        <div className="Blogs">
          <p className="mb-4 font-sans text-xl lg:text-2xl">Blog</p>
          <ul>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Design</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Business</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Branding</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Culture</a>
          </li>
          </ul>
        </div>

        <div className="Service">
          <p className="mb-4 font-sans text-xl lg:text-2xl">Service</p>
          <ul>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Webflow</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">UI/UX Design</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Brand identity</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">E-commerce</a>
          </li>
          </ul>
        </div>

        <div className="Information">
          <p className="mb-4 font-sans text-xl lg:text-2xl">Information</p>
          <ul>
          <li>
            <a href="" className="text-white hover:text-yellow-700">How we work</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">FAQ</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">About us</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Privacy Policy</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Cookie Policy</a>
          </li>
          </ul>
        </div>

        <div className="update">
          <p className="mb-4 font-sans text-xl lg:text-2xl">Updates</p>
          <ul>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Instagram</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Behance</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">YouTube</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">LinkedIn</a>
          </li>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Tik Tok</a>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
