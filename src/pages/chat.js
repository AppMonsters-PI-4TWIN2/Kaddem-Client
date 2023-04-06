import { useEffect, useRef, useState } from "react"
import Navbar from "../components/Common/Navbar/navbar";
import Footer from "../components/Common/Footer/footer";
import { uniqBy } from "lodash";
import axios from "axios";
import Avatar from "./Avatar";
import Contact from "./Contact";

const Chat = () => {
    const [ws,setWs] =useState(null) ; 
    const [onlinePeople,setOnlinePeople]=useState({})
    //const [onlinePeopleExclOurUser,setOnlinePeopleExclOurUser]=useState({})
    const[selectedUserId,setSelectedUserId]=useState(null)
    const [offlinePeople,setOfflinePeople] = useState({});
    const [messages,setMessages]=useState([])
    const [newMessageText,setNewMessageText]=useState(' ')
    const divUnderMessages = useRef() ; 
    // récupérer le token depuis localStorage
    var user = JSON.parse( localStorage.getItem('user') );

function connectToWs(){
  const ws =  new WebSocket('ws://localhost:4000') ;
  setWs(ws) ;
  ws.addEventListener('message',handleMessage )
  ws.addEventListener('close',() => {
    setTimeout(() => {
      console.log('disconned . Trying to reconnect'); 
      connectToWs() ; 
    },1000)
  }) ; 
}

useEffect(() => {
connectToWs() ; 
 },[]) 

 function handleMessage(ev){
    const messageData = JSON.parse(ev.data);
  console.log({ev,messageData})
    if('online' in messageData){
     showOnlinePeople(messageData.online) 
    }else if ('text' in messageData) {
     if(messageData.sender === selectedUserId)
      {setMessages(prev => ([...prev,{...messageData}]))
  }
     console.log({messageData})
    }
 }

 
 function showOnlinePeople(peopleArray){
    const people = {} ; 
    peopleArray.forEach(({userId,email}) => {
    people[userId] =email 
     });
   console.log(people)
   setOnlinePeople(people)
}

function sendMessage(ev){
    ev.preventDefault() ; 
    ws.send(JSON.stringify({
            recipient : selectedUserId , 
            text : newMessageText , 
    })); 
    setNewMessageText('') ;
    
    console.log("userId ", user.id ),

    setMessages(prev => ([...prev,{
        text :newMessageText,
        isOur :true,
        sender:user.id ,
        recipient :selectedUserId , 
        _id:Date.now()
    }])) ; 
}
useEffect(()=>{
if(selectedUserId){
  axios.get('/chat/messages/'+selectedUserId).then(res => {
  
    setMessages(res.data)
  })
}
},[selectedUserId])

useEffect(()=>{
  const div =  divUnderMessages.current ; 
  if(div) {
    div.scrollIntoView({behavior:'smooth',block:'end'})

  }
  
},[messages])

//show offLine people
useEffect(() => {
axios.get('/chat/people').then(res =>{
 const offlinePeopleArr= res.data
     .filter( p => p._id !== user.id)
     .filter( p => !Object.keys(onlinePeople).includes(p._id))
            
const offlinePeople={} ; 
offlinePeopleArr.forEach(p => {
offlinePeople[p._id] =p ; 
}) ; 
console.log({offlinePeople,offlinePeopleArr})
 setOfflinePeople(offlinePeople)

} ) ;
},[onlinePeople])

const onlinePeopleExclOurUser = { ...onlinePeople };
  
 delete onlinePeopleExclOurUser[user.id];
 console.log("user.id")
  console.log(user.id)
 console.log("onlinePeopleExclOurUser")
console.log( onlinePeopleExclOurUser)


const messagesWithoutDupes =uniqBy(messages, '_id') ;



    
return (<div>
    <Navbar/>
      <div style={ { display: 'flex',
          height: '100vh' }}>
  
    <div style={{  backgroundColor: '#fff', width: '33.33%',  padding: '5px' }}>
  
      {user && (
           <div>
      {Object.keys(onlinePeopleExclOurUser).map(userId => (
<Contact
key={userId}
id={userId}
online={true}
email={onlinePeopleExclOurUser[userId]}
onClick={() => {setSelectedUserId(userId);console.log({userId})}}
selected={userId === selectedUserId} /> 

  ))} 
  {Object.keys(offlinePeople).map(userId => (
            <Contact
              key={userId}
              id={userId}
              online={false}
              email={offlinePeople[userId].email}
              onClick={() =>{ setSelectedUserId(userId);console.log({userId})}}
              selected={userId === selectedUserId} />
          ))}
  </div>
    )}
       </div>
    
  <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f0f4f8',
      width: '66.66%',
      padding: '8px'
    }}>
  <div style={ { flexGrow: 1}}>
      {!selectedUserId && (
        <div style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center" }}      > 
            <div style={{ color: '#CBD5E0' }}>&larr; Select a person person from the sidebar </div>
         </div>
      )}
   
  {!!selectedUserId && (
    <div  style={{position :'relative',height:"100%"}}>
  <div style={{width:"100%",position:'absolute', overflowY: 'scroll', position: 'absolute', top: 0, left: 0, right: 0, bottom: '2px' }}  >
  {messagesWithoutDupes && messagesWithoutDupes.map(message => (
    <div key={message._id}
       style={{textAlign: message.sender === user.id ? 'right' : 'left'}}    >
      <div style={{display:'inline-block', textAlign: 'left' ,padding: '6px', margin: '3px', borderRadius: '0.205rem', fontSize: '0.975rem',
       backgroundColor: message.sender === user.id ? 'blue' : 'white', color: message.sender === user.id ? 'white' : 'gray'}}
     > 
             {/* sender :{message.sender}<br/>
              my id : {user.id} < br/> */}
               {message.text}
              
              </div>  
               </div>
  ))}
  <div ref={divUnderMessages} ></div> 
  </div>
  
  </div> 

  )}
  
  
  
  </div>
  {!!selectedUserId && ( 
      <form onSubmit={sendMessage} style={{ display: 'flex', gap: '1rem' ,overflow: 'scroll' , marginX: '80rem'}}   >
      <input type="text "
      id="kk"
      value={newMessageText} 
    onChange={ev =>setNewMessageText(ev.target.value)}
      placeholder='tape your message here ' 
      style={{backgroundColor: 'white', border: '1px solid',   padding: '0.5rem',flexGrow: 3 }} />
          <button type="submit" style={ {   flexGrow: 1,  backgroundColor: '#3B82F6',  padding: '0.5rem', color: 'white' }}>
  
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
   style={{ width: '1.5rem', height: '1.5rem' }}>
        <path strokeLinecap='round' strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
  
  </button>
  </form>
  )}
  
  </div>
  
    </div> 
    </div>)
  }
  
  export default Chat