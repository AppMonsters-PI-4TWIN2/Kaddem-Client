import axios from 'axios'
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import React, { useState } from 'react'

function RowDetails({email ,password,role,isBanned,id,OnDelete,OnBan,fetchData}) {
 
 
 
  //modal 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
const [isUserBanned, setIsUserBanned] = useState(isBanned);

  const handleToggleBanned = () => {
    axios.put(`/list/users/ban/${id}`, { isBanned: !isUserBanned })
      .then(() => setIsUserBanned(!isUserBanned))
      .catch(err => console.log(err));
  }

  return (
   
    <tr  style={{color: 'black'}}>
    <th >{id}</th>
    <td>{email}</td>
    <td>{password}</td>
    <td>{role}</td>
    <td >
        <button style={{ fontSize: '12px !important' }}  className={`btn btn-${isUserBanned ? 'danger' : 'success'}`} onClick={handleToggleBanned}>
          {isUserBanned ? 'Banned' : 'Not Banned'}
        </button>
</td>
  
  <td >
    <Button className="badge bg-yellow " onClick={handleShow}>
    <i className="fas fa-trash-alt"></i> 
    </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title > Delete User </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this user ? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { handleClose(); OnDelete(id) ;fetchData() }}>
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