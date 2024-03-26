import logo from "../assets/img/icon.svg";
import { Link } from "react-router-dom";
import InputSearch from "./InputSearch";

const Title = () => (
  <a href="/">
    <img className="h-28  p-2" width={100} alt="logo" src={logo} />
  </a>
);

const Header = () => {
  return (
    <div className="flex justify-between bg-white shadow-lg 0">
      <Title />
      <InputSearch />
      <div className="nav-items">
        <ul className="flex  py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart"> Instamart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
