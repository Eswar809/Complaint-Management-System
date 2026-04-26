import React, { useEffect, useState } from 'react'
import WorkService from '../Services/WorkService'
import { Link, useParams } from 'react-router-dom'
import { TiDownload } from 'react-icons/ti'



const DocumentsComponent = () => {

    const [work, setWork] = useState([])
    const {id} = useParams()

    useEffect(() => {
        WorkService.getWorkById(id).then(response => {
            setWork(response.data)
        })
    }, [])
    
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
        const base64String = work.file;
        const fileName = work.fileName;
        const fileType = "text/plain"; // The file type
    
        downloadFile(base64String, fileName, fileType);
    
      }

    

  return (
    <div className='container'><br/>
        <h2 className='text-center'>Documents</h2>
        <table className='table table-border table-striped'>
            <tr>
                <th>File Name</th>
                <td>{work.fileName}</td>
                <td>
                    <TiDownload size='30px' color='#007bff' onClick={handleDownload} className='download-icon'/>
                </td>
            </tr>
            <tr>
                <th>Upload Date</th>
                <td>{work.dateFileUploaded}</td>
            </tr>
        </table>
        <Link to = '/users' className = "btn btn-info">Users</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to = '/work' className = "btn btn-info">Work</Link>
    </div>

  )
}


export default DocumentsComponent