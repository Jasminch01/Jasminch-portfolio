import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <div className="text-white  max-w-7xl mx-auto px-5">
      <p
        className="md:text-5xl text-2xl font-bold mb-5 text-my-text"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
      >
        Let's Get in Touch
      </p>
      <div>
        <button
          className="flex items-center hover:font-bold hover:text-3xl transition-all hover:text-my-text"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-offset="300"
        >
          <Link to={``} className="md:text-2xl text-lg ">
            Github{" "}
          </Link>{" "}
          <MdArrowOutward />
        </button>
        <button
          className="flex items-center hover:font-bold hover:text-3xl transition-all hover:text-my-text"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        >
          <Link to={``} className="md:text-2xl text-lg">
            Linkdin{" "}
          </Link>{" "}
          <MdArrowOutward />
        </button>
        <button
          className="flex items-center hover:font-bold hover:text-3xl transition-all hover:text-my-text"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-easing="ease-in-sine"
        >
          <Link to={``} className="md:text-2xl text-lg ">
            Facebook{" "}
          </Link>{" "}
          <MdArrowOutward />
        </button>
        <button
          className="flex items-center hover:font-bold hover:text-3xl transition-all hover:text-my-text"
          data-aos="fade-right"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <Link to={`jasminchakma895@gmail.com`} className="md:text-2xl text-lg ">
            Gmail{" "}
          </Link>{" "}
          <MdArrowOutward />
        </button>
      </div>
    </div>
  );
};

export default Contact;
