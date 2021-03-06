import { useState } from 'react'
import { TypeItem, ItemProducts } from './SecondContentData'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { VscZoomIn } from 'react-icons/vsc'
import './SecondContent.scss'

export default function SecondContent() {

    const [current, setCurrent] = useState(0)

    const bestSellers = () => {
        setCurrent(0)
    }
    const featured = () => {
        setCurrent(1)
    }
    const newArrival = () => {
        setCurrent(2)
    }
    const specialOffer = () => {
        setCurrent(3)
    }

    return (
        <div className='second-content'>
            <div className='container'>
                <div className='title__content'>
                    <h2>Exclusive Products</h2>
                    <div className='title__content-type'>
                        <h3 onClick={bestSellers}>Best sellers</h3>
                        <h3 onClick={featured}>Featured</h3>
                        <h3 onClick={newArrival}>New Arrival</h3>
                        <h3 onClick={specialOffer}>Special Offer</h3>
                    </div>
                </div>
                <div className='row'>
                    {TypeItem[current].related.map((id) => (
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
    )
}
