import React, { useEffect, useState } from 'react'
import './UserList.css'
import axios from "axios"
import {useNavigate} from "react-router-dom"

function UserList({username}) {
  const navigate = useNavigate()
  const [ data , setData ] = useState([])
  const [ msg , setMsg ] = useState([])
  async function getAllUsers() {
    const result = await axios.get("http://localhost:5000/user")
    setData(result.data);
  }
  async function getAllMsgs() {
    const result = await axios.get( "http://localhost:5000/msg/getAll" )
    setMsg(result.data)
  }
  useEffect( () => {
    getAllUsers()
    getAllMsgs()
  } , [] )
  return (
    <div className = "UserLi">
          {
            data.map((user , i) => (
              <div key={i} onClick={() => {
                navigate(`/chat/${username}/${user.username}`)
              }} className="Person flex">
                <div className="border-Person flex">
                  <div className="PersonProfile flex">
                    <img src={`/${user.profile_picture}`} className='profileImg' />
                  </div>
                  <div className="PersonName flex">
                    <p className='username'>{user.username}</p>
                    <span className='recentMsg'>{
                      // msg.map( (v) => {
                      //   v.user
                      // } )  
                    }</span>
                  </div>
                </div>
              </div>
            ))
          }

    </div>
  )
}

export default UserList
