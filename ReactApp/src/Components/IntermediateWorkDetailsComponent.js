import React, { useEffect, useState } from 'react'
import WorkService from '../Services/WorkService'
import { Link, useParams } from 'react-router-dom'


const IntermediateWorkDetailsComponent = () => {

    const [work, setWork] = useState([])
    const {id} = useParams()

    useEffect(() => {
        WorkService.getWorkById(id).then(response => {
            setWork(response.data)
        })
    }, [])
    

  return (
    <div className='container'><br/>
        <h2 className='text-center'>List of Work</h2>
        <table className='table table-border table-striped'>
            <thead>
                <th>Work id</th>
                <th>Id Name</th>
                <th>Date Created</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                        <tr>
                            <td>{work.id}</td>
                            <td>{work.idName}</td>
                            <td>{work.dateCreated}</td>
                            <td>
                              <Link className='btn btn-info' to = {`/details/${work.id}`}>Details</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <Link className='btn btn-info' to = {`/documents/${work.id}`}>Documents</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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


export default IntermediateWorkDetailsComponent