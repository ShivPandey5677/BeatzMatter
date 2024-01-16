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
import Profile from './pages/profile/Profile';
import Explore from './pages/Explore';
import Saved from './pages/Saved';
import AllUsers from './pages/AllUsers';
import UpdatePost from './pages/UpdatePost';
import Posts from './pages/Posts';
import { CreatePost, UpdateProfile } from './pages';


function App() {
  const currentUser=true;

  const Layout=()=>{
    return (
       <div>
      <NavBar/>
     <div style={{
        display:"flex"
     }}>
        <LeftBar/>
      <div style={{flex:6}}>
        <Outlet/>
        </div>
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
        },
        {
          path: "/explore",
          element: <Explore/>,
        },
        {
          path: "/saved",
          element: <Saved/>,
        },
        {
          path: "/all-users",
          element: <AllUsers/>,
        },
        {
          path: "/create-post",
          element: <CreatePost/>,
        },
        {
          path: "/update-post/:id",
          element: <UpdatePost/>,
        },
        {
          path: "/posts/:id",
          element: <Posts/>,
        },
        {
          path: "/update-profile/:id",
          element: <UpdateProfile/>,
        },
       
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