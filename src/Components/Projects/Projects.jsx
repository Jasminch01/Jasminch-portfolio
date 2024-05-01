import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="pb-20 max-w-7xl mx-auto">
      <p
        className="text-center font-bold md:text-5xl uppercase mb-10 text-2xl text-my-text"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Projects
      </p>
      <div className=" gap-10 px-5 grid md:grid-cols-2 grid-cols-1">
        <div
          className="overflow-hidden border  border-white hover:bg-lime-300 card rounded-xl hover:text-black transition-all w-full py-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* <span className=""></span>
          <span className=""></span>
          <span className=""></span>
          <span className=""></span> */}
          <div className="text-center">
            <p className="mb-3 md:text-4xl text-2xl font-bold">OzshineCleaners</p>
            <p className="md:text-2xl text-xl">
              A Fullstack Website of an Australian cleaning service provider
              company
            </p>
            <div className="flex items-center justify-center my-10">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4326/4326454.png"
                alt=""
                className=""
              />
            </div>
            <div className="flex items-center justify-center space-x-5">
              <p className="flex items-center">
                <Link to={`https://www.ozshinecleaners.com.au`} className="md:text-xl text-sm uppercase">
                  live Link
                </Link>
                <MdArrowOutward />
              </p>
              <p className="flex items-center">
                <Link
                  to={`https://github.com/Jasminch01/oZshinecleaners`}
                  className="md:text-xl text-sm uppercase"
                >
                  Github
                </Link>{" "}
                <MdArrowOutward />
              </p>
            </div>
          </div>
        </div>
        {/* project two */}
        <div
          className="overflow-hidden border  border-white hover:bg-lime-300 card rounded-xl hover:text-black transition-all w-full py-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="text-center">
            <p className="mb-3 md:text-4xl text-2xl font-bold">QuickDrop</p>
            <p className="md:text-2xl text-xl">
              A Fullstack  parcel management web application.
            </p>
            <div className="flex items-center justify-center my-10">
              <img
                src="https://cdn-icons-png.flaticon.com/128/10112/10112526.png"
                alt=""
                className=""
              />
            </div>
            <div className="flex items-center justify-center space-x-5">
              <p className="flex items-center">
                <Link to={``} className="md:text-xl text-sm uppercase">
                  live Link
                </Link>
                <MdArrowOutward />
              </p>
              <p className="flex items-center">
                <Link
                  to={`https://github.com/Jasminch01/QuickDrop-client`}
                  className="md:text-xl text-sm uppercase"
                >
                  Github
                </Link>{" "}
                <MdArrowOutward />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
