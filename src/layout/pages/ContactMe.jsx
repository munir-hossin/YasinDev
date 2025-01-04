
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div className="bg-slate-800 text-white py-16 px-20 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
        <ul className="flex items-center">
        <li className="bg-orange-500 w-3 h-3 rounded-full mr-3"></li>
        <li className="text-orange-500 uppercase text-sm font-bold">
         Contact Me
        </li>
       </ul>
          <h2 className="text-3xl font-semibold">Have a project?<br />Let's discuss now!</h2>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-orange-500 w-6 h-6" />
            <span>+880 1234 5687</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-orange-500 w-6 h-6" />
            <span>yourmail@gmail.com</span>
          </div>
        </div>

        <form className="bg-gray-900 p-8 rounded-lg space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input 
              type="text" 
              placeholder="Phone" 
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea 
            placeholder="Write your project details" 
            rows="5" 
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-all"
          >
            Send Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
































// export default function ContactMe () {
//     return (
//       <section className="py-12 bg-gray-800 text-white">
//         <div className="max-w-4xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Contact Info */}
//             <div>
//           <h2 className="text-3xl font-semibold mb-8">
//             Have a project? <br /> Let’s discuss now!
//           </h2>
//               <p className="mb-4">
//                 <strong>Email:</strong> yourmail@gmail.com
//               </p>
//               <p className="mb-4">
//                 <strong>Phone:</strong> +880 1234 5687
//               </p>
//               <p className="mb-4">
//                 <strong>Address:</strong> 123, Your Street, Your City
//               </p>
//             </div>
  
//             {/* Contact Form */}
//             <form className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full p-2 border rounded"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Phone"
//                   className="w-full p-2 border rounded"
//                 />
//               </div>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full p-2 border rounded"
//               />
//               <textarea
//                 placeholder="Write your project details"
//                 rows="4"
//                 className="w-full p-2 border rounded"
//               ></textarea>
//               <button
//                 type="submit"
//                 className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
//               >
//                 Send Now
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     );
//   };
  