import React from 'react'
import './FirstContent.scss'
import { FirstContentData } from './FirstContentData.js'
export default function FirstContent() {
    return (
        <div className='container'>
            <div className='contain'>
                {FirstContentData.map((item, index) => {
                    return (
                        <div className='item-contain' key={index}>
                            <img className='image' src={item.image} alt={item.alt} />
                            <div className='item-contain-info'>
                                <p>{item.title}</p>
                                <h2>{item.description}</h2>
                                <span>{item.buy}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
