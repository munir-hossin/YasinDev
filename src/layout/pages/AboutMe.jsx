import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function AboutMe () {
    return (
      <section className="py-16 bg-gray-50 text-center px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">

        <div className="relative flex justify-center">
          {/* <!-- Image on top --> */}
          <img
            src="https://i.ibb.co/vLm1Qzg/banner-avatar.png"
            alt="Banner img"
            className="relative z-30"
          />
          {/* <!-- Background section --> */}
            <div className="relative">
          
            <div className="absolute border-[2px] border-red-500 w-72 bottom-[-10px] right-[-15px]  lg:w-80 h-[335px] rounded-xl md:bottom-[-12px] md:right-[-22px] z-10"></div>
            </div>
            <div className="absolute rounded-xl bg-orange-300 w-[100%] lg:w-80 h-[335px] z-20 bottom-0"></div>

</div>





          </div>
          <div className="md:w-1/2 text-left px-8">
            <h3 className="text-orange-500 uppercase text-sm font-bold mt-8">
              A Bit About Me
            </h3>
            <h2 className="text-4xl font-semibold my-4">
              Passionate About Code, Driven by Creativity
            </h2>
            <p className="text-gray-600 mb-6">
              Driven by a love for solving problems and creating seamless digital
              experiences, I develop user-centered websites and applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <FaLinkedinIn size={24} />
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-700">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };