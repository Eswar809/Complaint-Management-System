import React, { useEffect, useState } from 'react'
import UserService from '../Services/UserService'
import { Link, useParams, useNavigate } from 'react-router-dom'
import WorkService from '../Services/WorkService'
import {IoIosAddCircle} from 'react-icons/io'
import {FaSearch} from 'react-icons/fa'
import {FcViewDetails} from 'react-icons/fc'
import Swal from "sweetalert2";


const ListUserComponent = () => {

    const [users, setUsers] = useState([])
    const [name, setName] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      getAllUsers()
    }, [])

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
        <h2 className='text-center' >List Users</h2>
        <form>
          <div>
          <input 
            type="text" 
            name="name" 
            placeholder="search"
            onChange={(e) => setName(e.target.value)}
            className='search-bar'
          >
          </input>
          </div>
          <div>
          <a href={`/search-user/${name}`} className='search-icon'>
            <FaSearch size='20px' color='blue'/>
          </a>
          </div>
          {/* <Link to={`/search-user/fname/${name}`} className='btn btn-search'>Search By First Name</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={`/search-user/lname/${name}`} className='btn btn-search'>Search By Last Name</Link> */}
        </form><br/>
        <a href='/add-user'>
          <IoIosAddCircle size='60px' color='green' className='add-icon'/>
        </a>
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
                              {/* <Link className='btn btn-details' to = {`/more-details/${user.id}`}>More Details</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                              <Link className='btn btn-info' to = {`/edit-user/${user.id}`}>Update</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                              <Link className='btn btn-danger' onClick={() => deleteUser(user.id)}  to = {`/user-deleted/${user.id}` ? `/user-deleted/${user.id}`: ``} >Delete</Link>
                            </td>
                            <input type='hidden' value={user.id} name='id'></input>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <Link to = "/work" className="btn btn-info" >Work</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <Link to = "/add-user" className="btn btn-add" >Add User</Link> */}
    </div>

  )
}


export default ListUserComponent