import React from "react";
import bell from "@assets/bell.png";
import IconButton from "@component/icon";
import Profile from "@component/profile";

const Header = () => {
  return (
    <header>
        <div className="header"> 
        <text className="header-text">Header</text>
        <IconButton> icon={bell} alt="Notification" onClick={() => alert("You have a notification!")}</IconButton> 
        <Profile onClick={() => alert("You clicked the profile button!")} />
        </div>
    </header>
  );
}
export default Header;