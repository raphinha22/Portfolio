import { BadgeCheck } from "lucide-react";
import Aos from "aos";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="Experience" data-aos = "fade-down">
      <div className="expert-head">
        <p>Explore My</p>
        <h1>Experience</h1>
      </div>
      <div className="expert-skill">
        <div className="front-end">
          <h3>Frontend Development</h3>
          <div className="expertt-skill">
            <div className="expert-langauge">
              <div className="langauge">
                <div className="icon">
                  <BadgeCheck />
                </div>
                <div className="icon-text">
                  <h2>HTML</h2>
                  <p>Experienced</p>
                </div>
              </div>
            </div>
            <div className="expert-langauge">
              <div className="langauge">
                <div className="icon">
                  <BadgeCheck />
                </div>
                <div className="icon-text">
                  <h2>CSS</h2>
                  <p>Experienced</p>
                </div>
              </div>
            </div>
            <div className="expert-langauge">
              <div className="langauge">
                <div className="icon">
                  <BadgeCheck />
                </div>
                <div className="icon-text">
                  <h2>Javascript</h2>
                  <p>Basic</p>
                </div>
              </div>
            </div>
            <div className="expert-langauge">
              <div className="langauge">
                <div className="icon">
                  <BadgeCheck />
                </div>
                <div className="icon-text">
                  <h2>React JS</h2>
                  <p>Basic</p>
                </div>
              </div>
            </div>
            <div className="expert-langauge">
              <div className="langauge">
                <div className="icon">
                  <BadgeCheck />
                </div>
                <div className="icon-text">
                  <h2>Tailwind</h2>
                  <p>Intermediate</p>
                </div>
              </div>
            </div>
            <div className="expert-langauge">
              <div className="langauge">
                <div className="icon">
                  <BadgeCheck />
                </div>
                <div className="icon-text">
                  <h2>Wordpress</h2>
                  <p>Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
