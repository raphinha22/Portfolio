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
  },
  {
    id: 2,
    img: football,
    title: "Football Project",
  },
  {
    id: 3,
    img: menu,
    title: "GPT3 Project",
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
        {project.map(({ img, title, id }) => {
          return (
              <div className="myproject" key={id}>
                <div className="img-box">
                  <img src={img} alt="ronaldo" />
                </div>
                <h2>{title}</h2>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
