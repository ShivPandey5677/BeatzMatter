import './globals.css';
import Login from './pages/login/login';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Register from './pages/register/register';
import NavBar from './components/navbar/NavBar';
import LeftBar from './components/leftbar/LeftBar';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';

function App() {
  const currentUser=false;

  const Layout=()=>{
    return (
       <div>
      <NavBar/>
     <div style={{
        display:"flex"
     }}>
        <LeftBar/>
        <Outlet/>
     </div>
    </div>
    );

  };
  const ProtectedRoute=({children})=>{
    if(!currentUser){
    return <Navigate to="/login"/>}
    return children

  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<ProtectedRoute>
        <Layout/>
        </ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
       
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
 
    return <div >
       <RouterProvider router={router} />
    </div>;
  }
  
  export default App;