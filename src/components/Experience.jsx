import { BadgeCheck } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Experience">
      <div className="expert-head">
        <p data-aos="zoom-in">Explore My</p>
        <h1 data-aos="zoom-out">Experience</h1>
      </div>
      <div className="expert-skill">
        <div className="front-end" data-aos="fade-right">
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
                  <h2>React</h2>
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
                  <h2>Typescipt</h2>
                  <p>Basic</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="front-end" data-aos="fade-left">
          <h3>Frontend Development</h3>
          <div className="expertt-skill">
            <div className="expert-langauge">
              <div className="langauge">
                <div className="icon">
                  <BadgeCheck />
                </div>
                <div className="icon-text">
                  <h2>Git</h2>
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
                  <h2>Node JS</h2>
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
                  <h2>Laravel</h2>
                  <p>Basic</p>
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
