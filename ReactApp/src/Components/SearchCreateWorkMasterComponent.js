import React, { useEffect, useState } from 'react'
import UserService from '../Services/UserService'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {FcViewDetails} from 'react-icons/fc'
import WorkService from '../Services/WorkService'
import { MdNextPlan } from 'react-icons/md'


const SearchCreateWorkMasterComponent = () => {

    const [users, setUsers] = useState([])
    const {name} = useParams()
    const [id, setId] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        SearchUser(name)
    }, [])

    useEffect(() => {
        setId(id)
    })

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

  const createWork = (e) => {
    e.preventDefault()
    navigate(`/create-work/${id}`)
}

  return (
    <div className='container'><br/>
        <h2 className='text-center'>Users</h2>
        <table className='table table-border table-striped'>
            <thead>
                <th></th>
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
                            <td>
                                <input type='radio' value={user.id}  name='id' onBlur={(e) => setId(e.target.value)}>
                                </input>
                            </td>
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
                                <MdNextPlan size='35px' color='green' onClick={(e) => createWork(e)} className='next-icon'/>
                            </td>

                        </tr>
                    )
                }<br/>
            </tbody>
        </table>
        <Link to = "/users" className="btn btn-info" >Users</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = "/work" className="btn btn-info" >Work</Link>
    </div>

  )
}


export default SearchCreateWorkMasterComponent