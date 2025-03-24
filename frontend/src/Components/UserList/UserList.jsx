import React, { useEffect, useState } from 'react'
import './UserList.css'
import axios from "axios"

function UserList() {
  const [ data , setData ] = useState([])
  async function getAllUsers() {
    const result = await axios.get("http://localhost:5000/user")
    setData(result.data);
  }
  useEffect( () => {
    getAllUsers()
  } , [] )
  return (
    <div className = "UserLi">
          {
            data.map((user) => (
              <div className="Person flex">
                <div className="border-Person flex">
                  <div className="PersonProfile flex">
                    <img src={user.profile_picture} className='profileImg' />
                  </div>
                  <div className="PersonName flex">
                    <p className='username'>{user.username}</p>
                  </div>
                </div>
              </div>

            ))
          }

    </div>
  )
}

export default UserList
