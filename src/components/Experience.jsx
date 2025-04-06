
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
          <h3>GRAPHIC DESIGNER</h3>
          <div className="expertt-skill">
            {
              exp.map(({img, id, name}) => {
                return (
                  <div className="skill" key={id}>
                    <img src={img} alt="" />
                    <h2>{name}</h2>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
