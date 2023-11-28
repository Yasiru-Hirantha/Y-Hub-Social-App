import "./rightbar.css"
import React from 'react'
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({user}) {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="bithdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birtdayText">
            <b>Camila Parker</b> and <b>4 other friends</b> have birthday today.
            </span>
        </div>
        <img src="assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
