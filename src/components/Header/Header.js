import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'
export default function Header() {
    return (
        <div className="header">
            <div className='container'>
                <div className="header__inner">
                    <div className="logo"><img src="https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/05/logo2.png" alt=""></img></div>
                    <ul className="menu">
                        <li className="menu__item"><Link to="/ReactJS" className="menu__link">Home</Link></li>
                        <li className="menu__item"><a href="" className="menu__link">Pages<i className="fa-solid fa-angle-down"></i></a>
                            <div className="pages">
                                <ul>
                                    <li><Link to='/about'>About Us</Link></li>
                                    <li><Link to='/contact'>Contact Us</Link></li>
                                    <li><Link to='/faq'>Faq</Link></li>
                                    <li><Link to='#'>Team And Conditions</Link></li>
                                    <li><Link to='#'>404 Error Page</Link></li>
                                    <li><Link to='#'>Login</Link></li>
                                    <li><Link to='#'>Register</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="menu__item"><a href="" className="menu__link">Products<i className="fa-solid fa-angle-down"></i></a>
                            <div className="menu__child">
                                <div className='menu__child-title'>
                                    <div className="menu__child-item">
                                        <ul className="menu__child-list">
                                            <li><a href='#'>WOMEN</a></li>
                                            <li><a href='#'>Black Dress For Woman</a></li>
                                            <li><a href='#'>Blue Casual Check Shirt</a></li>
                                            <li><a href='#'>Blue Dress For Woman</a></li>
                                            <li><a href='#'>Lether Gray Tuxedo</a></li>
                                            <li><a href='#'>T-Shirt Form Girls</a></li>
                                        </ul>
                                    </div>
                                    <div className="menu__child-item">
                                        <ul className="menu__child-list">
                                            <li><a href='#'>MEN</a></li>
                                            <li><a href='#'>Light Blue Shirt</a></li>
                                            <li><a href='#'>Men Jins Shirt</a></li>
                                            <li><a href='#'>Red & Black Ceck Shirt</a></li>
                                            <li><a href='#'>T-Shirt From Girls</a></li>
                                            <li><a href='#'>White Bleck Line Dress</a></li>
                                        </ul>
                                    </div>
                                    <div className="menu__child-item">
                                        <ul className="menu__child-list">
                                            <li><a href='#'>KID'S</a></li>
                                            <li><a href='#'>White Line Dress</a></li>
                                            <li><a href='#'>Black Dress For Woman</a></li>
                                            <li><a href='#'>Blue Casual Check Shirt</a></li>
                                            <li><a href='#'>Blue Dress For Woman</a></li>
                                            <li><a href='#'>Men Blue Jins Shirt</a></li>
                                        </ul>
                                    </div>
                                    <div className="menu__child-item">
                                        <ul className="menu__child-list">
                                            <li><a href='#'>ACCESSORIES</a></li>
                                            <li><a href='#'>Woman Full Sliv Dress</a></li>
                                            <li><a href='#'>Lether Gray Tuxedo</a></li>
                                            <li><a href='#'>Light Blue Shirt</a></li>
                                            <li><a href='#'>Men Blue Jins Shirt</a></li>
                                            <li><a href='#'>Red & Black Check Shirt</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu__child-banner'>
                                    <div className='menu__child-banner-item'>
                                        <img src='https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/menu_banner1-1.jpg'></img>
                                        <div className='banner-info'>
                                            <p>10% Off</p>
                                            <h3>New Arrival</h3>
                                            <span>Shop Now</span>
                                        </div>
                                    </div>
                                    <div className='menu__child-banner-item'>
                                        <img src='https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/menu_banner2-1.jpg'></img>
                                        <div className='banner-info'>
                                            <p>15% Off</p>
                                            <h3>Men's Fashion</h3>
                                            <span>Shop Now</span>
                                        </div>
                                    </div>
                                    <div className='menu__child-banner-item'>
                                        <img src='https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/menu_banner3-1.jpg'></img>
                                        <div className='banner-info'>
                                            <p>23% Off</p>
                                            <h3>Kids Fashion</h3>
                                            <span>Shop Now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu__item"><a href="" className="menu__link">Shop<i className="fa-solid fa-angle-down"></i></a>
                            <div className="menu__child">
                                <div className='menu__child-title'>
                                    <div className="menu__child-item">
                                        <ul className="menu__child-list">
                                            <li><a href='#'>SHOP PAGE LAYOUT</a></li>
                                            <li><a href='#'>Grid Left Sidebar</a></li>
                                            <li><a href='#'>Grid Right Sidebar</a></li>
                                            <li><a href='#'>List Left Sidebar</a></li>
                                            <li><a href='#'>Load More Button</a></li>
                                            <li><a href='#'>Infinite Scrolling</a></li>
                                        </ul>
                                    </div>
                                    <div className="menu__child-item">
                                        <ul className="menu__child-list">
                                            <li><a href='#'>OTHER PAGES</a></li>
                                            <li><a href='#'>Cart</a></li>
                                            <li><a href='#'>Checkout</a></li>
                                            <li><a href='#'>My Account</a></li>
                                            <li><a href='#'>Wishlist</a></li>
                                        </ul>
                                    </div>
                                    <div className="menu__child-item">
                                        <ul className="menu__child-list">
                                            <li><a href='#'>PRODUCT DETAIL</a></li>
                                            <li><a href='#'>Default Product</a></li>
                                            <li><a href='#'>Variable Product</a></li>
                                            <li><a href='#'>Affiliate Product</a></li>
                                            <li><a href='#'>Grouped Product</a></li>
                                        </ul>
                                    </div>
                                    <div className='ad-banner'>
                                        <div className='image'>
                                            <img src='https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/shop_banner-1.jpg'></img>
                                            <div className='blur'></div>
                                        </div>
                                        <div className='banner-info'>
                                            <h3>NEW COLLECTION</h3>
                                            <p>SALE 30% OFF</p>
                                            <span>Shop Now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu__item"><a href="" className="menu__link">Blog</a></li>
                        <li className="menu__item"><a href="" className="menu__link">Contact Us</a></li>
                        <li className="search"><i className="fas fa-search icon"></i></li>
                        <li className="search"><i className="fas fa-shopping-cart icon"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
