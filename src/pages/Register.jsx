import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import welcome from '../assets/Welcome-bro.png';
import { toast } from 'react-toastify';
import { BASE_URL } from '../store/helper';
function RegisterPage() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const naviGate = useNavigate();

  // --- Retriving the storeTokenLocatStorage from [auth.jsx]
  const { storeTokenInLocalStorage } = useAuth();

  const handleInputs = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    // --- Initialize value in user
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert(user)
    // console.log(user);
    try {
      const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log('res form server : ', data.extraDetails);
      // console.log(response);

      if (response.ok) {
        // const data = await response.json();
        // console.log(data);

        // -- Storing the token in LocaHost
        storeTokenInLocalStorage(data.token);
        // localStorage.setItem('token', data)

        setUser({ username: '', email: '', phone: '', password: '' });
        toast.success('Login Succussful');
        naviGate('/');
      } else {
        toast.error(data.extraDetails ? data.extraDetails : data.message);
      }
    } catch (error) {
      console.log('register : ', error);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              {/* //>> Image */}
              <div className="registration-image">
                {/* place image here */}
                <img src={welcome} alt="welcome" />
              </div>

              {/* form here */}
              <div className="registration-form">
                <h1 className="main-heading mb-4">registration form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="username"
                      required
                      value={user.username}
                      autoComplete="off"
                      onChange={handleInputs}
                    />
                  </div>
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
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="phone"
                      required
                      value={user.phone}
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
                    register now
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
export default RegisterPage;
