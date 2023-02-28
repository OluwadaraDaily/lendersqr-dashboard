import { Outlet } from 'react-router-dom'
import './AuthLayout.scss'

function AuthLayout() {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default AuthLayout