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
                        }} 
                         src="/images/fb.png"/>
                 </FacebookButton>
                 <TwitterButton url={url} appId={26988017}>
                 <img  style={{ display: "block",
                        width: "30px",
                        height: "30px",
                       }} 
                         src="/images/twitter.png"/>
                 </TwitterButton>
            </td>
            <td style={{textAlign: "center", verticalAlign: "middle"}}>
                <Button   style={{backgroundColor: '#343a40 '}}   onClick={() => { handleClose(); OnDelete(id) ; }}>
                    Delete

                </Button>
            </td>



        </tr>


    )
}

export default ProjectDetails