
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import React, { useState } from 'react'

function ProjectDetails({ProjectName,Creator,ProjectLocation,Description,Image,OnDelete,id}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (


        <tr  style={{color: 'black'}}>
            <th style={{color: '#2F4F4F '}}>{id}</th>

            <td>{ProjectName}</td>
            <td>{Creator}</td>
            <td>{ProjectLocation}</td>
            <td>{Description}</td>
            <td>{Image}</td>
            <td>
                <Button   style={{backgroundColor: '#2F4F4F '}}   onClick={() => { handleClose(); OnDelete(id) ; }}>
                    Delete

                </Button>
            </td>



        </tr>


    )
}

export default ProjectDetails


