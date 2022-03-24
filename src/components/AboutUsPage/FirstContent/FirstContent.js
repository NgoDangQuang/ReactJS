import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './FirstContent.scss'


export default function FirstContent() {
    return (
        <div className='first-content'>
            <div className='intro'>
                <div className='container'>
                    <h2>About Us</h2>
                    <div className='link'>
                        <Link to='/ReactJS'>Home</Link>
                        <AiOutlineRight />
                        <h4>About</h4>
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className='container'>
                    <div className='content-info'>
                        <span>About The Shopwise</span>
                        <h2>Easy Way To Start A Success Business Solution</h2>
                        <h3>25 Years Experience passage of Internet tend to repeat predefined chunks as necessary</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                            hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary
                        </p>
                        <p>There are many variations of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    </div>
                    <img src='https://klbtheme.com/shopwise/fashion/wp-content/themes/shopwise/assets/images/about_img.jpg' />
                </div>
            </div>
        </div>
    )
}
