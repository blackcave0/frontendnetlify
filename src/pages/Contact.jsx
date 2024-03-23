import { useState } from 'react';
import { useAuth } from '../store/auth';
import { BASE_URL } from '../store/helper';
function Contact() {
  // -- this is empty object ....
  const defaultContactFormData = {
    username : '',
    email : '',
    message: '',
  }
  
  const [user, setUser] = useState(defaultContactFormData);

  // -- getting data from auth.jsx 
  const [userData, setAuthUser] = useState(true);
  const {authUser} = useAuth();
  if(userData && authUser){
    setUser({
      username: authUser.username,
      email:authUser.email,
      // phone: authUser.phone,
      message : '',
    });

    setAuthUser(false);
  }

  // -- Initiliazing Input Function
  function InputChange (event){
    const {name, value} = event.target
    // setUser({...user, [name]:value});
    setUser((preValue)=> ({...preValue, [name] : value}))
  }
  
  // -- Handling form
  const FormSubmit = async event =>{
    event.preventDefault();
    alert('form submit')
    // console.log(user);
    try {
      const response = await fetch(`${BASE_URL}/api/form/contact`, {
        method : "POST",
        headers : {
          'Content-Type' : 'application/json',
        }, body : JSON.stringify(user),
      });

      if(response.ok){
        setUser(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        alert('Message send succefully')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {/* <h1>Contact Page</h1> */}
      <section className='section-contact'>
        <div className="contact-content container">
          <h1 className="main-heading mb-4">contact form</h1>
        </div>

        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img
                src="https://blush.design/api/download?shareUri=U2Z0DvlPOGsZN1np&c=Skin_0%7E7362a5-0.5%7Eb3b2e6-0.6%7E7362a5&w=800&h=800&fm=png"
                alt="contact.png"
                className="contact-image"
                // width={500}
              />
            </div>

            {/* contact form here  */}
            <section className="section-form">
              <form onSubmit={FormSubmit}>
                <div className="form-group">
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    required
                    value={user.username}
                    autoComplete="off"
                    onChange={InputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="enter your email"
                    required
                    value={user.email}
                    autoComplete="off"
                    onChange={InputChange}
                  />
                </div>

                {/* <div className="form-group">
                  <label htmlFor="phone">phone</label>
                  <input
                    type="tel"
                    maxLength={10}
                    pattern={`[0-9]{3}-[0-9]{2}[0-9]{3}`}
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    required
                    value={user.phone}
                    autoComplete="off"
                    onChange={InputChange}
                  />
                </div> */}

                <div className="form-group text-area-box">
                  <label htmlFor="message">message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    placeholder=" Write Your Message..."
                    required
                    value={user.message}
                    autoComplete='off'
                    onChange={InputChange}
                  ></textarea>
                </div>

                <div className='btn-section'>
                  <button type="submit">submit</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
