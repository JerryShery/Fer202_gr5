import React, { useState, useCallback } from 'react';
import "./rightbar.css";
import { Users } from "../../Data";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const [userInfo, setUserInfo] = useState({
    city: "New York",
    from: "Madrid",
    relationship: "Single"
  });
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Frank Martin</b> and <b>2 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="Advertisement" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          {editMode ? (
            <>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <input type="text" name="city" value={userInfo.city} onChange={handleInputChange} className="rightbarInfoInput" />
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <input type="text" name="from" value={userInfo.from} onChange={handleInputChange} className="rightbarInfoInput" />
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <select name="relationship" value={userInfo.relationship} onChange={handleInputChange} className="rightbarInfoInput">
                  <option value="Single">Single</option>
                  <option value="In a relationship">In a relationship</option>
                  <option value="Married">Married</option>
                </select>
              </div>
            </>
          ) : (
            <>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">{userInfo.city}</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">{userInfo.from}</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">{userInfo.relationship}</span>
              </div>
            </>
          )}
        </div>
        <button onClick={toggleEditMode} className="editButton">{editMode ? "Save Changes" : "Edit Info"}</button>
          <br/><br/>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {Users.map(user => (
            <div key={user.id} className="rightbarFollowing">
              <img src={user.profilePicture} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">{user.username}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
