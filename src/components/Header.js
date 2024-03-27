import logo from "../assets/img/icon.svg";
import InputSearch from "./InputSearch";
import notification from "../assets/img/notification.png";
import date from "../assets/img/date-icon.png";
import photo from "../assets/img/photo.svg";

const Title = () => (
  <a href="/">
    <img className="h-28  p-4" width={200} alt="logo" src={logo} />
  </a>
);

const Header = () => {
  return (
    <div className="flex justify-between w-[100%] bg-white shadow-lg 0">
      <Title />
      <InputSearch />
      <div className="nav-items">
        <ul className="flex  py-10">
          <li className="px-2 w-20">
            <img src={notification} alt="Notification" width={40} />
          </li>
          <li className="px-2 w-20">
            <img src={date} alt="Date" width={35} />
          </li>
          <li className="px-2">
            <img src={photo} alt="photo" width={45}></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
