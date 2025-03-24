import React from 'react'
import './HomePage.css'
function HomePage() {
  return (
    <>
        <main className='homeMain flex'>
          <div className='leftList'>
            <div className="navbar flex">
              <div className="profile"></div>
              <div className="search-bar-home flex">
                <i class="fa-solid fa-search"></i>
                <input type="text" className="searchInput" placeholder='Search' />
              </div>
              <div className="settings"><i class="fa-solid fa-bars"></i></div>
            </div>
          </div>
          <div className='rightChat'>hello</div>
        </main>
    </>
  )
}

export default HomePage
