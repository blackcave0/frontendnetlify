import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../store/auth';
import welcome from '../assets/Welcome-bro.png';
import {toast} from 'react-toastify'
import { BASE_URL } from '../store/helper';

function LoginPage() {
  const [user, setUser] = useState({ email: '', password: '' });
  const naviGate = useNavigate();

  // --- Retriving the storeTokenLocalStoage from [auth.jsx]
  const {storeTokenInLocalStorage} = useAuth();

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(user);
    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method : "POST", 
        headers : {
          "Content-Type" : "application/json",
        }, body : JSON.stringify(user),
        
      });

      const data = await response.json();
      
      // console.log(response);
      if(response.ok){
        
        toast.success('Login Successfull')
        // const data = await response.json();

        //-- Storing the Token In LocalHost
        // localStorage.setItem('token', data.token);
        storeTokenInLocalStorage(data.token);


        setUser({email : '', password : ''});
        naviGate(`/`)
      } else {
        toast.error(data.extraDetails ? data.extraDetails : data.message)
      }
    } catch (error) {
      console.log('Login : ',error);
    }
  };
  
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image login-image">
                <img src={welcome} alt="login"  />
              </div>

              <div className="registration-form">
                <h1 className="main-heading mb-4">Login form welcome</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="email"
                      required
                      value={user.email}
                      autoComplete="off"
                      onChange={handleInputs}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                      required
                      value={user.password}
                      autoComplete="off"
                      onChange={handleInputs}
                    />
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">
                    logIn
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
export default LoginPage;
