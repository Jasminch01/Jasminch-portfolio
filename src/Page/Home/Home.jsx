import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  return (
    <div className="font-myFont  text-white">
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
