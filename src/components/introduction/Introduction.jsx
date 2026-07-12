import person from "../../assets/images/nafis-photo.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { portfolioData } from "../../data/portfolioData";

const Introduction = () => {
  const { personal, informationSummary } = portfolioData;

  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between items-center pt-10 lg:pt-20 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-center max-lg:text-center">
        <div className="me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full text-picto-primary">
              {personal.name}
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-gray-700 leading-relaxed">
            I am an <span className="bg-highlight font-medium">{personal.title}</span>{" "}
            based in <span className="font-semibold">{personal.location}</span>.{" "}
            {personal.shortBio}
          </p>
          <div className="flex max-lg:justify-center items-center gap-4">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white shadow-lg shadow-blue-500/30"
              href={`mailto:${personal.email}`}
            >
              Say Hello!
            </a>
            <a
              className="btn btn-xs xxs:btn-lg bg-white hover:bg-gray-100 text-gray-800 border border-gray-300"
              href="#portfolio"
            >
              Explore Works
            </a>
          </div>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1 sm:gap-3">
            {informationSummary.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-96 w-full h-full max-lg:mx-auto aspect-[536/636] relative group cursor-pointer`}
        style={{ perspective: "1000px" }}
      >
        {/* Ambient Floating Glow Backdrop */}
        <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-75 transition-opacity duration-700 animate-pulse -z-10" />

        {/* ── DECORATIVE CORNER CLIPS (Cantolan) ── */}
        {/* Top-Left Pin */}
        <div className="absolute -top-3 -left-3 z-20 w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 border-3 border-white shadow-lg shadow-blue-500/40 flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:-translate-x-1 group-hover:-translate-y-1">
          <div className="w-2 h-2 rounded-full bg-white/80" />
        </div>
        {/* Top-Right Pin */}
        <div className="absolute -top-3 -right-3 z-20 w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 border-3 border-white shadow-lg shadow-blue-400/40 flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:translate-x-1 group-hover:-translate-y-1">
          <div className="w-2 h-2 rounded-full bg-white/80" />
        </div>
        {/* Bottom-Left Pin */}
        <div className="absolute -bottom-3 -left-3 z-20 w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-blue-700 border-3 border-white shadow-lg shadow-indigo-500/40 flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:-translate-x-1 group-hover:translate-y-1">
          <div className="w-2 h-2 rounded-full bg-white/80" />
        </div>
        {/* Bottom-Right Pin */}
        <div className="absolute -bottom-3 -right-3 z-20 w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-indigo-800 border-3 border-white shadow-lg shadow-blue-600/40 flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:translate-x-1 group-hover:translate-y-1">
          <div className="w-2 h-2 rounded-full bg-white/80" />
        </div>

        {/* ── DECORATIVE DOT PATTERN (top-left) ── */}
        <div className="absolute -top-6 -left-8 z-0 grid grid-cols-4 gap-1.5 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          ))}
        </div>

        {/* ── DECORATIVE DOT PATTERN (bottom-right) ── */}
        <div className="absolute -bottom-6 -right-8 z-0 grid grid-cols-4 gap-1.5 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          ))}
        </div>

        {/* ── SIDE ACCENT LINE (left) ── */}
        <div className="absolute left-[-18px] top-1/4 h-1/2 w-1 rounded-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

        {/* ── FLOATING TECH BADGE (bottom-left) ── */}
        <div className="absolute -bottom-5 left-4 z-20 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-blue-100 shadow-lg shadow-blue-500/15 flex items-center gap-2 transform transition-all duration-500 group-hover:translate-y-2 group-hover:shadow-blue-500/30">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[10px] font-mono font-bold text-gray-700 tracking-wider">IoT & FULLSTACK DEV</span>
        </div>

        {/* Hero Portrait Photo with 3D Depth "Going Inward" Effect */}
        <div
          className="w-full h-full absolute bottom-0 transition-all duration-700 ease-out"
          style={{
            transform: "rotateY(-8deg) rotateX(4deg) scale(0.96)",
            transformStyle: "preserve-3d",
          }}
        >
          <img
            className="shadow-2xl shadow-blue-500/30 w-full h-full object-cover object-top bg-white rounded-3xl border-4 border-white/80 group-hover:border-blue-300 transition-all duration-700 ease-out group-hover:shadow-blue-500/50"
            style={{
              boxShadow: "20px 20px 60px rgba(37,99,235,0.25), -4px -4px 20px rgba(255,255,255,0.7)",
            }}
            src={person}
            alt={personal.name}
          />
          {/* Depth Shadow Layer */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,20,0.15) 100%)",
            }}
          />
        </div>

        {/* Floating Glassmorphism Badge over Photo (top-right) */}
        <div className="absolute top-6 right-6 bg-gray-900/90 backdrop-blur-md text-white px-4 py-2 rounded-2xl border border-blue-500/40 shadow-xl flex items-center gap-2.5 transform transition-all duration-500 group-hover:-translate-y-6 group-hover:scale-110 z-10">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
          <span className="text-xs font-mono font-bold tracking-wide text-blue-200">
            S1 SISTEM KOMPUTER (3.73)
          </span>
        </div>

        {/* ── DECORATIVE RING (top-right corner accent) ── */}
        <div className="absolute -top-8 -right-8 z-0 w-16 h-16 rounded-full border-4 border-dashed border-blue-300/50 opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-700" />
      </div>
    </div>
  );
};

export default Introduction;
