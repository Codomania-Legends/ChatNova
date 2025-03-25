import React, { useEffect, useState } from 'react'
import './Chat.css'
import axios from "axios"

function Chat({username,reload,setReload,user2Name}) {
  const [ msgs , setMsgs ] = useState([]) 
  async function getChats( user1 , user2 ) {
    const result = await axios.get( `http://localhost:5000/msg/get?user1=${user1}&user2=${user2}` )
    if( result.data.msgs ){
      setMsgs(result.data.msgs)
    }
    else{
      setMsgs([])
    }
  }
  useEffect( () => {
    if( user2Name ){
      getChats( username , user2Name )
      setReload("")
    }
  } , [reload , user2Name] )
  return (
    <main className='Chats'>
        <div className="Chat-background">
          <div className="ChatImg flex">
            <div className="chatSection flex">
              {
                msgs.map( (v , i) => (
                  <div key={i} id={(v.sender) == username ? "right" : "left"} className="chatBox flex">
                    <div className="chat">
                      <span>{v.text}</span>
                    </div>
                  </div>
                ) )
              }
            </div>
          </div>
        </div>
    </main>
  )
}

export default Chat

