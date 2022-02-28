import React from 'react'
import IMG from '../../images/logo.svg'
import './header.css'

const Header = () => {
    return (
        <section className='header__container'>
            <div className='header__content'>
                <div className='header__text'>
                    <h1>I'm Rm Tran</h1>
                    <p>I am looking for a front-end internship to improve my skills and gain more experiences.</p>
                    <button className='btn header__text-btn'>Contact me</button>
                </div>

                <img src={IMG} alt='' className='header__img' />
            </div>
        </section>
    )
}

export default Header