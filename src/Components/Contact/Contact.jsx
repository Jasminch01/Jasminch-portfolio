import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <div className="text-white  max-w-7xl mx-auto">
      <p
        className="text-5xl font-bold mb-5 text-yellow-300"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
      >
        Let's Get in Touch
      </p>
      <div>
        <button
          className="flex items-center hover:font-bold hover:text-3xl transition-all hover:text-yellow-300"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-offset="300"
        >
          <Link to={``} className="text-2xl ">
            Github{" "}
          </Link>{" "}
          <MdArrowOutward />
        </button>
        <button
          className="flex items-center hover:font-bold hover:text-3xl transition-all hover:text-yellow-300"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        >
          <Link to={``} className="text-2xl">
            Linkdin{" "}
          </Link>{" "}
          <MdArrowOutward />
        </button>
        <button
          className="flex items-center hover:font-bold hover:text-3xl transition-all hover:text-yellow-300"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-easing="ease-in-sine"
        >
          <Link to={``} className="text-2xl ">
            Facebook{" "}
          </Link>{" "}
          <MdArrowOutward />
        </button>
        <button
          className="flex items-center hover:font-bold hover:text-3xl transition-all hover:text-yellow-300"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <Link to={`jasminchakma895@gmail.com`} className="text-2xl ">
            Gmail{" "}
          </Link>{" "}
          <MdArrowOutward />
        </button>
      </div>
    </div>
  );
};

export default Contact;
