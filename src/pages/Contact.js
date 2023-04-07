import React, { useEffect, useState } from 'react'
import Avatar from './Avatar.js'

function Contact({id,email,onClick,selected,online}) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`/users/${email}`);
      const data = await response.json();
      setUser(data);
    }
    fetchUser();
  }, [email]);

  if (!user) {
    return null;
  }
  const name = user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : email;

  return (
    <div key={id} onClick={() => onClick(id)}
    style ={{
        borderBottom: '1px solid #E5E7EB',
        borderGray: '#D1D5DB',
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        cursor: 'pointer',
        backgroundColor: selected ? '#BFDBFE' : 'transparent'
      }}> 
   {selected && (
   <div style={{ width: "0.5rem", backgroundColor: "#3B82F6", height: "2.5rem", borderRadius: "0.25rem 0.25rem 0.25rem 0.25rem" }}></div>
 )}
 <div style={{ display: 'flex',
  gap: '2px',
  paddingTop: '2px',
  paddingLeft: '4px',
  alignItems: 'center'}}>
   <Avatar online={online} email={email} userId={id} />
   <span style={{ color: '#2d3748' }}>{name}</span>
   <div></div>
 </div>
</div>


  )
}

export default Contact