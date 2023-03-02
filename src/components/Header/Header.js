import React from 'react'
import './Header.scss'
import logo from '../../images/logo.svg'
import AppInput from '../AppInput/AppInput'
import ProfileItem from '../ProfileItem/ProfileItem'
import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom'

function Header() {
  const notificationVector = React.createElement(IoMdNotificationsOutline)
  return (
    <header className='header-container'>
      <NavLink className="header-logo" to="/">
        <img src={logo} alt="LendSqr Logo" />
      </NavLink>
      <div className="header-search-bar">
        <AppInput placeholder='Search for anything' />
      </div>
      <nav className="nav-items">
        <NavLink to="/">Docs</NavLink>
        <i className='notification-bell'>{ notificationVector }</i>
        <ProfileItem/>
      </nav>
    </header>
  )
}

export default Header