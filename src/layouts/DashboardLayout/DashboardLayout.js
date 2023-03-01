import './DashboardLayout.scss'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className='dashboard-layout'>
      <div className="header">
        <Header/>
      </div>
      <main className='main-section'>
        <div className="sidebar">
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