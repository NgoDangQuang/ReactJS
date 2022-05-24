import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import './PageNotFound.scss'

export default function PageNotFound() {
    return (
        <div className='PageNotFound'>
            <div className='intro'>
                <div className='container'>
                    <h2>Page Not Found</h2>
                    <div className='link'>
                        <Link to='/ReactJS'>Home</Link>
                        <AiOutlineRight />
                        <h4>Error 404</h4>
                    </div>
                </div>
            </div>
            <div className='error-page'>
                <div className='error-content'>
                    <h2>404</h2>
                    <h4>oops! The page you requested was not found!</h4>
                    <p>The page you are looking for was moved, removed, renamed or might never existed.</p>
                    <div className='search'>
                        <input type='text' placeholder='Search' />
                        <button><FiSearch/></button>
                    </div>
                    <button type='submit' className='submit'><Link to='/ReactJS'>Go to HomePage</Link></button>
                </div>
            </div>
        </div>
    )
}
