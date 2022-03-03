import React from 'react'
import './project.css'
const Project = ({ item }) => {
    const { image, title } = item
    return (
        <a className='single__links' href={item.live} target="_blank">
            <article className='single__project'>
                <div className='single__project-img'>
                    <img src={image} alt='' />
                </div>
                <footer>
                    <h5>{title}</h5>
                </footer>
            </article>

        </a>
    )
}

export default Project