import React, { useEffect, useState } from 'react'
import UserService from '../Services/UserService'
import { Link, useParams } from 'react-router-dom'
import {FcViewDetails} from 'react-icons/fc'
import WorkService from '../Services/WorkService'
import Swal from "sweetalert2";


const SearchUserComponent = () => {

    const [users, setUsers] = useState([])
    const {name} = useParams()
    const [work, setWork] = useState([])

    useEffect(() => {
      SearchUser(name)
    }, [])
    
  const SearchUser = () => {
    UserService.searchUser(name).then((response) => {
      setUsers(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  } 

  const getAllUsers = () => {
    UserService.getAllUsers().then((response) => {
      setUsers(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

  const showAlert = () => {
    Swal.fire({
        title: "Deleted",
        text: "User Deleted Successfully!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(function() {
        window.location = '/users'
      });
  }

  const deleteUser = (userId) => {
    UserService.deleteUser(userId).then(response => {
      getAllUsers()
      showAlert()
    }).catch(error => {
      console.log(error)
    })
}

  return (
    <div className='container'><br/>
        <h2 className='text-center'>Users</h2>
        <table className='table table-border table-striped'>
            <thead>
                <th>User id</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Actions</th>
                <th></th>
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
                              <a href={`/more-details/${user.id}`} className='details-icon'>
                                <FcViewDetails size='40px' color='blue'/>
                              </a>
                              </td>
                              <td>
                                <Link className='btn btn-info' to = {`/edit-user/${user.id}`}>Update</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                <Link className='btn btn-danger' onClick={() => deleteUser(user.id)} to = {`/user-deleted/${user.id}`} >Delete</Link>
                              </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <Link to = "/users" className="btn btn-info" >Users</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = "/work" className="btn btn-info" >Work</Link>
    </div>

  )
}


export default SearchUserComponent