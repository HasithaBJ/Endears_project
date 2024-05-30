import React from 'react'
import './ContactUs.css'

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }

    console.log(conFom)
  }
  return (
    <div className="container" id='contact'>
      <h2 className="">Contact Us</h2>
      <form className="form" onSubmit={onSubmit}>
        <div className="">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}

export default ContactForm