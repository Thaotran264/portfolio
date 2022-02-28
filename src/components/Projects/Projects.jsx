import React from 'react'
import Project from '../Project/Project'
import './projects.css'
import data from '../../data.js'
import { useState } from 'react'

const Projects = () => {
    const [items, setItems] = useState(data)
    const [slice, setSlice] = useState(3)

    const handleLoadMore = () => {
        setSlice(prev => prev + 3)
        console.log('slice', slice)
        console.log(items.length)
    }

    const handleShowLess = () => {
        setSlice(3)
    }

    return (
        <div className='projects__content'>
            {items.slice(0, slice).map(item =>
                <Project key={item.id} item={item} />
            )}
            <div className='btn-group'>
                {slice < items.length &&
                    <button className='btn' onClick={handleLoadMore}>Load more</button>
                }
                {
                    slice > items.length &&
                    <button className='btn' onClick={handleShowLess}>Show Less</button>

                }
            </div>
        </div>
    )
}

export default Projects