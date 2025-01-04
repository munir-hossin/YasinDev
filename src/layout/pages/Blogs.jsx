export default function Blogs () {
    const blogPosts = [
      {
        category: "Developer Story",
        title: "From Code to Creation: My Development Journey",
        readTime: "2 Min Read",
        image: "blog1.jpg",
      },
      {
        category: "Web Development",
        title: "Insights & Innovations in Web Development",
        readTime: "3 Min Read",
        image: "blog2.jpg",
      },
      {
        category: "Developer Story",
        title: "Coding Chronicles: Tips, Tricks, and Tutorials",
        readTime: "2 Min Read",
        image: "blog3.jpg",
      },
    ];
  
    return (
      <section className="py-12 bg-gray-50">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Web Development Tips & Tricks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow"
            >
              <img src="https://i.ibb.co.com/7KSPGqb/11.png" alt={post.title} className="w-full mb-4" />
              <h4 className="text-sm text-gray-500 mb-1">{post.category}</h4>
              <h3 className="text-lg font-medium mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.readTime}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  