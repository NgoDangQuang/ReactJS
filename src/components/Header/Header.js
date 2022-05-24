import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { headerLogo, pageData, productData, productBannerData, shopData, shopBannerData } from './headerData.js'
import './Header.scss'
export default function Header() {
    return (
        <div className="header flex jCenter">
            <div className='header__container'>
                <div className="logo"><Link to={headerLogo.link}><img src={headerLogo.img} alt=""></img></Link></div>
                <ul className='menu'>
                    <li className="menu__item"><Link to="/ReactJS" className="menu__link">Home</Link></li>
                    <li className="menu__item"><a href='' className="menu__link">Pages<i className="fa-solid fa-angle-down"></i></a>
                        <div className='pages'>
                            <ul>
                                {pageData.map((item, index) => {
                                    return (
                                        <li><Link to={item.link}>{item.title}</Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </li>
                    <li className="menu__item flex jCenter"><a href='' className="menu__link">Products<i className="fa-solid fa-angle-down"></i></a>
                        <div className="menu__child">
                            <div className='menu__child-title'>
                                {productData.map((item, index) => {
                                    return (
                                        <div className="menu__child-item">
                                            <ul className="menu__child-list">
                                                {item.map((itemChild) => {
                                                    return (
                                                        <li><Link to={itemChild.link}>{itemChild.title}</Link></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='menu__child__banner'>
                                {productBannerData.map((item) => {
                                    return (
                                        <div className='menu__child__banner__item'>
                                            <img src={item.img}></img>
                                            <div className='banner__info'>
                                                <p>{item.discount}</p>
                                                <h3>{item.title}</h3>
                                                <Link to={item.link}><span>{item.shopNow}</span></Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </li>
                    <li className="menu__item"><a href='' className="menu__link">Shop<i className="fa-solid fa-angle-down"></i></a>
                        <div className="menu__child">
                            <div className='menu__child-title'>
                                {shopData.map(item => {
                                    return (
                                        <div className="menu__child-item">
                                            <ul className="menu__child-list">
                                                {item.map((itemChild) => {
                                                    return (
                                                        <li><Link to={itemChild.link}>{itemChild.title}</Link></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>

                                    )
                                })}
                                <div className='ad-banner'>
                                    <div className='image'>
                                        <img src={shopBannerData.img}></img>
                                        <div className='blur'></div>
                                    </div>
                                    <div className='banner-info'>
                                        <h3>{shopBannerData.title}</h3>
                                        <p>{shopBannerData.discount}</p>
                                        <Link to={shopBannerData.link}><span>{shopBannerData.shopNow}</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="menu__item"><Link to="/blog" className="menu__link">Blog</Link></li>
                    <li className="menu__item"><Link to="/contact" className="menu__link">Contact us</Link></li>
                    <li className="search"><i className="fas fa-search icon"></i></li>
                    <li className="search"><i className="fas fa-shopping-cart icon"></i></li>
                </ul>
            </div>
        </div>
    )
}
