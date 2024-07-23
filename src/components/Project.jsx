import football from "../Images/ronaldo.jpg";
import menu from "../Images/ai.png";
import rockets from "../Images/motorental.jpg";
import Aos from "aos";
import { useEffect } from "react";

const project = [
  {
    id: 1,
    img: rockets,
    title: "Moto Rental Project",
    code: "https://github.com/raphinha22/motorental",
    view: "https://motorental.vercel.app",
  },
  {
    id: 2,
    img: football,
    title: "Football Project",
    code: "https://github.com/raphinha22/football",
    view: "https://football-nu-five.vercel.app",
  },
  {
    id: 3,
    img: menu,
    title: "GPT3 Project",
    code: "https://github.com/raphinha22/gpt3",
    view: "https://gpt3-iota-five.vercel.app",
  },
];

const Project = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="Project" data-aos="fade-right">
      <div className="Project-head">
        <p>Browse My Recent</p>
        <h1>Projects</h1>
      </div>
      <div className="flex-project">
        {project.map(({ img, code, title, view, id }) => {
          return (
              <div className="myproject" key={id}>
                <div className="img-box">
                  <img src={img} alt="ronaldo" />
                </div>
                <h2>{title}</h2>
                <div className="view-btn">
                  <a href={code}>
                    <button className="code">GitHub</button>
                  </a>
                  <a href={view}>
                    <button className="demo">Live Demo</button>
                  </a>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
