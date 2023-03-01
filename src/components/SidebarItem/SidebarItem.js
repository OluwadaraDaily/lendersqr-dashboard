import { NavLink } from 'react-router-dom'
import './SidebarItem.scss'

function SidebarItem({ imageName = 'briefcase', itemName, to = "*" }) {
  return (
    <NavLink className='sidebar-item' to={to}>
      <img src={`${process.env.PUBLIC_URL}/images/${imageName}.svg`} alt="" />
      <p className="text">{itemName}</p>
    </NavLink>
  )
}

export default SidebarItem