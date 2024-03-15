import Raphinha from "../Images/phanha.jpg";
import CV from "../Images/CV__ENGLISHHH.png";
import { Facebook, Github, Youtube } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="home">
      <div className="box-image" data-aos="fade-right">
        <img src={Raphinha} alt="" />
      </div>
      <div className="info-raphinha">
        <h5 data-aos="fade-right">Hello, i am</h5>
        <h1 data-aos="fade-left">Choup Phanha</h1>
        <h3 data-aos="fade-right">Frontend Developer</h3>
        <div className="btn-down__contact" data-aos="zoom-in">
          <button>
            <a href={CV}>Download CV</a>
          </button>
          <Link to={"/contact"}>
            <button>Contact info</button>
          </Link>
        </div>
        <div className="socail" data-aos="zoom-in">
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
