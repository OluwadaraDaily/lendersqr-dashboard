import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
import Login from './pages/Login/Login';
import AllUsers from './pages/Dashboard/AllUsers/AllUsers';
import User from './pages/Dashboard/User/User';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AuthLayout/>}>
        <Route index element={<Login/>} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout/>}>
        <Route path='users' element={<AllUsers/>}/>
        <Route path='users/:id' element={<User/>}/>
      </Route>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
