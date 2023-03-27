import axios from 'axios'
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import React, { useState } from 'react'

function RowDetails({email ,password,role,created,status,isBanned,id,OnDelete,OnBan,fetchData}) {
 
 
 
  //modal 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
const [isUserBanned, setIsUserBanned] = useState(isBanned);
  var user = JSON.parse( localStorage.getItem('user') );
  const handleToggleBanned = () => {
    axios.put(`/list/users/ban/${id}`, { isBanned: !isUserBanned }, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then(() => setIsUserBanned(!isUserBanned))
      .catch(err => console.log(err));
  }

  return (
   
    <tr  style={{color: 'black'}}>
    <th style={{color: '#2F4F4F '}}>{id}</th>
    <td>{email}</td>
    <td>{password}</td>
    <td>{role}</td>
    <td>{status}</td>
    <td>{created}</td>
    <td >
        <button style={{ fontSize: '12px !important' }}  className={`btn btn-${isUserBanned ? 'danger' : 'success'}`} onClick={handleToggleBanned}>
          {isUserBanned ? 'Banned' : 'Not Banned'}
        </button>
</td>
  
  <td >
    <Button  style={{backgroundColor: '#2F4F4F '}}  className="badge bg-yellow " onClick={handleShow}>
    <i className="fas fa-trash-alt"></i> 
    </Button>
    <Modal  show={show} onHide={handleClose}>
        <Modal.Header  style={{backgroundColor: '#2F4F4F'}}  closeButton>
          <Modal.Title > Delete User </Modal.Title>
        </Modal.Header>
        <Modal.Body  >Are you sure to delete this user ? </Modal.Body>
        <Modal.Footer>
          <Button  style={{backgroundColor: '#2F4F4F '}}   onClick={handleClose}>
            Close
          </Button>
          <Button   style={{backgroundColor: '#2F4F4F '}}   onClick={() => { handleClose(); OnDelete(id) ;fetchData() }}>
            Delete

          </Button>
        </Modal.Footer>
      </Modal>

    </td>


  </tr>
 

  )
}

export default RowDetails

  
//      {/* {isBanned !== undefined ? (
//   <td>{isBanned.toString()}</td>
// ) : (
//   <td>N/A</td>
// )}
//      */}

  // {/* <td >

  // <input type="checkbox" checked data-toggle="toggle"
   
  // data-on="Ready" data-off="Not Ready" data-onstyle="success" data-offstyle="danger"/>
  //   <span className="badge " onClick={()=> OnBan(id) }>
  //   <i className="fas fa-trash-alt"></i> 
  //   </span>
  // </td> */}