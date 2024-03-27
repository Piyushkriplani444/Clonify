import logo from "../assets/img/icon.svg";
import InputSearch from "./InputSearch";
import notification from "../assets/img/notification.png";
import date from "../assets/img/date-icon.png";
import photo from "../assets/img/photo.svg";

const Header = () => {
  return (
    <header className="h-[120px] pl-8 pr-[31px] py-2.5 flex justify-between w-[100%] bg-white shadow-lg 0">
      <InputSearch />
      <div className="nav-items mt-3">
        <ul className="flex  ">
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
    </header>
  );
};

export default Header;
