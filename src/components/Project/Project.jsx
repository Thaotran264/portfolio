import React from 'react'
import './project.css'
const Project = ({ item }) => {
    const { image, title } = item
    return (
        <article className='single__project'>
            <div className='single__project-img'>
                <img src={image} alt='' />
            </div>
            <footer>
                <h5>{title}</h5>
            </footer>
        </article>

    )
}

export default Project