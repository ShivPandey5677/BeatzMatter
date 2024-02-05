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
import Explore from './pages/Explore';
import Saved from './pages/Saved';
import AllUsers from './pages/AllUsers';
import UpdatePost from './pages/UpdatePost';
import Posts from './pages/Posts';
import { CreatePost, UpdateProfile } from './pages';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import AddProduct from './pages/AddProduct/addproduct';
import CheckAuthenticity from './pages/CheckAuthenticity/CheckAuthenticity';


function App() {
  const {currentUser}=useContext(AuthContext);
 const queryClient=new QueryClient();
  const Layout=()=>{
    return (
      <QueryClientProvider client={queryClient}>
       <div>
      <NavBar/>
     <div style={{
        display:"flex"
     }}>
      <NavBar/>
        <LeftBar/>
      <div style={{flex:6}}>
        <Outlet/>
        </div>
     </div>
    </div>
    </QueryClientProvider>
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
      element:
      <ProtectedRoute>
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
          path: "/checkauthenticity",
          element: <CheckAuthenticity/>,
        },
        {
          path: "/all-users",
          element: <AllUsers/>,
        },
        {
          path: "/AddProduct",
          element: <AddProduct/>,
        },
        {
          path: "/update-post/:id",
          element: <UpdatePost/>,
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