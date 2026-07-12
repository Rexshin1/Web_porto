import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { portfolioData } from "../../data/portfolioData";

const Contact = () => {
  const { contactAddresses, personal } = portfolioData;

  return (
    <div className="py-16 md:py-24 max-xxl:px-4" id="contact">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)] border border-blue-100/60"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3.5 py-1 bg-blue-100 text-picto-primary text-xs font-mono font-extrabold tracking-wider uppercase rounded-full mb-3 border border-blue-200">
                GET IN TOUCH
              </span>
              <p className="text-[32px] max-lg:hidden font-bold text-[#132238] leading-tight">
                Let’s Discuss Your Next IoT or Web Project
              </p>
              <p className="text-[12px] xs:text-[14px] sm:text-base md:text-base max-lg:text-center pt-4 font-normal text-soft-dark leading-relaxed">
                {personal.name} is available for freelance projects, system integrations, or full-time opportunities. Feel free to drop a message!
              </p>
            </div>
            <div className="my-8.75 space-y-4 sm:space-y-0 sm:max-lg:flex justify-between items-center">
              {contactAddresses.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
            <div className="w-full max-lg:text-center max-md:mb-4">
              <SocialMedia />
            </div>
          </div>
          <div className="lg:col-span-7 w-full overflow-y-auto py-2 sm:py-4">
            <p className="text-xl mb-4 xs:text-2xl sm:text-2xl md:text-[32px] font-bold text-[#132238] lg:hidden text-center">
              Let’s Discuss Your Project
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
