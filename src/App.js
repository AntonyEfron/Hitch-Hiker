import { useMemo,useEffect,useState} from "react";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home";
import ActionPage from "./pages/ActionPage/Actionpage";
import Login from "./pages/login";
import RegisterPage from "./pages/Register";
import Footer from "./components/Footer/Footer";
import { userContext } from "./static/userContext";


function App() {
  const [user,setUser]=useState(null)
  const value = useMemo(()=>({user,setUser}),[user,setUser])
  useEffect(()=>{
    const dataStr = localStorage.getItem('authInfo')
    if (dataStr) {
      setUser(JSON.parse(dataStr))
    }
  },[]) 
  const Layout =() =>{
    return(
      <div className="app" >
        <userContext.Provider value={value}>
          <Navbar/>
           <Outlet/>
          <Footer/>
        </userContext.Provider>
      </div>
    )
  }
  
const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/action",
        element:<ActionPage/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<RegisterPage/>
      }
    ]
  }
])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}
 
export default App;
