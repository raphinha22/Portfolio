import Raphinha from "../Images/phanha.jpg";
import CV from "../Images/Beige Dark Gray Minimalist Web Developer Resume.jpg";
import { Facebook, Github, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";

const Home = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className="home" data-aos = "fade-up">
      <div className="box-image">
        <div className="image-inbox">
          <img src={Raphinha} alt="raphinha" />
        </div>
      </div>
      <div className="info-raphinha">
        <h5>Hello, i am</h5>
        <h1 className="Myname" data-text="Choup_Phanha">
          Choup_Phanha
        </h1>
        <h3>Frontend Developer</h3>
        <div className="btn-down__contact">
          <button>
            <a href={CV}>Download CV</a>
          </button>
          <Link to={"/contact"}>
            <button>Contact info</button>
          </Link>
        </div>
        <div className="socail">
          <a href="https://github.com/raphinha22">
            <Github />
          </a>
          <a href="https://www.youtube.com/channel/UCgVD__balsczMR_KHgjnafw">
            <Youtube />
          </a>
          <a href="https://www.facebook.com/nhax.avantika/">
            <Facebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
