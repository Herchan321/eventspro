import { Outlet } from 'react-router-dom'
import Navbar from "../../components/navbar/navbar";
function Layout(){
  return (
     <div className="layout">
      <div className="navbar">
          <Navbar></Navbar>
          
      </div>
      <div className="content">
       <Outlet></Outlet>
      </div>
      
    </div>
  )
}

export default Layout