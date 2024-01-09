import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <div data-aos="flip-down" data-aos-delay="500" className="space-x-5">
      <NavLink to={`/`} className={`md:text-xl  font-semibold uppercase  hover:text-yellow-300`}>Home</NavLink>
      <NavLink to={`/blogs`} className={`md:text-xl  font-semibold uppercase  hover:text-yellow-300`}>Blogs</NavLink>
      <NavLink to={`/contact`} className={`md:text-xl  font-semibold uppercase hover:text-yellow-300` }>Contact</NavLink>
    </div>
  );
  return <div className="flex items-center justify-center space-x-5 py-5 bg-bg-secendary" >{navLinks}</div>;
};

export default Navbar;