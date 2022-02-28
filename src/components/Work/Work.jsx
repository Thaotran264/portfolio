import React from 'react'
import './work.css'
import Projects from '../Projects/Projects'

const Work = () => {
    return (
        <section id='work' className='work__container'>
            <div className='work__title'>
                <h2>My Project</h2>
                <div className='underline'></div>
            </div>
            <Projects />
        </section>
    )
}

export default Work