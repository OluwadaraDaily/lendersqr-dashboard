import './DashboardLayout.scss'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { useRef, useState } from 'react'

function DashboardLayout() {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = (e) => {
    setShowMenu(prevState => !prevState)
  }
  return (
    <div className='dashboard-layout'>
      <div className="header">
        <Header toggleMenu={toggleMenu} showMenu={showMenu}/>
      </div>
      <main className='main-section'>
        <div className={showMenu ? "show-sidebar":"sidebar"}>
          <Sidebar/>
        </div>
        <div className="main-content">
          <Outlet/>
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout