import React, { useEffect, useState } from 'react'
import WorkService from '../Services/WorkService'
import { Link, useParams } from 'react-router-dom'
import {FcViewDetails} from 'react-icons/fc'
import Swal from 'sweetalert2'


const SearchWorkByIdNameComponent = () => {


    const [work, setWork] = useState([])
    const {idName} = useParams()

    useEffect(() => {
      SearchWorkByIdName(idName)
    }, [])

  const SearchWorkByIdName = () => {
    WorkService.getWorkByIdName(idName).then((response) => {
      setWork(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  } 

  const getAllWork = () => {
    WorkService.getAllWork().then((response) => {
      setWork(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

  const showAlert = () => {
    Swal.fire({
        title: "Deleted",
        text: "Work Deleted Successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
  }

  const deleteWork = (workId) => {
    WorkService.deleteWork(workId).then(response => {
      getAllWork()
      showAlert()
    }).catch(error => {
      console.log(error)
    })
}

  return (
    <div className='container'><br/>
        <h2 className='text-center'>Work Searched By Id Name</h2>
        <table className='table table-border table-striped'>
            <thead>
                <th>Work id</th>
                <th>Id Name</th>
                <th>Date Created</th>
                <th>Actions</th>
                <th></th>
            </thead>
            <tbody>
                {
                    work.map(
                        work => 
                        <tr key = {work.id}>
                            <td>{work.id}</td>
                            <td>{work.idName}</td>
                            <td>{work.dateCreated}</td>
                            <td>
                              <a href={`/more-work-details/${work.id}`} className='details-icon'>
                                <FcViewDetails size='40px' color='blue'/>
                              </a>
                            </td>
                            <td>
                              <Link className='btn btn-info' to = {`/edit-work/${work.id}`}>Update</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <button className='btn btn-danger' onClick={() => deleteWork(work.id)}>Delete</button>
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


export default SearchWorkByIdNameComponent