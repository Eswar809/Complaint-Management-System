import React, { useEffect, useState } from 'react'
import UserService from '../Services/UserService'
import { Link, useParams } from 'react-router-dom'
import WorkService from '../Services/WorkService'
import {TiDownload} from 'react-icons/ti'


const UserDocumentsComponent = () => {

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

  function base64ToFile(base64String, fileName, fileType) {
    const byteCharacters = atob(base64String);
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
  
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
  
    const file = new File(byteArrays, fileName, { type: fileType });
    return file;
  }

  
  function downloadFile(base64String, fileName, fileType) {
    const file = base64ToFile(base64String, fileName, fileType);
    const url = URL.createObjectURL(file);
  
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
  
    // Clean up the URL object after the download
    URL.revokeObjectURL(url);
  }

  const handleDownload = () => {
    const base64String = user.drivingLicense;
    const fileName = user.dlName;
    const fileType = "text/plain"; // The file type

    downloadFile(base64String, fileName, fileType);

  }

  return (
    <div className='container'>
        <h2 className='text-center'>User Documents</h2><br/>
        <table className='table table-border table-striped'>
            <tr>
                <th>User id</th>
                <td>{user.id}</td>
            </tr>
            <tr>
                <th>Driving License</th>
                <td>{user.dlName}</td>
                <td>
                    <TiDownload size='30px' color='#007bff' onClick={handleDownload} className='download-icon'/>
                </td>
            </tr>
        </table>
        <Link to = '/users' className = "btn btn-info">Users</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = '/work' className = "btn btn-info">Work</Link>
    </div>

  )
}


export default UserDocumentsComponent