import React, { useEffect, useState } from 'react'
import UserService from '../Services/UserService'
import { Link, useNavigate } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import {FcViewDetails} from 'react-icons/fc'
import {MdNextPlan} from 'react-icons/md'


const CreateWorkMasterComponent = () => {

    const [users, setUsers] = useState([])
    const [name, setName] = useState([])
    const [id, setId] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      getAllUsers()
    }, [])

    useEffect(() => {
        setId(id)
    })
    
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
          </input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div>
          <a href={`/search/create-work/${name}`} className='search-icon2'>
            <FaSearch size='20px' color='blue'/>
          </a>
        </div>
        </form><br/>
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
        <Link to = "/work" className="btn btn-info" >Work</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = "/users" className="btn btn-info" >Users</Link>
    </div>

  )
}


export default CreateWorkMasterComponent