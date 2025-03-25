import React, { useEffect, useState } from 'react'
import './Chat.css'
import axios from "axios"

function Chat({username}) {
  const [ msgs , setMsgs ] = useState([]) 
  async function getChats( user1 , user2 ) {
    const result = await axios.get( `http://localhost:5000/msg/get?user1=${user1}&user2=${user2}` )
    setMsgs(result.data)
    console.log(msgs)
    console.log("Retrieved")
  }
  useEffect( () => {
    getChats("Anshul" , "Vidhi")
  } , [] )
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

