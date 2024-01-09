import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="pb-20 max-w-7xl mx-auto">
      <p
        className="text-center font-bold text-5xl uppercase mb-5"
        data-aos="fade-up"
      >
        Projects
      </p>
      <div className="space-y-10">
        <div
          className=" border border-white rounded-lg hover:bg-yellow-300 hover:text-black transition-all  w-full py-5"
          data-aos="zoom-in-right"
          data-aos-delay="300"
        >
          <div className="text-center">
            <p className="mb-3 text-4xl font-bold">OzshineCleaners</p>
            <p className="text-2xl">
              A Fontend Website of a Australian cleaning service provider
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
                <Link to={`/`} className="text-xl uppercase">
                  live Link
                </Link>{" "}
                <MdArrowOutward />{" "}
              </p>
              <p className="flex items-center">
                <Link
                  to={`https://github.com/Jasminch01/oZshinecleaners`}
                  className="text-xl uppercase"
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
