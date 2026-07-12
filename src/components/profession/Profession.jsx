import Roles from "./Roles";
import { portfolioData } from "../../data/portfolioData";

const Profession = () => {
  const { roles, personal } = portfolioData;

  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <div>
          <span className="inline-block px-3.5 py-1 bg-blue-100 text-picto-primary text-xs font-mono font-extrabold tracking-wider uppercase rounded-full mb-3 border border-blue-200">
            EXPERTISE & CAPABILITIES
          </span>
          <p className="section-title">What I Do Best</p>
          <p className="text-[14px] sm:text-[16px] text-gray-600 mt-4 leading-relaxed">
            Dari arsitektur sistem perangkat keras & perangkat lunak (IoT Gateway), perancangan topologi jaringan (Mikrotik, Fiber Optic), hingga pengembangan aplikasi web modern berperforma tinggi dengan Laravel & React.
          </p>
          <p className="text-[14px] sm:text-[16px] text-gray-600 mt-4 leading-relaxed">
            Saya menggabungkan ketelitian pemecahan masalah teknis dengan standar kualitas kode terbaik untuk menghadirkan solusi yang skalabel, aman, dan dapat diandalkan.
          </p>

          <a
            href="#portfolio"
            className="mt-6 md:mt-10 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5 shadow-lg shadow-blue-500/25"
          >
            Discuss a Project
          </a>
        </div>
      </div>
      <div className="">
        {roles.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
