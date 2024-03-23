import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';
import {toast} from 'react-toastify'
import { BASE_URL } from '../store/helper';
const AdminUpdate = () => {
  const params = useParams();
  const { authorizationToken } = useAuth();
  const [data, setData] = useState({
    username: '',
    email: '',
    phone: '',
  });

  async function getSingleUserData() {
    // console.log(id);
    try {
      const response = await fetch(`http://localhost:8000/api/admin/users/${params.id}`, {
        method: 'GET',
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      console.log('user after the update :', data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSingleUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function InputChange(e) {
    // setData(data)
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  
  // :: Finally Update the data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/admin/users/update/${params.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type" : "application/json",
          Authorization: authorizationToken,
        },
        body :JSON.stringify(data),
      });
      if(response.ok) {
        toast.success('Updated Successfully');
      } else {
        toast.error('Faild to Update')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading mb-4">Update User data</h1>
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
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    required
                    value={data.username}
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
                    value={data.email}
                    autoComplete="off"
                    onChange={InputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">mobile</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="enter your phone"
                    required
                    value={data.phone}
                    autoComplete="off"
                    onChange={InputChange}
                  />
                </div>
                <div className="btn-section">
                  <button type="submit">update</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
export default AdminUpdate;
