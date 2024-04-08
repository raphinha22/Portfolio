import { Medal, Users } from "lucide-react";
import about_img from "../Images/phanha.jpg";
import Aos from "aos";
import { useEffect } from "react";

const About = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className="about" data-aos = "fade-up">
      <h3 className="h3-header">get to know more</h3>
      <h1 className="h1-header">About Me</h1>
      <div className="about-page">
        <div className="about-img">
          <div className="imgs">
            <img src={about_img} alt="Raphinha" />
          </div>
        </div>
        <div className="all-right">
          <div className="right-about">
            <div className="experience">
              <Medal />
              <h5>Experience</h5>
              <p>Do not have experience</p>
              <p>Frontend Developer</p>
            </div>
            <div className="education">
              <Users />
              <h5>Education</h5>
              <p>Bachelors Degree</p>
              <p>Setec Institute</p>
            </div>
          </div>
          <p className="text-about">
            Hello my name is Choup Phanha I am a third year student at Setec
            Institute pursuing a Bachelor’s degree in the field at management
            information system since 2022. And 2016-2022 i was studying at
            Angrmeas high school. I really want to have some experience and
            approve my skill. If i can apply a job, I will do my best and work
            hard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
