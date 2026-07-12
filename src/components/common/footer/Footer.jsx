import logo from "../../../assets/logo.png";
import { portfolioData } from "../../../data/portfolioData";

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "Home" },
  { id: 2, name: "About", url: "About" },
  { id: 4, name: "Portfolio", url: "Portfolio" },
  { id: 6, name: "Services", url: "Services" },
  { id: 7, name: "Contact", url: "Contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  const { personal } = portfolioData;

  return (
    <div className="pt-20 md:pt-28 pb-12 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <a href="#introduction" className="flex items-center border-0 cursor-pointer group py-2">
          {/* Tech Monogram Badge */}
          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-950 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/30 border border-blue-400/30 group-hover:scale-105 transition-all duration-300 shrink-0">
            <span className="tracking-tighter">MKN</span>
            <span
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-gray-950 animate-pulse"
              title="Online & Ready to Deploy"
            ></span>
          </div>

          <div className="flex flex-col ms-3 justify-center">
            <div className="flex items-center gap-1.5 leading-tight">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-blue-300 transition-colors">
                KHOIRUN
              </span>
              <span className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                NAFIS
              </span>
            </div>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-blue-300/80 font-mono flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              IoT &amp; Fullstack Dev
            </span>
          </div>
        </a>
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px] text-gray-300 hover:text-white transition-colors"
              href={`#${item.url.toLowerCase()}`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
        <p className="text-[12px] sm:text-[16px] text-gray-400">
          Copyright &copy; {copyrightYear} {personal.name}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
