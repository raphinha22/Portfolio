import { BadgeCheck } from "lucide-react";
import Aos from "aos";
import { useEffect } from "react";
import exp from "./data";
const Experience = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="Experience" data-aos="fade-down">
      <div className="expert-head">
        <p>Explore My</p>
        <h1>Experience</h1>
      </div>
      <div className="expert-skill">
        <div className="front-end">
          <h3>Frontend Development</h3>
          <div className="expertt-skill">
            {exp.map((experience) => {
              return (
                <div className="expert-langauge" key={experience.id}>
                  <div className="langauge">
                    <div className="icon">
                      <BadgeCheck />
                    </div>
                    <div className="icon-text">
                      <h2>{experience.lang}</h2>
                      <p>{experience.eib}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
