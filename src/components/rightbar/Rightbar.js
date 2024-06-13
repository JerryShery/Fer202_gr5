import "./rightbar.css";
import { Users } from "../../Data";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Frank Martin</b> and <b>2 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="./assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {<HomeRightBar />}
      </div>
    </div>
  );
}
