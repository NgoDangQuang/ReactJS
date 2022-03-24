import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './ContactPage.scss'
export default function ContactPage() {
    return (
        <div className='contact-page'>
            <div className='intro'>
                <div className='container'>
                    <h2>Contact Us</h2>
                    <div className='link'>
                        <Link to='/ReactJS'>Home</Link>
                        <AiOutlineRight />
                        <h4>Contact</h4>
                    </div>
                </div>
            </div>
            <div className='contact-content'>
                <div className='container'>
                    <div className='form_Input'>
                        <h2>Get in Touch</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.
                            Nullam id varius nunc id varius nunc.</p>
                        <input type='text' placeholder='Your Name*' />
                        <input type='email' placeholder='Your Email*' />
                        <input type='tel' placeholder='Your Phone*' />
                        <input type='text' placeholder='Subject' />
                        <input type='text' placeholder='Your Message' />
                        <button>Send Message</button>
                    </div>
                    <div className='google-map'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1571939570977!2d106.79698121462349!3d10.87564609225423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a1768e1d03%3A0x38d3ea53e0581ae0!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puLCBDxqEgc-G7nyBMaW5oIFRydW5nLCBUaOG7pyDEkOG7qWMsIMSQSFFHIFRQSENNLg!5e0!3m2!1svi!2s!4v1648109476034!5m2!1svi!2s"
                            style={{width:'600px',height:'450px',border:0}}
                            allowFullScreen=""
                            loading='lazy'
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
