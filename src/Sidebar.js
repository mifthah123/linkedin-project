import React from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  console.log(recentItem);
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://news.climate.columbia.edu/wp-content/uploads/2021/04/mark-koch-KiRlN3jjVNU-unsplash-637x425.jpeg"
          alt="cover pic"
        />
        <Avatar
          className="sidebar_avatar"
          src="https://cdn.britannica.com/07/222807-050-50D5DC99/English-singer-songwriter-actor-Harry-Styles-2020.jpg"
        />
        <h2>Muhammed mifthah</h2>
        <h4> mifthahmuhammed792@gmail.com</h4>

        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p className="sidebar_statnumber">who viewed you</p>
            <p>2,543</p>
          </div>
          <div className="sidebar_stat">
            <p>views on post</p>
            <p className="sidebar_statnumber">2,543</p>
          </div>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
