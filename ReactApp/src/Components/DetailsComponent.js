import React, { useEffect, useState } from 'react'
import WorkService from '../Services/WorkService'
import { Link, useParams } from 'react-router-dom'


const DetailsComponent = () => {

    const [work, setWork] = useState([])
    const {id} = useParams()

    useEffect(() => {
        WorkService.getWorkById(id).then(response => {
            setWork(response.data)
        })
    }, [])
    

  return (
    <div className='container'><br/>
        <h2 className='text-center'>Details</h2>
        <table className='table table-border table-striped'>
            <tr>
                <th>Work id</th>
                <td>{work.id}</td>
            </tr>
            <tr>
                <th>Identifier Name</th>
                <td>{work.idName}</td>
            </tr>
            <tr>
                <th>Casestep Name</th>
                <td>{work.casestep}</td>
            </tr>
            <tr>
                <th>Date Created</th>
                <td>{work.dateCreated}</td>
            </tr>
        </table>
        <Link to = '/users' className = "btn btn-info">Users</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = '/work' className = "btn btn-info">Work</Link>
    </div>

  )
}


export default DetailsComponent