// import { useState } from "react"
import { useAuth } from "../store/auth"
function About(){
  /* const [user, setUser] = useState({username : ''})
  const [userData, setAuthUser] = useState(true);
  const {authUser} = useAuth();
  if(userData && authUser){
    setUser({
      username : authUser.username
    });
    setAuthUser(false)
  } */
  const {authUser} = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>welcome, {authUser ? authUser.username : `to our site`}</p>
              {/* <p>we are the world best it company</p> */}
              <h1>welcome to thapa technical</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sapiente
                voluptas sit exercitationem repudiandae aliquam cumque libero quisquam, ipsum eum
                illo facere quod, excepturi optio sequi accusamus tempore voluptatem nemo.
              </p>

              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn second-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero image */}
            <div className="hero-image">
              <img src="/src/assets/Welcome-bro.png" alt="hero-image" width={500} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default About