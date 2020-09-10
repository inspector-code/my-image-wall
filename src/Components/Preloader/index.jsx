import React from 'react'
import preloader from '../../img/loader.svg'
import './preloader.scss'

const Preloader = () => {
    return (
        <div className='preloader'>
            <img src={preloader} alt='preloader'/>
        </div>
    )
}

export default Preloader