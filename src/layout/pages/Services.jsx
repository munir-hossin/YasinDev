import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Services () {
    const services = [
      { title: 'UI/UX Design', icon: <FaLinkedinIn size={40} /> },
      { title: 'Mobile App Development', icon: <FaGithub size={40} /> },
      { title: 'Website Development', icon: <FaTwitter size={40} /> },
      { title: 'WordPress Website', icon: <FaFacebook size={40} /> },
      { title: 'SEO Optimization', icon: <FaLinkedinIn size={40} /> },
      { title: 'UI/UX Design', icon: <FaGithub size={40} /> },
      { title: 'UI/UX Design', icon: <FaGithub size={40} /> },
      { title: 'UI/UX Design', icon: <FaGithub size={40} /> },
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center px-12 md:px-20">
          <h3 className="text-orange-500 uppercase text-sm font-bold">
            My Services
          </h3>
          <h2 className="text-4xl font-semibold my-4">
            Services I Provide for My Clients
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 border border-orange-300 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="w-16 h-16 mx-auto mb-4 text-orange-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="text-gray-600 mt-2">         
                  Lorem ipsum dolor  reprehenderit consequatur fugit.  nulla accusantium mollitia ducimus deleniti!
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };