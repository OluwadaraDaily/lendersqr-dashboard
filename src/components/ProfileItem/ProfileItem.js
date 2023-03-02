import React from 'react';
import './ProfileItem.scss'
import profileImg from '../../images/profile-img.png'
import { MdArrowDropDown } from "react-icons/md";

function ProfileItem() {
  const downArrow = React.createElement(MdArrowDropDown)
  return (
    <div className='profile-item-container'>
      <img src={profileImg} alt="Profile of logged in user" />
      <p className="user-name">Adedeji</p>
      <i className='down-arrow-icon'>{ downArrow }</i>
    </div>
  )
}

export default ProfileItem