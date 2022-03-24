import React from 'react'
import './FourthContent.scss'
export default function FourthContent() {
    return (
        <>

            <div className='fourth-content'>
                <div className='container d-flex'>
                    <div className='info'>
                        <span>Testimonial</span>
                        <h2>Our Client Say!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <div className='posts d-flex'>
                        <div className='post'>
                            <div className='avt d-flex'>
                                <img src='https://klbtheme.com/shopwise/fashion/wp-content/themes/shopwise/assets/images/user1.jpg' />
                                <h3>Lissa Castro <br /><span>Designer</span></h3>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem amet laudantium, quaeillo inventore sed veritatis et quasi architecto beatae vitae dicta sunt explicabo eiusmod tempor incididunt ut labore.</p>
                        </div>
                        <div className='post'>
                            <div className='avt d-flex'>
                                <img src='https://klbtheme.com/shopwise/fashion/wp-content/themes/shopwise/assets/images/user2.jpg' />
                                <h3>Alden Smith <br /><span>Designer</span></h3>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem amet laudantium, quaeillo inventore sed veritatis et quasi architecto beatae vitae dicta sunt explicabo eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='last-logo'>
                <div className='container'>
                    <img src='https://klbtheme.com/shopwise/fashion/wp-content/themes/shopwise/assets/images/cl_logo5.png'/>
                    <img src='https://klbtheme.com/shopwise/fashion/wp-content/themes/shopwise/assets/images/cl_logo6.png'/>
                    <img src='https://klbtheme.com/shopwise/fashion/wp-content/themes/shopwise/assets/images/cl_logo7.png'/>
                    <img src='https://klbtheme.com/shopwise/fashion/wp-content/themes/shopwise/assets/images/cl_logo1.png'/>
                    <img src='https://klbtheme.com/shopwise/fashion/wp-content/themes/shopwise/assets/images/cl_logo2.png'/>
                </div>
            </div>
        </>
    )
}
