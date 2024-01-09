import Banner from "../../Components/Banner/Banner";
import Coursor from "../../Components/Coursor/Coursor";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <div className="font-myFont  text-white">
      <Coursor colour={`255, 255, 255`}/>
      <Navbar />
      <Banner />
      <Skills />
      <div className="bg-bg-primary ">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
