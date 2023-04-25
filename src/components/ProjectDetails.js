import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import React, { useState } from 'react'
import { FacebookButton, FacebookCount ,TwitterButton } from "react-social";

function ProjectDetails({ProjectName,Creator,ProjectLocation,Description,Image,OnDelete,id}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let url = "https://github.com";
    return (


        <tr  style={{color: 'black'}}>
            <th style={{color: '#2F4F4F '}}>{id}</th>

            <td>{ProjectName}</td>
            <td>{Creator}</td>
            <td>{ProjectLocation}</td>
            <td>{Description}</td>
          
            <td>
                <Button   style={{backgroundColor: '#2F4F4F '}}   onClick={() => { handleClose(); OnDelete(id) ; }}>
                    Delete

                </Button>
            </td>
            <td>
                 <FacebookButton url={url} appId={251304003958960}>
                 <img  style={{  display: "block",
                        width: "30px",
                        height: "30px",
                        }} 
                         src="/images/fb.png"/>
                 </FacebookButton>
                 <TwitterButton url={url} appId={26988017}>
                 <img  style={{  display: "block",
                        width: "30px",
                        height: "30px",
                       }} 
                         src="/images/twitter.png"/>
                 </TwitterButton>
            </td>



        </tr>


    )
}

export default ProjectDetails