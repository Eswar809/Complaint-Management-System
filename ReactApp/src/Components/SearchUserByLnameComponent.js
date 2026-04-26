import React, { useEffect, useState } from 'react'
import UserService from '../Services/UserService'
import { Link, useParams } from 'react-router-dom'


const SearchUserByLnameComponent = () => {

    const [users, setUsers] = useState([])
    const {lname} = useParams()

    useEffect(() => {
      SearchUserByLname(lname)
    }, [])
    
  const SearchUserByLname = () => {
    UserService.searchUserByLname(lname).then((response) => {
      setUsers(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  } 

  return (
    <div className='container'><br/>
        <h2 className='text-center'>Users Searched By Last Name</h2>
        <table className='table table-border table-striped'>
            <thead>
                <th>User id</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    users.map(
                        user => 
                        <tr key = {user.id}>
                            <td>{user.id}</td>
                            <td>{user.fname}</td>
                            <td>{user.mname}</td>
                            <td>{user.lname}</td>
                            <td>
{/*                               <Link className='btn btn-info' to = {`/edit-user/${user.id}`}>Update</Link>&nbsp;&nbsp; 
                              <button className='btn btn-danger' onClick={() => deleteUser(user.id)}>Delete</button> */}
                              <Link className='btn btn-details' to = {`/more-details/${user.id}`}>More Details</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <Link className='btn btn-add' to = {`/create-work/${user.id}`}>Create Work</Link>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <Link to = "/users" className="btn btn-info" >Users</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = "/add-user" className="btn btn-add" >Add User</Link>
    </div>

  )
}


export default SearchUserByLnameComponent