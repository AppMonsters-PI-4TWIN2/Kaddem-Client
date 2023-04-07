import React from 'react'

function Avatar({userId,email,online }) {
    const colors =  ['#C6F6D5', '#FEB2B2', '#9AE6B4', '#C4B5FD', '#90CDF4', '#FDE68A', '#FBD38D', '#FECDD3', '#FDBA74', '#F9A8D4'];
const userIdBase10 = parseInt(userId.substring(10), 16);
const colorIndex = userIdBase10 % colors.length;
const color = colors[colorIndex]; 

return (
    <div style ={{
        position :'relative' , 
        width: '2rem', height: '2rem' , borderRadius: '50%',  display: 'flex',  alignItems: 'center', 
        justifyContent: 'center'  ,backgroundColor: color }}>
        <div style={{textAlign: "center", width: "100%"}}>
 {email[0]}  
        </div>
      {online &&(  
     <div style={{ position: "absolute", width: "0.75rem", height: "0.75rem", backgroundColor: "#34D399", bottom: 0, right: 0, borderRadius: "50%", border: "1px solid #FFF" }}></div>

    )}
     {!online &&(  
     <div style={{ position: "absolute", width: "0.75rem", height: "0.75rem",backgroundColor: "#CBD5E0", bottom: 0, right: 0, borderRadius: "50%", border: "1px solid #FFF" }}></div>

    )}
        </div>
  )
}

export default Avatar