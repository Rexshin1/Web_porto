import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { portfolioData } from "../../data/portfolioData";

const WorkTogether = () => {
  const { personal } = portfolioData;

  return (
    <div className="max-w-4xl mx-auto py-16 md:py-24 px-4 text-center">
      <span className="inline-block px-4 py-1 bg-blue-900/50 text-blue-300 text-xs font-mono font-bold tracking-wider rounded-full mb-4 border border-blue-700/50">
        OPEN FOR COLLABORATION
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
        Have an IoT, Web App, or IT Infrastructure idea? Let's discuss!
      </h2>
      <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8 leading-relaxed max-w-2xl mx-auto">
        Whether you need a custom Python Look Gateway, a full-fledged Laravel Fleet Space dashboard, or robust enterprise IT support, I am open for projects and full-time opportunities.
      </p>
      <a
        href={`mailto:${personal.email}`}
        className="btn btn-primary px-6 md:px-8 py-3 md:py-4 text-xs md:text-base shadow-lg shadow-blue-500/30 font-bold tracking-wide inline-flex items-center gap-2.5"
      >
        Let's Work Together
        <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </div>
  );
};

export default WorkTogether;
