import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <div data-aos="flip-down" data-aos-delay="500" className="space-x-5 text-white">
      <NavLink to={`/`} className={`md:text-xl font-semibold uppercase  hover:text-my-text text-xs`}>Home</NavLink>
      <NavLink to={`/blogs`} className={`md:text-xl font-semibold uppercase  hover:text-my-text text-xs`}>Blogs</NavLink>
      <Link to={`mailto:jasminchakma895@gmail.com`} className={`md:text-xl font-semibold uppercase hover:text-my-text text-xs` }>Contact</Link>
    </div>
  );
  return <div className="flex items-center justify-center space-x-5 py-5 bg-bg-secendary" >{navLinks}</div>;
};

export default Navbar;
