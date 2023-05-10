import React from 'react'
import './Header.scss'
import logo from '../../images/logo.svg'
import miniLogo from '../../images/mini-logo.svg'
import ProfileItem from '../ProfileItem/ProfileItem'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";

function Header({ showMenu, toggleMenu }) {
  const notificationVector = React.createElement(IoMdNotificationsOutline)
  const hamburgerIcon = React.createElement(RxHamburgerMenu)
  const closeIcon = React.createElement(IoCloseOutline)
  
  return (
    <header className='header-container'>
      <NavLink className="header-logo" to="/">
        <img src={logo} className="main-logo" alt="LendSqr Logo" />
        <img src={miniLogo} className="mini-logo" alt="LendSqr Logo" />
      </NavLink>
      <nav className="nav-items">
        <NavLink to="/" className="docs-link">Docs</NavLink>
        <i className='notification-bell'>{ notificationVector }</i>
        <div className="profile-item">
          <ProfileItem/>
        </div>
        {!showMenu && <i className='hamburger-icon' onClick={toggleMenu}>{ hamburgerIcon }</i>}
        {showMenu && <i className='hamburger-icon' onClick={toggleMenu}>{ closeIcon }</i>}
      </nav>
    </header>
  )
}

export default Header