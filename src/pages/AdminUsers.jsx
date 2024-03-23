import { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import {Link} from 'react-router-dom'
import { BASE_URL } from '../store/helper';
function AdminUsers() {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();
  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/admin/users`, {
        method: 'GET',
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      // console.log('users data :', data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  //:: Deleting the user by ID 
  const deleteUser =async (id)=>{
    console.log(id);
    try {
      const response = await fetch(`${BASE_URL}/api/admin/users/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: authorizationToken,
        },
      });
  
      await response.json();
      // console.log('user after the delete :' ,data)
      if(response.ok){
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllUsersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <section className="admin-user-section">
        <div className="container">
          <h1>Admin Users Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((value, index) => {
                const {username, email, phone, _id} = value;
                return <tr key={index}>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>
                    <Link to={`/admin/users/${_id}/edit`} >Edit</Link>
                  </td>
                  <td>
                    <button onClick={()=> deleteUser(_id)}>Delete</button>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AdminUsers;
