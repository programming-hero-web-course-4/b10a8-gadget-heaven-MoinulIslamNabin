import Banner from "../Banner/Banner";
import "./Navbar.css";
import { NavLink, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isStat = location.pathname === "/Statistics";
  const isDash = location.pathname === "/Dashboard";
  const isTerms = location.pathname === "/Terms";

  if (isHome) {
    document.title = "Gadget Heaven"
    return (
      <div className="container w-11/12 lg:w-auto mx-auto bg-[#9538E2] mt-8 outline outline-offset-4 outline-1 outline-[#9538E2]/50 rounded-2xl lg:px-12 px-0">
        <div className="navbar mb-4 md:pt-4">
          <div className="navbar-start">
            <div className="drawer w-auto">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  className="btn btn-ghost lg:hidden drawer-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-30">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <nav className="menu bg-[#9538E2] text-base-content min-h-full w-80 p-4">
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/Statistics"}
                  >
                    Statistics
                  </NavLink>
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/Dashboard"}
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/Terms"}
                  >
                    Terms & Conditions
                  </NavLink>
                </nav>
              </div>
            </div>
            <a className="cursor-pointer text-xl text-white font-bold">
              Gadget Heaven
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <nav className="menu menu-horizontal px-1 gap-4">
              <NavLink className={"text-base text-white/60 font-bold p-2 nav-hover"} to={"/"}>
                Home
              </NavLink>
              <NavLink
                className={"text-base text-white/60 font-bold p-2 nav-hover"}
                to={"/Statistics"}
              >
                Statistics
              </NavLink>
              <NavLink
                className={"text-base text-white/60 font-bold p-2 nav-hover"}
                to={"/Dashboard"}
              >
                Dashboard
              </NavLink>
              <NavLink
                className={"text-base text-white/60 font-bold p-2 nav-hover"}
                to={"/Terms"}
              >
                Terms & Conditions
              </NavLink>
            </nav>
          </div>
          <div className="navbar-end gap-4">
            <Link to={"/DashBoard"}>  
            <button className="btn btn-ghost bg-white btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            </Link>
            <Link to={"/DashBoard"}>  
            <button className="btn btn-ghost bg-white btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                
              </div>
            </button>
            </Link>
            
          </div>
        </div>
        <Banner></Banner>
      </div>
        
    );
  } else if (isStat) {
    document.title = "Statistics";
    return (
      <div className="container mx-auto mt-8 lg:px-12 px-0">
        <div className="navbar mb-4 pt-4">
          <div className="navbar-start">
            <div className="drawer w-auto">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  className="btn btn-ghost lg:hidden drawer-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-30">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <nav className="menu bg-[#9538E2] text-base-content min-h-full w-80 p-4">
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/Statistics"}
                  >
                    Statistics
                  </NavLink>
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/Dashboard"}
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/Terms"}
                  >
                    Terms & Conditions
                  </NavLink>
                </nav>
              </div>
            </div>
            <a className="cursor-pointer text-xl text-black font-bold">
              Gadget Heaven
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <nav className="menu menu-horizontal px-1 gap-4">
              <NavLink className={"text-base text-black/60 font-bold p-2 nav-hover"} to={"/"}>
                Home
              </NavLink>
              <NavLink
                className={"text-base text-black/60 font-bold p-2 nav-hover"}
                to={"/Statistics"}
              >
                Statistics
              </NavLink>
              <NavLink
                className={"text-base text-black/60 font-bold p-2 nav-hover"}
                to={"/Dashboard"}
              >
                Dashboard
              </NavLink>
              <NavLink
                className={"text-base text-black/60 font-bold p-2 nav-hover"}
                to={"/Terms"}
              >
                Terms & Conditions
              </NavLink>
            </nav>
          </div>
          <div className="navbar-end gap-4">
          <Link to={"/DashBoard"}>  
            <button className="btn btn-ghost border border-black/10 bg-white btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            </Link>
            <Link to={"/DashBoard"}>  
            <button className="btn btn-ghost border-black/10 bg-white btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                
              </div>
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (isDash) {
    document.title = "Dashboard";
    return (
      <div className="container mx-auto mt-8 lg:px-12 px-0">
        <div className="navbar mb-4 pt-4">
          <div className="navbar-start">
            <div className="drawer w-auto">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  className="btn btn-ghost lg:hidden drawer-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-30">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <nav className="menu bg-[#9538E2] text-base-content min-h-full w-80 p-4">
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/Statistics"}
                  >
                    Statistics
                  </NavLink>
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/Dashboard"}
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/Terms"}
                  >
                    Terms & Conditions
                  </NavLink>
                </nav>
              </div>
            </div>
            <a className="cursor-pointer text-xl text-black font-bold">
              Gadget Heaven
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <nav className="menu menu-horizontal px-1 gap-4">
              <NavLink className={"text-base text-black/60 font-bold p-2 nav-hover"} to={"/"}>
                Home
              </NavLink>
              <NavLink
                className={"text-base text-black/60 font-bold p-2 nav-hover"}
                to={"/Statistics"}
              >
                Statistics
              </NavLink>
              <NavLink
                className={"text-base text-black/60 font-bold p-2 nav-hover"}
                to={"/Dashboard"}
              >
                Dashboard
              </NavLink>
              <NavLink
                className={"text-base text-black/60 font-bold p-2 nav-hover"}
                to={"/Terms"}
              >
                Terms & Conditions
              </NavLink>
            </nav>
          </div>
          <div className="navbar-end gap-4">
          <Link to={"/DashBoard"}>  
            <button className="btn btn-ghost border border-black/10 bg-white btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            </Link>
            <Link to={"/DashBoard"}>  
            <button className="btn btn-ghost border-black/10 bg-white btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                
              </div>
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (isTerms) {
    document.title = "Terms & Conditions";
    return (
      <div className="container mx-auto mt-8 lg:px-12 px-0">
        <div className="navbar mb-4 pt-4">
          <div className="navbar-start">
            <div className="drawer w-auto">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  className="btn btn-ghost lg:hidden drawer-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-30">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <nav className="menu bg-[#9538E2] text-base-content min-h-full w-80 p-4">
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/Statistics"}
                  >
                    Statistics
                  </NavLink>
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/Dashboard"}
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/Terms"}
                  >
                    Terms & Conditions
                  </NavLink>
                </nav>
              </div>
            </div>
            <a className="cursor-pointer text-xl text-black font-bold">
              Gadget Heaven
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <nav className="menu menu-horizontal px-1 gap-4">
              <NavLink className={"text-base text-black/60 font-bold p-2 nav-hover"} to={"/"}>
                Home
              </NavLink>
              <NavLink
                className={"text-base text-black/60 font-bold p-2 nav-hover"}
                to={"/Statistics"}
              >
                Statistics
              </NavLink>
              <NavLink
                className={"text-base text-black/60 font-bold p-2 nav-hover"}
                to={"/Dashboard"}
              >
                Dashboard
              </NavLink>
              <NavLink
                className={"text-base text-black/60 font-bold p-2 nav-hover"}
                to={"/Terms"}
              >
                Terms & Conditions
              </NavLink>
            </nav>
          </div>
          <div className="navbar-end gap-4">
          <Link to={"/DashBoard"}>  
            <button className="btn btn-ghost border border-black/10 bg-white btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            </Link>
            <Link to={"/DashBoard"}>  
            <button className="btn btn-ghost border-black/10 bg-white btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                
              </div>
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }  else {
    
    return (
      <div className="container mx-auto mt-8 lg:px-12 px-0">
        <div className="navbar mb-4 pt-4">
          <div className="navbar-start">
            <div className="drawer w-auto">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  className="btn btn-ghost lg:hidden drawer-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-30">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <nav className="menu bg-[#9538E2] text-base-content min-h-full w-80 p-4">
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/Statistics"}
                  >
                    Statistics
                  </NavLink>
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/Dashboard"}
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    className={"text-base text-white/60 font-bold p-2 nav-hover"}
                    to={"/Terms"}
                  >
                    Terms & Conditions
                  </NavLink>
                </nav>
              </div>
            </div>
            <a className="cursor-pointer text-xl text-black font-bold">
              Gadget Heaven
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <nav className="menu menu-horizontal px-1 gap-4">
              <NavLink className={"text-base text-[#9538E2] font-bold p-2 nav-hover"} to={"/"}>
                Home
              </NavLink>
              <NavLink
                className={"text-base text-black/60 font-bold p-2 nav-hover"}
                to={"/Statistics"}
              >
                Statistics
              </NavLink>
              <NavLink
                className={"text-base text-black/60 font-bold p-2 nav-hover"}
                to={"/Dashboard"}
              >
                Dashboard
              </NavLink>
              <NavLink
                className={"text-base text-black/60 font-bold p-2 nav-hover"}
                to={"/Terms"}
              >
                Terms & Conditions
              </NavLink>
            </nav>
          </div>
          <div className="navbar-end gap-4">
          <Link to={"/DashBoard"}>  
            <button className="btn btn-ghost border border-black/10 bg-white btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            </Link>
            <Link to={"/DashBoard"}>  
            <button className="btn btn-ghost border-black/10 bg-white btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                
              </div>
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;
