import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton, Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectuser } from "./features/userSlice";
import { auth } from "./Firebase";

function Header() {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  const logout = () => {
    auth.signOut().then(dispatch(logOut()));
  };
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/Google_Gmail_New_Logo_India_To_1200x768.jpeg?WgdQ3Tx7r4ZssTpgfxm1Iwb5KMAG8S4A&size=770:433"
          alt="gmail"
        />
      </div>
      <div className="header_middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDownIcon />
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <div className="avatar">
          <Avatar onClick={logout} src={user?.photoUrl} />
          <p className="logout_text">Logout</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
