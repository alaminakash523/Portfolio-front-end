import React, { useState } from 'react'

function ContactUs() {
  function getCurrentDateFormatted() {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}
  const [myEmail, setMyEmail] = useState({sender:"", subject:"", body:"", date:getCurrentDateFormatted(), hasRead:false});
  const handleChange = (e) =>{
    setMyEmail({...myEmail, [e.target.name]: e.target.value});
  }
  const handleSubmit =async (e) =>{
    e.preventDefault()
    const url = `${process.env.REACT_APP_BACKEND_KEY}/send-emails`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(myEmail) 
    });
    if (response.ok) {
        alert("Email Sent.");
        setMyEmail({sender:"", subject:"", body:""})
    } else {
        console.error("Failed to fetch data", response.statusText);
    }
  }
  return (
    <>
    <li className="l-section section">
      <div className="contact-us">
    <header>
        <h1>Contact us</h1>
    </header>
    
    <div id="form">
    
    <div className="fish" id="fish"></div>
    <div className="fish" id="fish2"></div>
    
    <form id="waterform" method="post" onSubmit={handleSubmit}>
    
    <div className="formgroup" id="email-form">
        <label htmlFor="sender">Your e-mail*</label>
        <input type="email" id="email" name="sender" value={myEmail.sender} onChange={handleChange}/>
    </div>
    <div className="formgroup" id="name-form">
        <label htmlFor="subject">Subject*</label>
        <input type="text" id="name" name="subject" value={myEmail.subject} onChange={handleChange}/>
    </div>
    
    
    <div className="formgroup" id="message-form">
        <label htmlFor="body">Your message</label>
        <textarea id="message" name="body" value={myEmail.body} onChange={handleChange}></textarea>
    </div>
    
        <input type="submit" value="Send your message!" />
    </form>
    </div>
  </div>
  </li>
    </>
  )
}

export default ContactUs
