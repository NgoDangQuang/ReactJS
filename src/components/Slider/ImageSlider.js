import React, { useState } from 'react'
import { SliderData } from './SliderData.js'
import { AiOutlineRightCircle, AiOutlineLeftCircle } from 'react-icons/ai'
import './Slider.scss'

export default function ImageSlider({ slides }) {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    console.log(current)
    return (
        <section className='slider'>
            <AiOutlineLeftCircle className='left-arrow' onClick={prevSlide} />
            <AiOutlineRightCircle className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <div className='btn'>
                                <img src={slide.image} alt='image banner' className='image' />
                                <div className='container'>
                                    <div className='btn-content'>
                                        <p>{slide.sale}</p>
                                        <h2>{slide.type}</h2>
                                        <span>{slide.buy}</span>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>
                )
            })}
        </section>
    )
}
