import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import './App.css'
import './index.css'
import './MainStyle.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import RegisterPage from './pages/Register'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import ErrorPage from './pages/ErrorPage'
import LogOut from './pages/LogOut'
import AdminUsers from './pages/AdminUsers'
import AdminContacts from './pages/AdminContacts'
import AdminLayout from './components/layouts/AdminLayout'
import AdminUpdate from './pages/AdminUpdate'
function App (){
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact'  element={<div className='cont'><Contact/></div>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/logout' element={<LogOut/>}/>
          <Route path='*' element={<ErrorPage/>}/>

          {/* Nasted Route for Admin Page */}
          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='contacts' element={<AdminContacts/>}/>
            <Route path='users' element={<AdminUsers/>}/>
            <Route path='users/:id/edit' element={<AdminUpdate/>} />
          </Route>
        </Routes>
        {/* -- import footer here -- */}
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  )
}
export default App
// this is test 
// last change 