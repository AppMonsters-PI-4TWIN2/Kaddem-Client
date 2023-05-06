import axios from 'axios';
import React, { useState } from 'react'

function ReportDetails({reported,reportedBy,reason,date,isTraited,project,id}) {
 
const [isReportTraited, setIsReportTraited] = useState(isTraited);
var user = JSON.parse( localStorage.getItem('user') );
  
const handleToggleBanned = () => {
    axios.put(`/report/traited/${id}`, { isTraited: !isReportTraited }, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then(() => setIsReportTraited(!isReportTraited))
      .catch(err => console.log(err));
  }
  return (
    <tr  style={{color: 'black'}}>
   

    <td style={{textAlign: "center", verticalAlign: "middle"}}>{reported.userName}</td>
    <td style={{textAlign: "center", verticalAlign: "middle"}}>{reportedBy.userName}</td>
    <td style={{textAlign: "center", verticalAlign: "middle"}}>{reason}</td>
    <td style={{textAlign: "center", verticalAlign: "middle"}}>{new Date(date).toLocaleString()}</td>
    <td style={{textAlign: "center", verticalAlign: "middle"}}>{project.ProjectName}</td>
    <td style={{textAlign: "center", verticalAlign: "middle"}}>
      {/* {isTraited ? 'traité' : 'non traité'} */}
    <button style={{ fontSize: '12px !important' }}  className={`btn btn-${isReportTraited ? 'dark' : 'danger'}`} onClick={handleToggleBanned}>
          {isReportTraited ? 'Traited' : 'Not Traited'}
        </button>
        </td>
  
    </tr>

  )
}

export default ReportDetails