import React from 'react'
import "./Contact.css";

function Contact() {
  return (
    <div className='contact'>
        
        <form action = "https://formspree.io/f/mayvlgra" method='post'>
            <input type = 'text'placeholder='enter your name..' name = 'username ' required/>
            <input type = 'email'placeholder='Email'  name = "email" required />
            <textarea name = "message" placeholder='message' required></textarea>
            <button>Submit</button>
        </form>
        </div>
      

  )
}

export default Contact;
