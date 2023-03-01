import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
import Login from './pages/Login/Login';
import Users from './pages/Dashboard/Users/Users';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AuthLayout/>}>
        <Route index element={<Login/>} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout/>}>
        <Route path='users' element={<Users/>}/>
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
