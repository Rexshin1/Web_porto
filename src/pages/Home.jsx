import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import ExperienceAndSkills from "../components/experience/ExperienceAndSkills";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Profession from "../components/profession/Profession";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-soft-white pt-32 pb-10">
        <ExperienceAndSkills />
      </div>
      <div className="bg-white">
        <Profession />
      </div>
      <Portfolio />
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
