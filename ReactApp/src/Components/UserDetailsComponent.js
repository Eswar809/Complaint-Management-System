import React, { useEffect, useState } from 'react'
import UserService from '../Services/UserService'
import { Link, useParams } from 'react-router-dom'
import WorkService from '../Services/WorkService'


const UserDetailsComponent = () => {

    const [user, setUser] = useState([])
    const [users, setUsers] = useState([])
    const [work, setWork] = useState()
    const {id} = useParams()

    useEffect((id) => {
      getUserById(id)
    }, [])

    useEffect(() => {
      WorkService.getWorkByUserId(id).then(response => {
        setWork(response.data)
      })
    }, [])
  
    const getAllUsers = () => {
        UserService.getAllUsers().then((response) => {
          setUsers(response.data)
          console.log(response.data)
        }).catch(error => {
          console.log(error)
        })
      }

  const getUserById = () => {
    UserService.getUserById(id).then((response) => {
      setUser(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  } 

   const deleteUser = (userId) => {
      if(work.length == 0){
        UserService.deleteUser(userId).then(response => {
          getAllUsers()
        }).catch(error => {
          console.log(error)
        })
      }else{

      }
  }

  return (
    <div className='container'>
        <h2 className='text-center'>User Details</h2><br/>
        <table className='table table-border table-striped'>
            <tr>
                <th>User id</th>
                <td>{user.id}</td>
            </tr>
            <tr>
                <th>First Name</th>
                <td>{user.fname}</td>
            </tr>
            <tr>
                <th>Middle Name</th>
                <td>{user.mname}</td>
            </tr>
            <tr>
                <th>Last Name</th>
                <td>{user.lname}</td>
            </tr>
            <tr>
                <th>SSN No</th>
                <td>{user.ssnNo}</td>
            </tr>
            <tr>
                <th>Phone No</th>
                <td>{user.phoneNo}</td>
            </tr>
            <tr>
                <th>Date of Birth</th>
                <td>{user.dob}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{user.email}</td>
            </tr>
            <tr>
                <th>Birth Place</th>
                <td>{user.birthPlace}</td>
            </tr>
            <tr>
                <th>Gender</th>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <th>Date of Death</th>
                <td>{user.dod}</td>
            </tr>
        </table>
        <Link to = '/users' className = "btn btn-info">Users</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = '/work' className = "btn btn-info">Work</Link>
    </div>

  )
}


export default UserDetailsComponent