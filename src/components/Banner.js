import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/NoteContext'

function Banner() {
  const context = useContext(NoteContext)
  useEffect(()=>{
    context.getUser()
    // eslint-disable-next-line
  },[])
  return (
    <>
      <li className="l-section section section--is-active">
                <div className="intro">
                  <div className="intro--banner">
                    <h1>Your next<br />interactive<br />experience</h1>
                    <button className="cta">
                      Hire Us
                      <svg
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 150 118"
                        style={{ enableBackground: "new 0 0 150 118" }}
                        xmlSpace="preserve"
                      >
                        <g
                          transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)"
                        >
                          <path
                            d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"
                          />
                        </g>
                      </svg>
                      <span className="btn-background"></span>
                    </button>
                    <div
                      id="avatar-container"
                      style={{width: "511px", height: "463px", margin: "0 auto"}}
                    >
                      <div id="avatar-loading"></div>
                    </div>
                  </div>
                  <div className="intro--options" style={{display:"flex"}}>
                  {context.users.map((user)=>{
                    return (
                      <a href="#0" className='team-member' key={user.id}>
                      <section >
                      <img src={user.imageUrl} alt='Team-Member'/>
                      </section>
                      <section>
                      <h3>{user.name}</h3>
                      <p>
                        {user.description}
                      </p>
                      </section>
                    </a>
                    )
                  })} 

                  </div>
                </div>
              </li>
    </>
  )
}

export default Banner
