import React from 'react'

function Navbar() {
  return (
    <div className="navbar flex">
        <div className="profile"></div>
        <div className="search-bar-home flex">
        <i class="fa-solid fa-search"></i>
        <input type="text" className="searchInput" placeholder='Search' />
        </div>
        <div className="settings"><i class="fa-solid fa-bars"></i></div>
    </div>
  )
}

export default Navbar
