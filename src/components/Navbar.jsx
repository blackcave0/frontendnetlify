/* import { NavLink } from "react-router-dom"
import { useAuth } from "../store/auth"
function Navbar(){
  const {isLoggedIn} = useAuth();

  return(
    <>
      <header>
        <div className="container navbar-phone">
          <div className="logo-brand">
            <NavLink className='navlinks' to="/">Magician</NavLink>
          </div>
          <nav>
            <ul className=" ul-link">
              <li><NavLink className='navlinks' to='/'>Home</NavLink></li>
              <li><NavLink className='navlinks' to='/about'>About</NavLink></li>
              <li><NavLink className='navlinks' to='/services'>Services</NavLink></li>
              <li><NavLink className='navlinks' to='/contact'>Contact</NavLink></li>
              {
                isLoggedIn ? 
                  <li><NavLink className='navlinks' to='/logout'>LogOut</NavLink></li> 
                : 
                  <>
                    <li><NavLink className='navlinks' to='/register'>Register</NavLink></li>
                    <li><NavLink className='navlinks' to='/login'>Login</NavLink></li>
                  </>
              }
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
export default Navbar */


import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useState } from "react";
import "./Navbar.css"; // Import CSS file for styling

function Navbar() {
  const { isLoggedIn } = useAuth();
  const [showNav, setShowNav] = useState(false);

  // Function to toggle the visibility of the navigation
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header>
      <div className="container navbar-phone">
        <div className="logo-brand">
          <NavLink className="navlinks" to="/">
            Magician
          </NavLink>
        </div>
        <div className="hamburger-menu" onClick={toggleNav}>
          &#9776;
        </div>
        <nav className={showNav ? "show-nav" : ""}>
          <ul className="ul-link">
            <li>
              <NavLink className="navlinks" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navlinks" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="navlinks" to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className="navlinks" to="/contact">
                Contact
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink className="navlinks" to="/logout">
                  LogOut
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink className="navlinks" to="/register">
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navlinks" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
