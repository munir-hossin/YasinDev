

export default function Portfolio () {
   
  
    return (
      <section className=" sm:py-12">
        <h2 className="text-center text-3xl font-semibold mb-8">
          My Recent Works
        </h2>
     <div className="">

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 px-4">
  {/* <!-- First section with smaller width --> */}
  <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow lg:col-span-4">
    <div className="w-full ">
      <img 
        src="https://i.ibb.co.com/7KSPGqb/11.png"
        alt="img" 
        className="w-full h-full object-cover "
      />
    </div>
    <h3 className="text-lg font-medium text-center">
      this is work title
    </h3>
  </div>

  {/* <!-- Second section with larger width --> */}
  <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow lg:col-span-8">
    <div className="w-full h-0 aspect-[4/3]">
      <img 
        src="https://i.ibb.co.com/7KSPGqb/11.png" 
        alt="img" 
        className="w-full h-full object-cover mb-4"
      />
    </div>
    <h3 className="text-lg font-medium text-center">
      this is work title
    </h3>
  </div>
</div>




     {/* underside */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-8">
        <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow">
              <img src="https://i.ibb.co.com/7KSPGqb/11.png" alt="img" className="w-full mb-4" />
              <h3 className="text-lg font-medium text-center">
                this is work title
              </h3>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow">
              <img src="https://i.ibb.co.com/7KSPGqb/11.png" alt="img" className="w-full mb-4" />
              <h3 className="text-lg font-medium text-center">
                this is work title
              </h3>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow">
              <img src="https://i.ibb.co.com/7KSPGqb/11.png" alt="img" className="w-full mb-4" />
              <h3 className="text-lg font-medium text-center">
                this is work title
              </h3>
            </div>
        </div>
     </div>

      </section>
    );
  };
  






















// export default function Portfolio () {
//     const works = [
//       { title: "E-commerce website design", image: "https://i.ibb.co.com/7KSPGqb/11.png" },
//       { title: "E-commerce website design", image: "https://i.ibb.co.com/7KSPGqb/11.png" },
//       { title: "E-commerce website design", image: "https://i.ibb.co.com/7KSPGqb/11.png" },
//       { title: "E-commerce website design", image: "https://i.ibb.co.com/7KSPGqb/11.png" },
//       { title: "E-commerce website design", image: "https://i.ibb.co.com/7KSPGqb/11.png" },
//       { title: "E-commerce website design", image: "https://i.ibb.co.com/7KSPGqb/11.png" },
//     ];
  
//     return (
//       <section className="py-12">
//         <h2 className="text-center text-3xl font-semibold mb-8">
//           My Recent Works
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
//           {works.map((work, index) => (
//             <div
//               key={index}
//               className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow"
//             >
//               <img src={work.image} alt={work.title} className="w-full mb-4" />
//               <h3 className="text-lg font-medium text-center">{work.title}</h3>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };
  
