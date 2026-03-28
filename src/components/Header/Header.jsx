import "./Header.css";
import logo from "../../assets/Logo-wtwr.svg";
import avatar from "../../assets/avatar-wtwr.svg";
import ToggleSwitch from "../App/ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const username = "David Baron";

  return (
    <header className="header">
      <NavLink className="header__nav-link" to="/">
        <img className="header__logo" src={logo} alt="WTWR logo" />
      </NavLink>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button className="header__add-clothes-btn" onClick={handleAddClick}>
        + Add Clothes
      </button>
      <NavLink className="header__nav-link" to="/profile">
        <div className="header__user-container">
          <p className="header__username">{username}</p>
          <img src={avatar} alt="User Avatar" className="header__avatar" />
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
