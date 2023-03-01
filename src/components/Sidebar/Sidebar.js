import './Sidebar.scss'
import briefCase from '../../images/briefcase.svg'
import { IoIosArrowDown } from "react-icons/io";
import React from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';

function Sidebar() {
  const arrowDown = React.createElement(IoIosArrowDown)
  const customerSidebarItems = [
    { name: 'Users', imageName: 'user-friends', to: 'users' },
    { name: 'Guarantors', imageName: 'multiple-users' },
    { name: 'Loans', imageName: 'money-sack' },
    { name: 'Decision Models', imageName: 'handshake' },
    { name: 'Savings', imageName: 'piggy-bank' },
    { name: 'Loan Requests', imageName: 'loan-request' },
    { name: 'Whitelist', imageName: 'user-check' },
    { name: 'Karma', imageName: 'user-check' },
  ]
  const businessSidebarItems = [
    { name: 'Organization', imageName: 'briefcase' },
    { name: 'Loan Product', imageName: 'loan-request' },
    { name: 'Savings Product', imageName: 'bank' },
    { name: 'Fees and Charges', imageName: 'coins' },
    { name: 'Transactions', imageName: 'transfer' },
    { name: 'Services', imageName: 'galaxy' },
    { name: 'Service Account', imageName: 'user-cog' },
    { name: 'Settlements', imageName: 'scroll' },
    { name: 'Reports', imageName: 'chart-bar' },
  ]
  const settingsSidebarItems = [
    { name: 'Preferences', imageName: 'sliders' },
    { name: 'Fees and Pricing', imageName: 'badge-percent' },
    { name: 'Audit Logs', imageName: 'clipboard-list' },
    
  ]
  return (
    <div className='sidebar-container'>
      <div className="switch-organization">
        <img src={briefCase} alt="Briefcase Icon" />
        <p className="text">Switch Organization</p>
        <i>{arrowDown}</i>
      </div>
      <SidebarItem itemName="Dashboard" imageName='home' />
      <div className="sidebar-items">
        <div className="sidebar-items-section">
          <p className="title">Customers</p>
          {customerSidebarItems.map((item) => (
            <SidebarItem
              itemName={item.name}
              imageName={item.imageName}
              to={item.to ? item.to : '*'}
            />
          ))}
        </div>
        <div className="sidebar-items-section">
          <p className="title">Businesses</p>
          {businessSidebarItems.map((item) => (
            <SidebarItem
              itemName={item.name}
              imageName={item.imageName}
            />
          ))}
        </div>
        <div className="sidebar-items-section">
          <p className="title">Settings</p>
          {settingsSidebarItems.map((item) => (
            <SidebarItem
              itemName={item.name}
              imageName={item.imageName}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar