import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { GoPlus } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { GeneralFaq, OtherFaq } from './FaqData'
import './FaqPage.scss'
export default function FaqPage() {
    return (
        <div className='faq-page'>
            <div className='intro'>
                <div className='container'>
                    <h2>Frequently Asked Question</h2>
                    <div className='link'>
                        <Link to='/ReactJS'>Home</Link>
                        <AiOutlineRight />
                        <h4>Faq</h4>
                    </div>
                </div>
            </div>
            <div className='faq-content'>
                <div className='container'>
                    <div className='question'>
                        <h2>General Questions</h2>
                        {GeneralFaq.map((data, index) => {
                            return (
                                <div className='item-ans'>
                                    <div className='title d-flex'>
                                        <h3>{data.question}</h3>
                                        <GoPlus />
                                    </div>
                                    <p>{data.answer}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='question'>
                        <h2>Other Questions</h2>
                        {OtherFaq.map((data, index) => {
                            return (
                                <div className='item-ans'>
                                    <div className='title d-flex'>
                                        <h3>{data.question}</h3>
                                        <GoPlus />
                                    </div>
                                    <p>{data.answer}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
