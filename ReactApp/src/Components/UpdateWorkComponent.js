import React, { useEffect, useState } from 'react'
import WorkService from '../Services/WorkService'
import {useNavigate, Link, useParams} from 'react-router-dom'
import UserService from '../Services/UserService'




const UpdateWorkComponent = () => {

    const [idName, setIdName] = useState('')
    const [dateCreated, setDateCreated] = useState('')
    const [file, setFile] = useState('')
    const [user, setUser] = useState('')
    const [dateFileUploaded, setDateFileUploaded] = useState('')
    const [casestep, setCasestep] = useState('')
    const [userId, setUserId] = useState('')
    const [work, setWork] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect((id) => {
      getWorkById(id)
    }, [])

    useEffect(() => {
        setUserId(work.userId)
    }, [work.userId])

    const getWorkById = () => {
        WorkService.getWorkById(id).then((response) => {
          setWork(response.data)
          console.log(response.data)
        }).catch(error => {
          console.log(error)
        })
      }

    const updateWork = (e) => {
        e.preventDefault()

        const work = {idName, dateCreated, file, dateFileUploaded, casestep, userId}
        WorkService.updateWork(id, work).then((response) => {
            navigate("/work")
        }).catch(error => {
             console.log(error)
        })
    }

    useEffect(() => {
      WorkService.getWorkById(id).then(response => {
        setFile = response.data.file
        setDateFileUploaded = response.data.dateFileUploaded
        setIdName = response.data.idName
        setDateCreated = response.data.dateCreated
        setCasestep = response.data.casestep
        //setUserId = response.data.userId
      }).catch(error => {
        console.log(error)
      })
    }, [])

  return (
    <div>
        <br/><br/>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2>Create Work</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>ID Name</label>
                                <input
                                    type="text"
                                    placeholder='Identifier Name'
                                    name="idName"
                                    className='form-control'
                                    value={work.idName}
                                    autoFocus
                                    onBlur={(e) => setIdName(e.target.value)}
                                >
                                </input>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>Date Created</label>
                                <input
                                    type="date"
                                    placeholder='Date Created'
                                    name="dateCreated"
                                    className='form-control'
                                    value={work.dateCreated}
                                    onBlur={(e) => setDateCreated(e.target.value)}
                                >
                                </input>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>File</label>
                                <input
                                    type="file"
                                    placeholder="File"
                                    name="file"
                                    className='form-control'
                                    defaultValue={work.file}
                                    onBlur={(e) => setFile(e.target.value)}
                                
                                >
                                </input>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>Date File Uploaded</label>
                                <input
                                    type="date"
                                    placeholder='Date File Uploaded'
                                    name="dateFileUploaded"
                                    className='form-control'
                                    onBlur={(e) => setDateFileUploaded(e.target.value)}
                                >
                                </input>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>Casestep</label>
                                <select
                                    type="text"
                                    placeholder='Casestep'
                                    name="casestep"
                                    className='form-control'
                                    onBlur={(e) => setCasestep(e.target.value)}
                                >
                                    <option value="Case Prepared">Case Created</option>
                                    <option value="Case In Progress">Case In Progress</option>
                                    <option value="Case Completed">Case Completed</option>
                                </select>
                            </div><br/>
                            <button className='btn btn-info' onClick={(e) => updateWork(e)}>Submit</button>&nbsp; &nbsp;
                            <Link to = '/work' className = "btn btn-danger">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateWorkComponent