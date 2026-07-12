import { portfolioData } from "../../data/portfolioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBriefcase, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ExperienceAndSkills = () => {
  const { experience, education, skills } = portfolioData;

  return (
    <div className="content py-16 md:py-28 px-4" id="experience">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block px-3.5 py-1 bg-blue-100 text-picto-primary text-xs font-mono font-extrabold tracking-wider uppercase rounded-full mb-3 border border-blue-200">
          CAREER & PROFICIENCY
        </span>
        <p className="section-title">Experience & Skills</p>
        <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
          Kombinasi latar belakang akademis dengan IPK tinggi serta pengalaman magang nyata di industri IT Enterprise, IoT Gateway, dan Fullstack Development.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Timeline (Experience & Education) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-picto-primary text-white flex items-center justify-center text-lg shadow-md">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Work & Internship Experience</h3>
            </div>

            <div className="space-y-6 relative border-l-2 border-blue-200 ml-5 pl-6">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white/95 p-6 rounded-2xl shadow-lg shadow-gray-200/50 border border-blue-100/80 relative group transition-all duration-500 ease-out hover:-translate-y-2.5 hover:scale-[1.015] hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400 cursor-pointer"
                >
                  <span className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-picto-primary border-4 border-white shadow group-hover:scale-125 transition-transform duration-300"></span>
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <div>
                      <h4 className="text-lg font-black text-gray-900 group-hover:text-blue-700 transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-picto-primary">{exp.company} <span className="text-gray-400 font-normal">| {exp.location}</span></p>
                    </div>
                    <span className="px-3 py-1 bg-blue-50 text-picto-primary text-xs font-mono font-bold rounded-full border border-blue-200/60 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {exp.period}
                    </span>
                  </div>
                  {(exp.grade || exp.credential) && (
                    <div className="flex flex-wrap gap-2 mt-2.5 mb-1.5">
                      {exp.grade && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-[11px] font-mono font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          {exp.grade}
                        </span>
                      )}
                      {exp.credential && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-50 text-blue-800 border border-blue-200 rounded-lg text-[11px] font-mono font-semibold">
                          {exp.credential}
                        </span>
                      )}
                    </div>
                  )}
                  <ul className="mt-4 space-y-2 text-xs md:text-sm text-gray-600">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-picto-primary font-bold mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="pt-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-lg shadow-md">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education Background</h3>
            </div>

            <div className="space-y-6 relative border-l-2 border-blue-200 ml-5 pl-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white/95 p-6 rounded-2xl shadow-lg shadow-gray-200/50 border border-blue-100/80 relative group transition-all duration-500 ease-out hover:-translate-y-2.5 hover:scale-[1.015] hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400 cursor-pointer"
                >
                  <span className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow group-hover:scale-125 transition-transform duration-300"></span>
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <div>
                      <h4 className="text-lg font-black text-gray-900 group-hover:text-blue-700 transition-colors">
                        {edu.institution}
                      </h4>
                      <p className="text-sm font-semibold text-blue-600">{edu.degree}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-mono font-extrabold rounded-full border border-blue-300 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                      {edu.gpa}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-gray-500 mb-2">{edu.period}</p>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Hard & Soft Skills */}
        <div className="lg:col-span-5 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-blue-900/10 border border-blue-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
          <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <span>Core Technical Proficiency</span>
          </h3>

          <div className="space-y-5">
            {skills.hardSkills.map((skill, index) => (
              <div key={index} className="group/skill cursor-pointer">
                <div className="flex justify-between text-xs md:text-sm font-bold text-gray-800 mb-1.5 group-hover/skill:text-blue-700 transition-colors">
                  <span>{skill.name}</span>
                  <span className="font-mono text-picto-primary">{skill.level}</span>
                </div>
                <div className="w-full h-2.5 bg-blue-50 rounded-full overflow-hidden p-0.5 border border-blue-100">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 rounded-full transition-all duration-1000 group-hover/skill:scale-x-105 origin-left shadow-sm"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills Badges */}
          <div className="mt-10 pt-8 border-t border-blue-100">
            <h4 className="text-sm font-mono font-bold text-blue-800 uppercase tracking-wider mb-4">
              Soft Skills & Capabilities
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {skills.softSkills.map((soft, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 text-xs font-bold rounded-xl border border-blue-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:shadow-md hover:shadow-blue-500/30 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faCheckCircle} className="text-xs" />
                  {soft}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAndSkills;
