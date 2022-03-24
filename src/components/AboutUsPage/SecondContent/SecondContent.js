import React from 'react'
import './SecondContent.scss'
import { dataContent } from './SecondContentData.js'
export default function SecondContent() {
    return (
        <div className='second-content'>
            <div className='container'>
                <div className='title'>
                    <h2>Why Choose Us?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <div className='row'>
                    {dataContent.map((data, index) => {
                        return (
                            <div className='items col-12 col-md-6 col-lg-4' key={index}>
                                <div className='item'>
                                    <div className='icons'>
                                        {data.icon}
                                    </div>
                                    <div className='item-content'>
                                        <h3>{data.title}</h3>
                                        <p>{data.content}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
