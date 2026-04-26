import React, { useEffect, useState } from 'react'
import UserService from '../Services/UserService'
import { Link, useParams } from 'react-router-dom'
import WorkService from '../Services/WorkService'


const IntermediateUserDetailsComponent = () => {

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
    <div className='container'><br/>
        <h2 className='text-center' >List Users</h2>
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
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.fname}</td>
                            <td>{user.mname}</td>
                            <td>{user.lname}</td>
                            <td>
{/*                               <Link className='btn btn-info' to = {`/edit-user/${user.id}`}>Update</Link>&nbsp;&nbsp; 
                              <button className='btn btn-danger' onClick={() => deleteUser(user.id)}>Delete</button> */}
                              <Link className='btn btn-info' to = {`/user-details/${user.id}`}>Details</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <Link className='btn btn-info' to = {`/user-documents/${user.id}`}>Documents</Link>
                            </td>
                        </tr>
                    
                }
            </tbody>
        </table>
        <Link to = "/users" className="btn btn-info" >Users</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = "/work" className="btn btn-info" >Work</Link>
    </div>

  )
}


export default IntermediateUserDetailsComponent