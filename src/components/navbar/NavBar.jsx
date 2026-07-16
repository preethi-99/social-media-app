import "./NavBar.scss";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const NavBar = () => {
    return (
        <div className="navbar">
            <div className = "left">
                <Link to = "/" style = {{ textDecoration: "none"}}>
                <span>My Social Media App</span> </Link>
                 <HomeOutlinedIcon /> 
            <DarkModeOutlinedIcon />
            <GridViewOutlinedIcon />
            <div className="search">
                <SearchOutlinedIcon />
                <input type="text" placeholder="Search..." />
            
            </div>
            
            </div>
            <div className="right">
                <NotificationsOutlinedIcon />
                <EmailOutlinedIcon />
                <PersonOutlinedIcon />
                <div className="user">
                    <img src="https://wallpapers.com/images/featured/social-media-sc1t2yu8prkjix7a.jpg" alt="User" />
                    <span>Preethi</span>
                </div>
            </div>
          
        </div>
    );
}

export default NavBar;