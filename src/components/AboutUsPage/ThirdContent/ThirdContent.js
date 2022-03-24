import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { FaLayerGroup } from 'react-icons/fa'
import './ThirdContent.scss'

export default function ThirdContent() {
    return (
        <div className='about-third-content'>
            <div className='container'>
                <div className='image'>
                    <img src='https://klbtheme.com/shopwise/fashion/wp-content/themes/shopwise/assets/images/mission.jpg' alt='ig-content' />
                </div>
                <div className='main-content'>
                    <h2>Our Mission & Vision</h2>
                    <p>If you are going to use a passage of Ipsum, you need to be sure there isn't anything embarrassing hidden in middle of text.</p>
                    <div className='item-content'>
                        <div className='icon'>
                            <AiOutlineSetting />
                        </div>
                        <div className='title'>
                            <h3>Easy To Customize</h3>
                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                        </div>
                    </div>
                    <div className='item-content'>
                        <div className='icon'>
                            <FaLayerGroup />
                        </div>
                        <div className='title'>
                            <h3>Amazing Features</h3>
                            <p>Vestibulum ligula orci, volutpat id aliquet eget, consectetur eget ante. Morbi convallis a eros fermentum rhoncus lorem.</p>
                        </div>
                    </div>
                    <div className='read-more'>
                        <span>Read More</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
