import React from 'react'
import './Footer.scss'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaYoutube, FaInstagram, FaMapMarkerAlt }
    from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { GiSmartphone } from 'react-icons/gi'
export default function Footer() {
    return (
        <div className='footer'>
            <div className='subscribe'>
                <div className='container'>
                    <h2>Subscribe Our Newsletter</h2>
                    <div className='sign-up'>
                        <input type='text' placeholder='Your email address' />
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
            <div className='information'>
                <div className='container'>
                    <div className='shopwise'>
                        <img src="https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/logo_light-1.png" alt='logo' />
                        <p>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
                        <div className='icons'>
                            <FaFacebookF className='icon' />
                            <FaTwitter className='icon' />
                            <FaGooglePlusG className='icon' />
                            <FaYoutube className='icon' />
                            <FaInstagram className='icon' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='info col-sm-12 col-md-4 col-lg-3'>
                            <h3>Useful Links</h3>
                            <p>About Us</p>
                            <p>Faq</p>
                            <p>Location</p>
                            <p>Affiliates</p>
                            <p>Contact</p>
                        </div>
                        <div className='info col-sm-12 col-md-4 col-lg-3'>
                            <h3>Category</h3>
                            <p>Men</p>
                            <p>Women</p>
                            <p>Kid's</p>
                            <p>Special Offer</p>
                            <p>Best Sellers</p>
                        </div>
                        <div className='info col-sm-12 col-md-4 col-lg-3'>
                            <h3>My Account</h3>
                            <p>My account</p>
                            <p>Discount</p>
                            <p>Returns</p>
                            <p>Orders History</p>
                            <p>Order Tracking</p>
                        </div>
                        <div className='info col-sm-12 col-md-4 col-lg-3'>
                            <h3>Contact Info</h3>
                            <div className='info-content'>
                                <div className='icon'>
                                    <FaMapMarkerAlt />
                                </div>
                                <p>
                                    123 Street, Old Trafford, New South London, UK
                                </p>
                            </div>
                            <div className='info-content'>
                                <div className='icon'>
                                    <FiMail className='icon' />
                                </div>
                                <p>
                                    info@shopwise.com
                                </p>
                            </div>
                            <div className='info-content'>
                                <div className='icon'>
                                    <GiSmartphone className='icon' />
                                </div>
                                <p>
                                    +84 377 659 519
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <div className='container'>
                    <p>Copyright 2022.KlbTheme . All rights reserved</p>
                    <div className='payment'>
                        <img src='https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/visa-1.png' />
                        <img src='https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/discover-1.png' />
                        <img src='https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/master_card-1.png' />
                        <img src='https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/paypal-1.png' />
                        <img src='https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/amarican_express-1.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}
