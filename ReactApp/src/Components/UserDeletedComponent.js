import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import WorkService from '../Services/WorkService'
import UserService from '../Services/UserService'
import Swal from "sweetalert2";

const UserDeletedComponent = () => {

  const [work, setWork] = useState('')
  const [users, setUsers] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    WorkService.getWorkByUserId(id).then(response => {
      setWork(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const deleteAllWork = () => {
    WorkService.deleteWorkByUserId(id).then(response => {
    }).catch(error => {
      console.log(error)
    })
  }

  const title = () => {
    if (work.length != 0) {
      return <div>
        <h2 className='text-center'>
          Unable To Delete the User!!!
        </h2>
        <p className='text-center'>
          Work Exist For This User
        </p>
        <center>
        <div className>
          <h5>Delete All Works of This User?</h5>
          <div className="dialog-buttons">
            <Link className="btn btn-info" onClick={() => deleteAllWork()} to={`/users`}>Yes</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="btn btn-danger" to={`/users`}>No</Link>
          </div>
        </div>
        </center>
      </div>
    }
  }
  return (
    <div className='container'>
      {
        title()
      }
    </div>
  )
}

export default UserDeletedComponent