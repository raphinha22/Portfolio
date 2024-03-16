import { Medal, Users } from "lucide-react";
import about_img from "../Images/phanha.jpg";

const About = () => {
  return (
    <div className="about">
      <h3 className="h3-header">
        get to know more
      </h3>
      <h1 className="h1-header">
        About Me
      </h1>
      <div className="about-page">
        <div className="about-img">
          <img src={about_img} alt="Raphinha" />
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
              <p>Bacholors Degree</p>
            </div>
          </div>
          <p className="text-about">
            Hello my name is Choup Phanha I am a third year student at Setec
            Institute pursuing a Bachelor’s degree in the field at management
            information system. Major: HTML, CSS, C++, C#, JAVASCRIPT PHOTOSHOP,
            JAVA, SQL, ORACLE, PHP ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
