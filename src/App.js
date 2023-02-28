import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import Login from './pages/Login/Login';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthLayout/>}>
      <Route index element={<Login/>} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
