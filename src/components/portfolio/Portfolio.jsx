import Projects from "./Projects";
import { portfolioData } from "../../data/portfolioData";

const Portfolio = () => {
  const { projects, personal } = portfolioData;

  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="content py-12 md:py-24 max-xxl:px-4">
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-3.5 py-1 bg-blue-100 text-picto-primary text-xs font-mono font-extrabold tracking-wider uppercase rounded-full mb-3 border border-blue-200">
            PORTFOLIO HIGHLIGHTS
          </span>
          <p className="section-title">Selected Case Studies</p>
          <p className="text-[14px] sm:text-[16px] text-gray-600 mt-3 leading-relaxed">
            Eksplorasi mendalam dari proyek nyata yang telah saya kembangkan: dari sistem arsitektur IoT terintegrasi hingga aplikasi web skala enterprise.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((item) => (
            <Projects key={item.id} data={item} />
          ))}
        </div>
        <div className="center">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary py-3 px-8 mt-12.5 text-center text-[16px] font-semibold shadow-lg shadow-blue-500/25 inline-flex items-center gap-2.5"
          >
            Explore GitHub Repositories
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
