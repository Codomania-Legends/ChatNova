import React from 'react'
import "./profile.css"

function Profile({set , show}) {
  return (
    <div className={`Profile-bar flex ${ (show) ? "show-profile" : "hide-profile" }`}>
      <section className="section1-profile flex">
        <div className="profile-pic-div flex">
          <div className="profile-pic-image">
            <img className='profile-img' src="image1.jpg" alt="profile picture" />
          </div>
        </div>
        <div className="username-profile flex">
          <h1>Vidhi_Agrawal</h1>
        </div>
        <div className="description-profile">
          <span className='description-text-profile'>Full stack developer, with passionate developing skills</span>
        </div>
        <div className="name-profile">
          <span className='name-text-profile'>Name : Vidhi</span>
        </div>
        <div className="age-profile">
          <span className='age-text-profile'>Age : 20</span>
        </div>
        <div className="dob-profile">
          <span className='dob-text-profile'>Date of Birth : 22/05/2005</span>
        </div>
        <div className="gender-profile">
          <span className='gender-text-profile'>Gender : Female</span>
        </div>
      </section>
      <section className="section2-profile flex">
        <div className="profile-profile">
          Profile
        </div>
        <div onClick={() => set( (prev) => prev ? false : true )} className="back-profile flex">
          <i className='fa-solid fa-chevron-right'></i>
        </div>
      </section>
      <section className="section3-profile flex">
        <div className="logout-profile flex">
          <span className='flex'>Logout<pre> </pre></span>
          <i className="fa-solid fa-right-from-bracket"></i>
        </div>
        <div className="help-profile">
          <span>Help!</span>
        </div>
      </section>
    </div>
  )
}

export default Profile
