import "./Header.css";
import logo from "../../assets/Logo-wtwr.svg";
import avatar from "../../assets/avatar-wtwr.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <p className="header__date-location">Date-Location</p>
      <button className="header__add-clothes-btn">+ Add Clothes</button>
      <div className="header__user-container">
        <p className="header__username">Name</p>
        <img src={avatar} alt="Name" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
