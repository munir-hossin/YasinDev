import AboutMe from "./layout/pages/AboutMe"
import Banner from "./layout/pages/Banner"
import Blogs from "./layout/pages/Blogs"
import ContactMe from "./layout/pages/ContactMe"
import Footer from "./layout/pages/Footer"
import Navbar from "./layout/pages/Navbar"
import Portfolio from "./layout/pages/Portfolio"
import Services from "./layout/pages/Services"
import Skills from "./layout/pages/Skills"
import Statistics from "./layout/pages/Statistics"


function App() {


  return (
    <div>
          <div className="container">
               <div>
                  <Navbar />
                  <Banner />
                  <AboutMe />
                  <Statistics />
                  <Services />
                  <Skills />
                  <Portfolio />
                  <Blogs />
                  <ContactMe />
                  <Footer />                                      
               </div>
          </div>
    </div>
  )
}

export default App
