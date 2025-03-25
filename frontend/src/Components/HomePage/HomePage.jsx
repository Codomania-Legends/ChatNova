import React, { useEffect, useState } from 'react'
import './HomePage.css'
import Navbar from '../Navbar/Navbar.jsx'
import RightNavbar from '../Navbar/RightNavbar.jsx'
import UserList from '../UserList/UserList.jsx'
import Profile from '../Profile/Profile.jsx'
import TextInput from '../TextInput/TextInput.jsx'
import Chat from '../Chat/Chat.jsx'
function HomePage({username}) {
  const [ showProfile , setShowProfile ] = useState(false)
  useEffect( () => {
    console.log(showProfile)
  } , [showProfile] )
  return (
    <>
        <main className='homeMain flex'>
          <Profile username={username} set={setShowProfile} show={showProfile} />


          {/* left side */}
          <div className='leftList'>
            {/* left navbar */}
            <Navbar username={username} set={setShowProfile}/>

            {/* button for all unread archieve and blocked users */}
            <div className='SomeBtn flex'>
              <button className="all btnall flex">All</button>
              <button className="Unread btnall flex">Unread</button>
              <button className="archieve btnall flex">Archieve</button>
              <button className="Blocked btnall flex">Blocked</button>
            </div>

            {/* users list on left side */}
            <UserList/>
          </div>

          {/* right NavBar */}
          <div className='rightChat'>
            <div className="navbarpart2">
              <RightNavbar/>
            </div>

            {/* chat box where chat will appear */}
            <div className="setGetChat">
              <Chat username={username}/>
            </div>

            {/* input */}
            <div className="chatuTexting">
              <TextInput username={username}/>
            </div>
          </div>
        </main>
    </>
  )
}

export default HomePage
