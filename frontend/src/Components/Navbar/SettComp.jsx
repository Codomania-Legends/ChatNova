import React from 'react'
import './SettComp.css'
function SettComp({show , setShow}) {
  return (
    <div className={`setting-bar flex ${ show ? "show-setting" : "hide-setting" }`}>
      <section className="section1-setting flex">
        <h1>hello</h1>
      </section>
      <section className="section2-setting flex">
        <div  className="back-setting flex" onClick={() => setShow(false)}>
          <i className='fa-solid fa-chevron-right'></i>
        </div>
      </section>
      
    </div>
  )
}

export default SettComp
