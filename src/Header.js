import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import Search from "@mui/icons-material/Search";
import Home from "@mui/icons-material/Home";
import SupervisorAccount from "@mui/icons-material/SupervisorAccount";
import BusinessCenter from "@mui/icons-material/BusinessCenter";
import Chat from "@mui/icons-material/Chat";
import Notifications from "@mui/icons-material/Notifications";
function Header() {
  return (
    <div className="header_main">
      <div className="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="logo"
        />
        <div className="header_search">
          <Search />
          <input type={"text"} />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={Home} title="home" />
        <HeaderOption Icon={SupervisorAccount} title="My network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar="https://cdn.britannica.com/07/222807-050-50D5DC99/English-singer-songwriter-actor-Harry-Styles-2020.jpg" />
      </div>
    </div>
  );
}

export default Header;
