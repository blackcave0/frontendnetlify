import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify";
import { BASE_URL } from "../store/helper";

function AdminContacts() {
  const [ContactData, setContactData] = useState([]);
  const {authorizationToken} = useAuth();
  async function getContactsData(){
    try {
      const response = await fetch(`${BASE_URL}/api/admin/contacts`, {
        method : "GET",
        headers : {
          Authorization :authorizationToken, 
        },
      });
      const data = await response.json();
      console.log(data);
      // setContactData(data)
      if(response.ok){
        setContactData(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // :: Delete Function 
  const deleteContact = async (id)=>{
    try {
      const response = await fetch(`${BASE_URL}/api/admin/contacts/delete/${id}`, {
        method : 'DELETE',
        headers : {
          Authorization : authorizationToken,
        },
      });

      if(response.ok) {
        toast.success('Deleted Succefully')
        // -- auto call function when data deleted and page auto refreshed;
        getContactsData();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getContactsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <section className="admin-user-section">
        <div className="container">
          <h1>Admin Users Message Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {ContactData.map((value, index) => {
                const {username, email, message, _id} = value;
                return <tr key={index}>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{message}</td>
                  <td>
                    <button onClick={()=> deleteContact(_id)}>Delete</button>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default AdminContacts