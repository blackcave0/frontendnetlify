import { NavLink, Outlet } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { useAuth } from "../../store/auth";
import {Navigate} from 'react-router-dom'

const AdminLayout =()=>{
  // -- securing the admin route
  const {authUser, isLoading} = useAuth();
  // console.log('admin layout', authUser);

  if(isLoading) {
    return <h1>Loading .....</h1>
  }

  if(!authUser.isAdmin) {
    return <Navigate to='/' />
  }
  return (
    <>
      <header>
        <div className="admin container">
          <nav>
            <ul>
              <li><NavLink className='admin_navlinks' to='/admin/users'><FaUser />users</NavLink></li>
              <li><NavLink className='admin_navlinks' to='/admin/contacts'>contacts</NavLink></li>
              <li><NavLink className='admin_navlinks' to='/services'>services</NavLink></li>
              <li><NavLink className='admin_navlinks' to='/'>Home</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet/>
    </>
  )
}

export default AdminLayout