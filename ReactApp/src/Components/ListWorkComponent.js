import React, { useEffect, useState } from 'react'
import WorkService from '../Services/WorkService'
import { Link } from 'react-router-dom'
import {IoIosAddCircle} from 'react-icons/io'
import {FaSearch, FaDownload} from 'react-icons/fa'
import {FcViewDetails} from 'react-icons/fc'
import Swal from "sweetalert2";


const ListWorkComponent = () => {

    const [work, setWork] = useState([])
    const [idName, setIdName] = useState([])

    useEffect(() => {
      getAllWork()
    }, [])
    
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

  const exportToCSV = () => {
    const headers = ['Work id', 'Id Name', 'Date Created'];
    const csvRows = [];
    csvRows.push(headers.join(','));
    
    work.forEach(w => {
      csvRows.push([w.id, w.idName, w.dateCreated].join(','));
    });
    
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'work_list.csv';
    link.click();
  };

  return (
    <div className='container'><br/>
        <h2 className='text-center'>List of Work</h2>
        <form>
          <div>
          <input 
            type="text" 
            name="idName" 
            placeholder="search"
            onChange={(e) => setIdName(e.target.value)}
            className='search-bar'
          >
          </input>
          </div>
          <div>
          <a href={`/search-work/idName/${idName}`} className='search-icon'>
            <FaSearch size='20px' color='blue'/>
          </a>
          </div>
          {/* <Link to={`/search-work/idName/${idName}`} className='btn btn-search'>Search By Id Name</Link> */}
        </form><br/>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href='/create-work'>
            <IoIosAddCircle size='60px' color='green' className='add-icon'/>
          </a>
          <button className='btn btn-success' onClick={exportToCSV}>
            <FaDownload /> Export to CSV
          </button>
        </div>
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
        <Link to = "/users" className="btn btn-info" >Users</Link>
    </div>

  )
}


export default ListWorkComponent