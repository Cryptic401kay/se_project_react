import "./SideBar.css";
import avatar from "../../assets/avatar-wtwr.svg";

export default function SideBar() {
  const username = "David Baron";
  const userAvatar = avatar;

  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <div className="sidebar__username">{username}</div>
        {userAvatar ? (
          <img
            src={userAvatar || avatar}
            alt="User Avatar"
            className="sidebar__avatar"
          />
        ) : (
          <span className="sidebar__avatar sidebar__avatar_none">
            {username?.toUpperCase().charAt(0) || ""}
          </span>
        )}
      </div>
    </aside>
  );
}
