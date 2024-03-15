import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { UseContext } from "./Context";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Links = [
  {
    id: 1,
    path: "about",
    name: "About",
  },
  {
    id: 2,
    path: "experience",
    name: "Experience",
  },
  {
    id: 3,
    path: "project",
    name: "Project",
  },
  {
    id: 4,
    path: "contact",
    name: "Contact",
  },
];

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { exit, handleBar } = UseContext();
  return (
    <>
      <nav className="navbar">
        <Link to={"home"}>
          <h1>Raphinha</h1>
        </Link>
        <ul>
          {Links.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        <button className="menu" onClick={handleBar}>
          {exit ? <X /> : <Menu />}
        </button>
      </nav>
      {exit && (
        <ul className="respon">
          {Links.map((link) => {
            return (
              <li key={link.id} onClick={handleBar}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Navbar;
