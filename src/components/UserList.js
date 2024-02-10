import React,{useState, useEffect} from "react";
import axios from "axios";

const UserList = () => {

    const [users, setUsers] = useState([]);

   const getUsers = ()=>{
          axios.get("https://reqres.in/api/users")
          .then(
            (response)=> setUsers(response.data.data)
          )
          .catch(err => console.log(err))
    }



    return(
        <div>
             <span>Blue Whales</span>
             <button onClick={getUsers} className="btn"> Get User List</button>
             <table>
                   <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Avatar</th>
                        </tr>
                   </thead>
                   <tbody>
                       {
                           users.length >0 ? (
                                users.map((user)=>(
                                    <tr key={user.id}>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td> <img src={user.avatar} alt={user.first_name+ " "+ user.last_name} /></td>
                                    </tr>
                                ))
                           ) : (<tr> 
                               <td> No data found to display. </td>
                            </tr>
                            )
                       }
                   </tbody>
             </table>
        </div>
    )
}

export default UserList;