import React from "react";
import "./firstpage.css";

const PinterestLayout = () => {
  return (
    <div className="bg-[#FFE2EB] h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white w-full z-10 fixed">
        <div className="w-full flex items-center justify-between h-20">
          {/* Left Section: Logo and Links */}
          <div className="flex items-center space-x-7 ml-4">
            <div className="flex items-center">
              <a href="./index.html">
                <img
                  src="https://ik.imagekit.io/9muwkffn9/Pinterest/pinterest%20icon.jpeg"
                  alt="Pinterest Logo"
                  className="w-12 h-12"
                />
              </a>
              <a href="./index.html">
                <span className="pinterest-text">Pinterest</span>
              </a>
            </div>

            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">
              Today
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">
              Watch
            </a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">
              Explore
            </a>
          </div>

          {/* Right Section: About, Business, Blog, Login, and Sign Up */}
          <div className="flex items-center space-x-7 mr-4">
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 font-medium hidden sm:inline"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 font-medium hidden sm:inline"
            >
              Business
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 font-medium hidden sm:inline"
            >
              Blog
            </a>
            <div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700">
                Log in
              </button>
              <button className="border border-red-600 text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-100">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="bg-[#DAFFF6] flex flex-1 w-full">
        {/* Left Section */}
        <div className="left-section flex flex-col items-center">
          <h1 className="headline1">Save ideas you like</h1>
          <p className="paragraph1 px-36 text-center">
            Collect your favourites so you can get back to them later.
          </p>
          <button className="mt-6 bg-red-600 text-white px-4 py-3 rounded-full font-semibold hover:bg-red-700">
            Explore
          </button>
        </div>

        {/* Right Section */}
        <div className="right-section flex">
          <div className="flex flex-col space-y-8">
            <div className="image-container image-1">
              <div className="absolute text-left p-5 font-sans font-[500] text-[56px] top-20 text-white">
                Fern Future Home Vibes
              </div>
            </div>
            <div className="image-container image-3">
              <div className="absolute text-left p-5 font-sans font-[500] text-[28px] top-10 text-white">
                Serve My Drinks in Style
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="image-container image-2">
              <div className="absolute text-left p-5 font-sans font-[500] text-[28px] top-10 text-white">
                My Scandinavian Bedroom
              </div>
            </div>
            <div className="image-container image-4">
              <div className="absolute text-left p-5 font-sans font-[500] text-[20px] top-10 text-white">
                The Deck of My Dreams
              </div>
            </div>
            <div className="image-container image-5">
              <div className="absolute text-left p-5 font-sans font-[500] text-[28px] top-10 text-white">
                Our Bathroom Upgrade
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-1">
        {/* Left Image Section */}
        <div className="w-1/2 h-full">
          <img
            src="https://ik.imagekit.io/9muwkffn9/Pinterest/shop-de8ddf10.png"
            alt="Makeup Inspiration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-1/2 h-full flex flex-col justify-center items-center text-center px-24">
          <h1 className="headline leading-tight">See it, make it, try it, do it</h1>
          <p className="mt-4 paragraph text-center px-10">
            The best part of Pinterest is discovering new things and ideas from
            people around the world.
          </p>
          <button className="mt-6 bg-red-600 text-white px-4 py-3 rounded-full font-semibold hover:bg-red-700">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default PinterestLayout;
