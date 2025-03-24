import React from 'react'
import './HomePage.css'
import Navbar from '../Navbar.jsx'
function HomePage() {
  return (
    <>
        <main className='homeMain flex'>
          <div className='leftList'>
            <Navbar/>
            <div className='SomeBtn'>
              <button className="all"></button>
              <button className="Unread"></button>
              <button className="archieve"></button>
              <button className="Blocked"></button>
            </div>
            
          </div>

          <div className='rightChat'>
            <div className="navbarpart2">
            </div>
          </div>
        </main>
    </>
  )
}

export default HomePage
