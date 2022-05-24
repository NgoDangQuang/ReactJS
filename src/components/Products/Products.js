import { useState, useEffect } from 'react'
import {
    AiOutlineRight, AiOutlineSync, AiOutlineDollar, AiFillStar, AiFillHeart,
    AiOutlineShareAlt, AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart, AiOutlineHeart
} from 'react-icons/ai'
import { VscZoomIn } from 'react-icons/vsc'
import { BsShieldCheck, BsCartCheckFill } from 'react-icons/bs'
import { FaFacebookF, FaTwitter, FaLinkedin, FaPinterestP, FaTumblr, FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ContentProducts} from './ProductsData.js';
import { ItemProducts } from '../HomePage/SecondContent/SecondContentData.js'

import './Products.scss'

function Products(props) {
    const [count, setCount] = useState(1)
    const [current, setCurrent] = useState(0)
    const [pick, setPick] = useState('des')
    const length = ContentProducts[0].slide.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const handleCurrent = (e) => {
        console.log(e)
    }
    if (!Array.isArray(ContentProducts[0].slide) || ContentProducts[0].slide.length <= 0) {
        return null;
    }

    const handleMinus = () => {
        setCount(count - 1)
    }
    const handlePlus = () => {
        setCount(count + 1)
    }
    const handleChange = (index) => {
        setCount(index)
    }

    const handlePickDes = () => {
        setPick('des')
    }
    const handlePickReview = () => {
        setPick('review')
    }
    return (
        <>
            {ContentProducts.map((ContentProduct, index) => (
                ContentProduct.id==props.id_product &&
                <div className='products'>
                    <div className='intro'>
                        <div className='container'>
                            <h2>Product Detail</h2>
                            <div className='link'>
                                <Link to='/ReactJS'>Home</Link>
                                <AiOutlineRight />
                                <Link to='/BestSeller'>Best Sellers</Link>
                                <AiOutlineRight />
                                <h4>{ContentProduct.detail}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='product-content'>
                        <div className='container d-flex'>
                            <div className='product-content-image'>
                                <div className='show-image'>
                                    <FaChevronLeft className='left arrow' onClick={prevSlide} />
                                    <FaChevronRight className='right arrow' onClick={nextSlide} />
                                    {ContentProduct.slide.map((slide, index) => (
                                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                            {index === current && (
                                                <img src={slide} className='image-banner' />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className='preview'>
                                    {ContentProduct.slide.map((slide, index) => (
                                        <div className={index === current ? 'preview__slider active_slider' : 'preview__slider'}
                                            key={index}
                                        >
                                            <img src={slide} className='image-slider' />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='product__des'>
                                <h3 className='title'>{ContentProduct.detail}</h3>
                                <div className='price-star'>
                                    <div className='price'>
                                        <span className='price-old'>{ContentProduct.price_old}</span>
                                        <span className='price-new'>{ContentProduct.price_new}</span>
                                    </div>
                                    <div className='rating'>
                                        <span className='star' >
                                            {ContentProduct.rating}
                                        </span>
                                        <span className='count'>({ContentProduct.count_rating} customers review)</span>
                                    </div>
                                </div>
                                <p className='des'>{ContentProduct.introduce}</p>
                                <div className='insurance'>
                                    {ContentProduct.insurance.map((item) => (
                                        <div className='insurance__content'>
                                            <span className='insurance__icons'>{item.icons}</span><p>{item.content}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className='stock'>In Stock</p>
                                <div className='buy'>
                                    <span className='minus calc' onClick={handleMinus}><AiOutlineMinus className='icons' /></span>
                                    <input className='quantity' onChange={e => handleChange(e.target.value)} value={count} />
                                    <span className='plus calc' onClick={handlePlus}><AiOutlinePlus className='icons' /></span>
                                    <div className='purchase__product'>
                                        <BsCartCheckFill className='cart' />
                                        <p>Add To Cart</p>
                                    </div>
                                    <AiFillHeart className='out-icons' />
                                    <AiOutlineShareAlt className='out-icons' />
                                </div>
                                <div className='product__detail'>
                                    <div className='id'>
                                        <p>{ContentProduct.code}</p>
                                    </div>
                                    <div className='categories'>
                                        <p>CATEGORIES: </p>
                                        {ContentProduct.categories.map((item) => (
                                            <a href='#'>{item},</a>
                                        ))}
                                    </div>
                                    <div className='tags'>
                                        <p>TAGS: </p>
                                        {ContentProduct.tags.map((item) => (
                                            <a href='#'>{item},</a>
                                        ))}
                                    </div>
                                </div>
                                <div className='share'>
                                    <p>Share: </p>
                                    {ContentProduct.icons_share.map((item) => (
                                        <span className='icons'>{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='description__review'>
                        <div className='container'>
                            <div className='btn'>
                                <div className={pick === 'des' ? 'btn-item active' : 'btn-item'} onClick={handlePickDes}>DESCRIPTION</div>
                                <div className={pick === 'review' ? 'btn-item active' : 'btn-item'} onClick={handlePickReview}>REVIEWS (2)</div>
                            </div>
                            <div className={pick === 'des' ? 'description-content active' : 'description-content'}>
                                {ContentProduct.description.map((item) => (
                                    <p>{item}</p>
                                ))}
                            </div>
                            <div className={pick === 'review' ? 'reviews-content active' : 'reviews-content'}>
                                <h3>{ContentProduct.review.length} reviews for {ContentProduct.detail}</h3>
                                {ContentProduct.review.map((item) => (
                                    <div className='review'>
                                        <img className='avt' src={item.avt} />
                                        <div className='content-review'>
                                            <div className='info'>
                                                <h4 className='name'>{item.userName}</h4>
                                                <div className='star-time'>
                                                    <span className='stars' >
                                                        <span className='star'>{item.rating}</span>
                                                    </span>
                                                    <div className='day-time'>{item.day_time}</div>
                                                </div>
                                            </div>
                                            <div className='comment'>
                                                {item.comment}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='related-products'>
                        <div className='container'>
                            <h2 className='related__title'>Related Products</h2>
                            <div className='row'>
                                {ContentProduct.related.map((id) => (
                                    <>
                                        {ItemProducts.map((item, index) => {
                                            return (
                                                item.id === id &&
                                                <div className='list-item col-12 col-sm-6 col-md-4 col-lg-3' key={index}>
                                                    <div className='item'>
                                                        <div className='image'>
                                                            <img src={item.image} alt={item.alt} />
                                                            <p className='sale-off'>{item.saleoff}</p>
                                                            <div className='overplay'></div>
                                                            <div className='icons'>
                                                                <AiOutlineShoppingCart className='icon' />
                                                                <VscZoomIn className='icon' />
                                                                <AiOutlineHeart className='icon' />
                                                            </div>
                                                        </div>
                                                        <div className='item-info'>
                                                            <h4 className='name'>{item.name}</h4>
                                                            <span className='price'>{item.price}</span>
                                                            <span className='discount'>{item.discount}</span>
                                                            <br />
                                                            <div className='rating'>
                                                                <span className='star' key={index}>{item.rating}</span>
                                                                <span className='count'>{item.count}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Products