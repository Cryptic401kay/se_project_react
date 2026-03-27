import "./Header.css";
import logo from "../../assets/Logo-wtwr.svg";
import avatar from "../../assets/avatar-wtwr.svg";
import ToggleSwitch from "../App/ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="WTWR logo" />
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button className="header__add-clothes-btn" onClick={handleAddClick}>
        + Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Name</p>
        <img src={avatar} alt="User Avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
