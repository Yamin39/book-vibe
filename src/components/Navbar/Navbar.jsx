import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyleClasses = "text-lg text-dark-80 py-[0.875rem] px-[1.063rem] mr-4 hover:text-primary-green";
  const link = (
    <>
      <NavLink to="/" className={navLinkStyleClasses}>
        Home
      </NavLink>
      <NavLink to="/listed-books" className={navLinkStyleClasses}>
        Listed Books
      </NavLink>
      <NavLink to="/pages-to-read" className={navLinkStyleClasses}>
        Pages to Read
      </NavLink>
    </>
  );

  return (
    <nav className="navbar p-0 pb-12 justify-between">
      <div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn min-h-0 px-2 py-1 mr-1 btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {link}
          </ul>
        </div>
        <Link to="/" className="font-work-sans text-2xl md:text-[1.75rem] font-bold text-dark">
          Book Vibe
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="space-x-2 md:space-x-4">
        <button className="btn hover:opacity-80 md:text-lg font-semibold py-3 min-h-0 text-white md:px-7 md:py-[1.125rem] h-auto hover:bg-primary-green bg-primary-green">
          Sign In
        </button>
        <button className="btn hover:opacity-80 hover:bg-[#59C6D2] py-3 min-h-0 md:text-lg font-semibold text-white md:px-7 md:py-[1.125rem] h-auto bg-[#59C6D2]">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
