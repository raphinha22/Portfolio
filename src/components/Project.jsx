import football from "../Images/ronaldo.jpg";
import menu from "../Images/ai.png";
import rockets from "../Images/motorental.jpg";
import Aos from "aos";
import { useEffect } from "react";


const Project = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className="Project" data-aos = "fade-right">
      <div className="Project-head">
        <p>Browse My Recent</p>
        <h1>Projects</h1>
      </div>
      <div className="flex-project">
        <div className="myproject">
          <div className="img-box">
            <img src={rockets} alt="ronaldo" />
          </div>
          <h2>Moto Rental Project</h2>
          <div className="view-btn">
            <a href="https://github.com/raphinha22/motorental">
              <button className="code">GitHub</button>
            </a>
            <a href="https://motorental.vercel.app">
              <button className="demo">Live Demo</button>
            </a>
          </div>
        </div>

        <div className="myproject">
          <div className="img-box">
            <img src={football} alt="ronaldo" />
          </div>
          <h2>Football Project</h2>
          <div className="view-btn">
            <a href="https://github.com/raphinha22/football">
              <button className="code">GitHub</button>
            </a>
            <a href="https://football-nu-five.vercel.app">
              <button className="demo">Live Demo</button>
            </a>
          </div>
        </div>

        <div className="myproject">
          <div className="img-box">
            <img src={menu} alt="ronaldo" />
          </div>
          <h2>GPT3 Project</h2>
          <div className="view-btn">
            <a href="https://github.com/raphinha22/gpt3">
              <button className="code">GitHub</button>
            </a>
            <a href="https://gpt3-iota-five.vercel.app/">
              <button className="demo">Live Demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
