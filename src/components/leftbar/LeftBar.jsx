import "./LeftBar.scss";
import Friends from "../../assets/friends.jpg";
import Groups from "../../assets/groups.jpg";
import Marketplace from "../../assets/marketplace.jpg";
import Memories from "../../assets/memories.jpg";
import Watch from "../../assets/watch.jpg";
const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            {/**
             <img
               src="https://wallpapers.com/images/featured/social-media-sc1t2yu8prkjix7a.jpg"
               alt=""
             />
            */}
            <span>John Doe</span>
          </div>

          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Marketplace} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;