import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { portfolioData } from "../../../data/portfolioData";

const SocialMedia = () => {
  const { socialIcons } = portfolioData;

  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md inline-flex items-center justify-center transition-colors duration-300`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
