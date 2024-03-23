import { NavLink } from "react-router-dom"

function ErrorPage(){
  return(
    <>
      <section id="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Sorry! page not found</h4>
          <p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Opps! It seem like the page you're trying to access doesn't exist.
            {/*  eslint-disable-next-line react/no-unescaped-entities */}
            If you belive there's an isse feel free to report it , and we'll look into it.
          </p>

          <div className="btns">
            <NavLink className='btn-home btns-error' to='/'>return home</NavLink>
            <NavLink className='btn-contact btns-error' to='/contact'>report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  )
}
export default ErrorPage