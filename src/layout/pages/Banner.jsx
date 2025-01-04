export default function Banner() {
    return (
     <div>
       <div className="grid grid-cols-1 lg:grid-cols-2 bg-slate-800 px-6 sm:px-10 lg:px-20 pt-16 lg:pt-36 items-center">
        {/* Left Section */}
        <div className="text-white space-y-5 text-center lg:text-left">
          <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl">
            Turning ideas into <br />
            interactive realities <br />
            through <span className="text-orange-500">Web design</span>
          </h1>
          <p className="lg:pb-6">
            I am Yaisin, a Web Developer. Lorem ipsum dolor sit amet consectetur.
            <br /> Lorem ipsum dolor sit.
          </p>
  
          <ul className="flex justify-center lg:justify-start">
            <li className="bg-orange-500 text-white hover:bg-orange-600 transition mr-4 py-2 px-4 rounded-3xl">
              <button>Get Resume</button>
            </li>
            <li className="bg-orange-500 text-white hover:bg-orange-600 transition py-2 px-4 rounded-3xl">
              <button>Watch Video</button>
            </li>
          </ul>
        </div>
  
        {/* Right Section */}
        <div className="flex justify-center relative z-30 mt-14 lg:mt-0">
          <div className="absolute bg-slate-400 w-64 sm:w-80 lg:w-96 h-[270px] sm:h-[300px] lg:h-[335px] z-10 bottom-0 rounded-t-lg overflow-hidden">
            <div className="relative">
              <div className="absolute w-full h-8 bg-gray-500 top-0 left-0">
                <ul className="flex">
                  <li className="w-3 h-3 bg-white ml-2 mt-3 rounded-full"></li>
                  <li className="w-3 h-3 bg-white ml-2 mt-3 rounded-full"></li>
                  <li className="w-3 h-3 bg-white ml-2 mt-3 rounded-full"></li>
                </ul>
              </div>
            </div>
          </div>
  
          <img
            src="https://i.ibb.co/vLm1Qzg/banner-avatar.png"
            alt="Banner img"
            className="z-20 w-40 sm:w-52 lg:w-auto"
          />
        </div>
      </div>
      {/* <div className="relative">
          <div className="w-20 h-20 bg-orange-500 rounded-full hover:bg-orange-600 absolute top-0 left-0">Yaisin</div>
      </div> */}
     </div>
    );
  }
  





