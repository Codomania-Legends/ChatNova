import React from 'react'
import './HomePage.css'
import Navbar from '../Navbar.jsx'
import UserList from '../UserList/UserList.jsx'
function HomePage() {
  return (
    <>
        <main className='homeMain flex'>
          <div className='leftList'>
            <Navbar/>
            <div className='SomeBtn flex'>
              <button className="all btnall flex">All</button>
              <button className="Unread btnall flex">Unread</button>
              <button className="archieve btnall flex">Archieve</button>
              <button className="Blocked btnall flex">Blocked</button>
            </div>
            <UserList/>
          </div>

          <div className='rightChat'>
            <div className="navbarpart2">
            </div>
            <div className="setGetChat">
            </div>
            <div className="chatuTexting"></div>
          </div>
        </main>
    </>
  )
}

export default HomePage
