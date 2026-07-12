import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { portfolioData } from "../../data/portfolioData";

const Profile = () => {
  const { personal, education, experience } = portfolioData;

  return (
    <div
      className="relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-3xl bg-white/95 backdrop-blur-md drop-shadow-2xl max-xl:mb-5 shadow-blue-900/10 xl:p-16 lg:p-14 md:p-12 sm:p-10 p-6 border border-blue-100/80 transition-shadow duration-500 hover:shadow-[0_30px_80px_rgba(37,99,235,0.18)]"
      id="profile"
    >
      <div className="flex max-lg:flex-col gap-12 lg:gap-16 items-start">

        {/* LEFT COLUMN — Stats + Social */}
        <div className="lg:w-72 xl:w-80 flex-shrink-0 flex flex-col gap-5">
          {/* Quick Snapshot Cards */}
          <div className="flex flex-col gap-4">
            <div className="group/card flex items-start gap-3.5 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 p-5 rounded-2xl border border-blue-100 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400 cursor-pointer">
              <div className="p-2.5 bg-gray-900 group-hover/card:bg-gradient-to-br group-hover/card:from-blue-600 group-hover/card:to-indigo-600 text-white rounded-xl mt-0.5 transition-all duration-300 shadow-md shrink-0">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 group-hover/card:text-blue-700 transition-colors">Education</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-snug">{education[0].degree}</p>
                <p className="text-xs text-gray-500">{education[0].institution}</p>
                <p className="text-[11px] font-mono font-extrabold text-blue-700 mt-1.5">{education[0].gpa}</p>
              </div>
            </div>
            <div className="group/card flex items-start gap-3.5 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 p-5 rounded-2xl border border-blue-100 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400 cursor-pointer">
              <div className="p-2.5 bg-gray-900 group-hover/card:bg-gradient-to-br group-hover/card:from-blue-600 group-hover/card:to-indigo-600 text-white rounded-xl mt-0.5 transition-all duration-300 shadow-md shrink-0">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 group-hover/card:text-blue-700 transition-colors">Recent Role</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-snug">{experience[0].role}</p>
                <p className="text-xs text-gray-500">{experience[0].company}</p>
                <p className="text-[11px] font-mono font-extrabold text-blue-700 mt-1.5">{experience[0].period}</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400">Connect With Me</p>
            <div className="px-4 py-3 bg-gradient-to-br from-gray-50 to-blue-50/40 rounded-xl border border-blue-100 w-fit">
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — Bio + CTA */}
        <div className="flex-1 min-w-0">
          <span className="inline-block px-3.5 py-1 bg-blue-100 text-blue-700 text-xs font-mono font-extrabold tracking-wider uppercase rounded-full mb-4 border border-blue-200">
            ABOUT ME &amp; CAPABILITIES
          </span>
          <h2 className="text-2xl xxs:text-3xl sm:text-4xl leading-tight font-black mb-5 text-gray-900">
            Passionate {personal.title} with Engineering Precision
          </h2>
          <p className="text-sm xs:text-[15px] lg:text-[16px] font-normal text-gray-600 leading-relaxed mb-8">
            {personal.longBio}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              className="btn btn-lg px-7 btn-primary shadow-lg shadow-blue-500/25"
              href="#portfolio"
            >
              My Projects
            </a>
            <a
              className="btn btn-lg px-7 border border-gray-300 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary"
              href="/MOH.KHOIRUN NAFIS.pdf"
              download="MOH.KHOIRUN NAFIS.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

