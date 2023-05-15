import React from 'react'
import Footer from '../Components/Footer'

export default function Contact() {
  return (
    <div className='overflow-x-hidden'>
        <div className="container m-lg-5 d-lg-flex justify-content-center">
        <section class="section_form">
            <h2>Contact Us</h2>
  <form id="consultation-form" class="feed-form" action="#">
    <input required="" placeholder="Name" type="text"/>
    <input name="text" required="" placeholder="Subject"/>
    <input name="email" required="" placeholder="E-mail" type="email"/>
    <textarea name="" id="" cols="30" rows="4" placeholder="Message"></textarea>
    <button class="button_submit">Submit</button>
  </form>
</section>

<div className="section m-lg-5 pt-5">

    <h4>Our Location</h4>
    <h5>A-8, Infocity- 1, Sector 34, Gurugram – 122001, Haryana</h5>
    <br />
    <h4>Email</h4>
    <h5>Support@vewnet.com</h5>
    <br />
    <h4>Phone no</h4>
    <h5>+91 8099701444</h5>
    <br />

</div>
        </div>
      <Footer/>
    </div>
  )
}
