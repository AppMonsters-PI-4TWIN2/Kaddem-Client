import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import React, { useState } from 'react'
import { FacebookButton, FacebookCount ,TwitterButton } from "react-social";

function ProjectDetails({ProjectName,Creator,ProjectLocation,IsVerified,Description,Image,OnVerify,OnDelete,id}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showModal, setShowModal] = useState(false);
    const [modalAction, setModalAction] = useState(null);
    let url = "https://github.com";
    return (

<>
        <tr  style={{color: 'black'}}>
            {/*  <th style={{color: '#2F4F4F '}}>{id}</th>*/}

            <td style={{textAlign: "center", verticalAlign: "middle"}}>{ProjectName}</td>
            <td style={{textAlign: "center", verticalAlign: "middle"}}>{Creator.userName}</td>
            <td style={{textAlign: "center", verticalAlign: "middle"}}>{ProjectLocation}</td>
            {/* <td>{Description}</td>*/}


            <td>
                 <FacebookButton url={url} appId={251304003958960}>
                 <img  style={{  display: "block",
                        width: "30px",
                        height: "30px",
                        border: "none"
                        }} 
                         src="/images/fb.png"/>
                 </FacebookButton>
                 <TwitterButton url={url} appId={26988017}>
                 <img  style={{ display: "block",
                        width: "30px",
                        height: "30px",
                        border: "none"
                       }} 
                         src="/images/twitter.png"/>
                 </TwitterButton>
            </td>
            {IsVerified === 1 ?
                <td style={{textAlign: "center", verticalAlign: "middle"}}>
                    <Button style={{backgroundColor: 'blue'}} disabled>
                        Verified
                    </Button>
                </td> :
                <td style={{textAlign: "center", verticalAlign: "middle"}}>
                    <Button style={{backgroundColor: '#343a40'}} onClick={() => { setModalAction('verify'); setShowModal(true); }}>
                        Verify
                    </Button>
                </td>
            }
            <td style={{textAlign: "center", verticalAlign: "middle"}}>
                <Button style={{backgroundColor: '#343a40'}} onClick={() => { setModalAction('delete'); setShowModal(true); }}>
                    Delete
                </Button>
            </td>



        </tr>
    <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Confirm {modalAction === 'verify' ? 'Verification' : 'Deletion'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to {modalAction === 'verify' ? 'verify' : 'delete'} this item?</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
            </Button>
            <Button variant="primary" onClick={() => {
                if (modalAction === 'verify') {
                    OnVerify(id);
                    window.location.reload();
                } else if (modalAction === 'delete') {
                    OnDelete(id);
                    window.location.reload();
                }
                setShowModal(false);
            }}>
                OK
            </Button>
        </Modal.Footer>
    </Modal>
</>
    )
}

export default ProjectDetails