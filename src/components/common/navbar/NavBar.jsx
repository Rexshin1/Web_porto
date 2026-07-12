import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-scroll";
import { portfolioData } from "../../../data/portfolioData";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Services", url: "services" },
  { id: 4, name: "Portfolio", url: "portfolio" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const menu = navItems.map((item) => (
  <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
    <Link
      onClick={handleMenuClick}
      to={item.url.toLowerCase()}
      smooth={true}
      duration={1000}
      spy={true}
      offset={-140}
      activeStyle={{
        backgroundColor: "#2563eb",
        color: "white",
      }}
      className={`hover:text-picto-primary px-5 py-3 mx-1`}
    >
      {item.name}
    </Link>
  </li>
));

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const { personal } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-soft-white border-b border-gray-300"
          : "bg-white border-white"
      } z-50 transition-all duration-1000`}
    >
      <div className="navbar flex justify-between mx-auto content">
        <div className="flex items-center justify-between">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap bg-white text-black`}
            >
              {menu}
            </ul>
          </div>

          <Link
            href="#introduction"
            to={`introduction`}
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-3 cursor-pointer group py-1"
          >
            {/* Tech Monogram Badge */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-950 flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-lg shadow-blue-500/25 border border-blue-400/30 group-hover:scale-105 transition-all duration-300 shrink-0">
              {/* Glowing Pulse behind Badge */}
              <span className="absolute inset-0 rounded-2xl bg-picto-primary blur-md opacity-30 group-hover:opacity-60 transition-opacity"></span>
              <span className="relative tracking-tighter">MKN</span>
              {/* Cyber Dot */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white"></span>
            </div>

            {/* Typography & Role Tag */}
            <div className="flex flex-col ms-3 justify-center">
              <div className="flex items-center gap-1.5 leading-tight">
                <span className="text-lg sm:text-2xl font-black tracking-tight text-gray-900 group-hover:text-blue-700 transition-colors">
                  KHOIRUN
                </span>
                <span className="text-lg sm:text-2xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-picto-primary to-indigo-600 bg-clip-text text-transparent">
                  NAFIS
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold tracking-wider text-gray-600 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                IoT &amp; Fullstack Dev
              </div>
            </div>
          </Link>
        </div>

        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {menu}
          </ul>
          <p className="">
            <Link
              className="btn btn-sm xs:btn-md sm:btn-lg btn-primary"
              href="#contact"
              to={`contact`}
              smooth={true}
              duration={900}
            >
              Contact
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
