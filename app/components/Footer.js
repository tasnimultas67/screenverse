import React from "react";

const Footer = () => {
  return (
    <div className="p-1">
      <footer className="bg-gray-800 rounded-md">
        <div className="">
          <div className="flex flex-col items-center justify-center py-6">
            <h1 className="text-2xl font-semibold text-white">ScreenVerse</h1>
            <p className="text-sm text-white">
              The ultimate destination for movie enthusiasts.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 w-6/12 mx-auto">
              <div>
                <h2 className="text-white text-sm">Call Us</h2>
                <p>1-800-123-4567</p>
              </div>
              <div>
                <h2 className="text-white text-sm">Follow Us</h2>
              </div>
              <div>
                <h2 className="text-white text-sm">Download App</h2>
                <div className="flex space-x-4">
                  <a href="#" className="text-white">
                    <i className="fab fa-apple"></i>
                  </a>
                  <a href="#" className="text-white">
                    <i className="fab fa-android"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-6 py-4">
            <p className="text-center text-white text-sm">
              © 2021 ScreenVerse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
