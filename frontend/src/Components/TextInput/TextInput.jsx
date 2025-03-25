import React, { useState } from 'react'
import "./TextInput.css"
import axios from "axios"

function TextInput({username}) {
    const [ text , setText ] = useState("")
    async function handleSubmitChat(e) {
        e.preventDefault()
        await axios.post("http://localhost:5000/msg/set" , {
            user1 : username,
            user2 : "Anshul",
            sender : username,
            text : text
        })
        
    }
  return (
    <div className="Chat-Div flex ">
        {/* emoji div */}
        <div className='chat-emojis flex chat-height-width'>
            <div className="chat-icon flex"><i class="fa-regular fa-face-smile-beam"></i></div>
        </div>

        {/*  +div */}
        <div className='chat-additional-item flex chat-height-width'>
            <div className="chat-icon flex"><i class="fa-regular fa-square-plus"></i></div>
        </div>

        <form onSubmit={handleSubmitChat} className='flex'>
            {/* input div */}
            <div className='chat-text-input flex'>
                <div className='write-chat flex'>
                <input name='text' value={text} onChange={(e) => setText(e.target.value)} type="text" className='chat-input' placeholder='Write a message for Chatting' />
                </div>
            </div>
            {/* send div */}
            <div className='chat-send flex chat-height-width'>
                <button type='submit' className="chat-icon flex"><i class="fa-regular fa-paper-plane"></i></button>
            </div>
        </form>
    </div>
  )
}

export default TextInput
