import React, { useEffect, useState } from 'react'
import UserService from '../Services/UserService'
import {useNavigate, Link, useParams} from 'react-router-dom'
import Swal from "sweetalert2";





const AddUserComponent = () => {

    const [fname, setFname] = useState('')
    const [mname, setMname] = useState('')
    const [lname, setLname] = useState('')
    const [ssnNo, setSsnNo] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [birthPlace, setBirthPlace] = useState('')
    const [drivingLicense, setDrivingLicense] = useState('')
    const [dlName, setDlName] = useState('')
    const [gender, setGender] = useState('')
    const [dod, setDod] = useState('')
    const [user, setUser] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()


    const getUserById = () => {
        UserService.getUserById(id).then(response => {
            setUser(response.data)
        })
    }

    const saveOrUpdateUser = (e) => {
        e.preventDefault()
    
        const user = {fname, mname, lname, ssnNo, phoneNo, dob, email, birthPlace, drivingLicense, dlName, gender, dod}

        if(id){
                UserService.updateUser(id, user).then(response =>{
                navigate("/users")
            }).catch(error => {
                console.log(error)
            })

        }else{
            console.log("function running")
            UserService.createUser(user).then((response) => {
            console.log(response.data)
            navigate("/users")
        }).catch(error => {
             console.log(error)
        })

        }
    
        
    }

    useEffect(() => {
        UserService.getUserById(id).then((response) => {
            setFname = response.data.fname
            setMname = response.data.mname
            setLname = response.data.lname
            setSsnNo = response.data.ssnNo
            setPhoneNo = response.data.phoneNo
            setDob = response.data.dob
            setBirthPlace = response.data.birthPlace
            setEmail = response.data.email
            setDrivingLicense = response.data.drivingLicense
            setDlName = response.data.dlName
            setGender = response.data.gender
            setDod = response.data.dod
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    
    const title = () => {
        if(id){
            {
                getUserById()
            }
            return <h2 className='text-center'>Update User</h2>
        }else{
            return <h2 className='text-center'>Add User</h2>
        }
    }

    const showSsnAlert = () => {
        Swal.fire({
            title: "Invalid Input",
            text: "Please Enter 9 digit SSN No!",
            icon: "warning",
            confirmButtonText: "OK",
          });
      }

    const handleSsnNoChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length == 9 && /^\d*$/.test(inputValue)) {
          setSsnNo(inputValue);
        }
        else{
            showSsnAlert()
        }
      };

    const showPhoneAlert = () => {
        Swal.fire({
            title: "Invalid Input",
            text: "Please Enter 10 digit Phone No!",
            icon: "warning",
            confirmButtonText: "OK",
          });
      }

    const handlePhoneNo = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length == 10 && /^\d*$/.test(inputValue)) {
          setPhoneNo(inputValue);
        }
        else{
            showPhoneAlert()
        }
      };

    const showEmailAlert = () => {
        Swal.fire({
            title: "Invalid Input",
            text: "Please Enter Valid Email Id!",
            icon: "warning",
            confirmButtonText: "OK",
          });
      }

    const handleEmail = (e) => {
        const inputValue = e.target.value;
        if (/^[\w.-]+@[\w.-]+\.\w+$/.test(inputValue)) {
          setEmail(inputValue);
        }
        else{
            showEmailAlert()
        }
      };
      
      

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
        setDlName(fileName.substring(12));
        setDrivingLicense(base64);
      };

  return (
    <div>
        <br/><br/>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        title()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>First Name</label>
                                <input
                                    type="text"
                                    placeholder='Enter First Name'
                                    name="fname"
                                    className='form-control'
                                    defaultValue={user.fname}
                                    autoFocus
                                    onBlur={(e) => setFname(e.target.value)}
                                    required
                                >
                                </input>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>Middle Name</label>
                                <input
                                    type="text"
                                    placeholder='Middle Name'
                                    name="mname"
                                    className='form-control'
                                    defaultValue={user.mname}
                                    onBlur={(e) => setMname(e.target.value)}
                                >
                                </input>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>Last Name</label>
                                <input
                                    type="text"
                                    placeholder='Last Name'
                                    name="lname"
                                    className='form-control'
                                    defaultValue={user.lname}
                                    onBlur={(e) => setLname(e.target.value)}
                                
                                >
                                </input>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>SSN No</label>
                                <input
                                    type="text"
                                    placeholder='SSN No'
                                    name="ssnNo"
                                    pattern='[0-9]{9}'
                                    className='form-control'
                                    defaultValue={user.ssnNo}
                                    required
                                    onBlur={handleSsnNoChange}
                                
                                >
                                </input>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>Phone No</label>
                                <input
                                    type="text"
                                    placeholder='Phone No'
                                    name="phoneNo"
                                    pattern='[0-9]{10}'
                                    className='form-control'
                                    defaultValue={user.phoneNo}
                                    onBlur={handlePhoneNo}
                                
                                >
                                </input>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>Date of Birth</label>
                                <input
                                    type="date"
                                    placeholder='Date of Birth'
                                    name="dob"
                                    className='form-control'
                                    defaultValue={user.dob}
                                    onBlur={(e) => setDob(e.target.value)}
                        
                                >
                                </input>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>Email</label>
                                <input
                                    type="text"
                                    placeholder='Email'
                                    name="email"
                                    id="email"
                                    className='form-control'
                                    defaultValue={user.email}
                                    onBlur={handleEmail}
                            
                                >
                                </input>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>Birth Place</label>
                                <input
                                    type="text"
                                    placeholder='Birth Place'
                                    name="birthPlace"
                                    className='form-control'
                                    defaultValue={user.birthPlace}
                                    onBlur={(e) => setBirthPlace(e.target.value)}
                            
                                >
                                </input>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>Driving License</label>
                                <input
                                    type="file"
                                    placeholder='Driving License'
                                    name="drivingLicense"
                                    className='form-control'
                                    //defaultValue={user.drivingLicense}
                                    onChange={(e) => handleFileRead(e)}
                                
                                >
                                </input>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>Gender</label>
                                <select
                                    name="gender"
                                    className='form-control'
                                    defaultValue={user.gender}
                                    onBlur={(e) => setGender(e.target.value)}
                                >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                                </select>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>Date of Death</label>
                                <input
                                    type="date"
                                    placeholder='Date of Death'
                                    name="dod"
                                    className='form-control'
                                    defaultValue={user.dod}
                                    onBlur={(e) => setDod(e.target.value)}
                                
                                >
                                </input>
                            </div><br/>
                            <button className='btn btn-info' onClick={(e) => saveOrUpdateUser(e)}>Submit</button>&nbsp; &nbsp;
                            <Link to = '/users' className = "btn btn-danger">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUserComponent