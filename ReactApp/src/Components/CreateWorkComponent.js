import React, { useEffect, useState } from 'react'
import WorkService from '../Services/WorkService'
import {useNavigate, Link, useParams} from 'react-router-dom'
import UserService from '../Services/UserService'




const CreateWorkComponent = () => {

    const [idName, setIdName] = useState('')
    const [dateCreated, setDateCreated] = useState('')
    const [file, setFile] = useState('')
    const [fileName, setFileName] = useState('')
    const [user, setUser] = useState('')
    const [userId, setUserId] = useState('')
    const [dateFileUploaded, setDateFileUploaded] = useState('')
    const [casestep, setCasestep] = useState('')
    const [work, setWork] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect((id) => {
      getUserById(id)
    }, [])

    useEffect(() => {
        setUserId(id)
    }, [])

    const getUserById = () => {
        UserService.getUserById(id).then((response) => {
          setUser(response.data)
          console.log(response.data)
        }).catch(error => {
          console.log(error)
        })
      }

    const saveWork = (e) => {
        e.preventDefault()

        const work = {idName, dateCreated, file, fileName, dateFileUploaded, casestep, userId}
        WorkService.createWork(work).then((response) => {
            navigate("/work")
        }).catch(error => {
             console.log(error)
        })
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.onload = () => {
            const arrayBuffer = fileReader.result;
            const bytes = new Uint8Array(arrayBuffer);
            const binaryString = bytes.reduce((data, byte) => data + String.fromCharCode(byte), '');
            const base64 = btoa(binaryString);
            resolve(base64);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
          fileReader.readAsArrayBuffer(file);
        });
      };
      
      const handleFileRead = async (e) => {
        const file = e.target.files[0];
        const fileName = e.target.value;
        const base64 = await convertBase64(file);
      
        // Set the drivingLicense state to the base64 string
        console.log("Here is the base64 string: " + base64);
        console.log("fileName: " + fileName.substring(12));
        setFileName(fileName.substring(12));
        setFile(base64);
      };

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
                                    value={user.fname + " " + user.lname}
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
                                    onBlur={(e) => setDateCreated(e.target.value)}
                                >
                                </input>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>File</label>
                                <input
                                    type="file"
                                    placeholder='File'
                                    name="file"
                                    className='form-control'
                                    onChange={handleFileRead}
                                
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
                            <button className='btn btn-info' onClick={(e) => saveWork(e)}>Submit</button>&nbsp; &nbsp;
                            <Link to = '/work' className = "btn btn-danger">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateWorkComponent