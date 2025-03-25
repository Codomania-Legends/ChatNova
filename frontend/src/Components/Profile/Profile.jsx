import React, { useEffect, useState } from 'react'
import "./profile.css"


function Profile(props) {
  let alldetails = props.more
  let otherDetails = props.details

  return (
    <div className={`Profile-bar flex ${ (props.show) ? "show-profile" : "hide-profile" }`}>
      <section className="section1-profile flex">
        <div className="profile-pic-div flex">
          <div className="profile-pic-image">
          <img className='profile-img' src={`/${otherDetails?.profile_picture}`} alt="profile_picture" />
          </div>
        </div>
        <div className="username-profile flex">
          <h1>{alldetails?.username}</h1>
        </div>
        <div className="description-profile">
          <span className='description-text-profile'>{alldetails?.description}</span>
        </div>
        <div className="name-profile">
          <span className='name-text-profile'>Name : {alldetails?.name}</span>
        </div>
        <div className="age-profile">
          <span className='age-text-profile'>Age : {alldetails?.age}</span>
        </div>
        <div className="dob-profile">
          <span className='dob-text-profile'>Date of Birth : {alldetails?.dob}</span>
        </div>
        <div className="gender-profile">
          <span className='gender-text-profile'>Gender : {alldetails?.gender}</span>
        </div>
      </section>
      <section className="section2-profile flex">
        <div className="profile-profile">
          Profile
        </div>
        <div onClick={() => props.set( (prev) => prev ? false : true )} className="back-profile flex">
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
