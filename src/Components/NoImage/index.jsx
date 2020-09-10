import React from 'react'
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined'
import {withStyles} from '@material-ui/core/styles'
import './index.scss'

const StyledPanoramaOutlinedIcon = withStyles({
    root: {
        color: 'lightgray',
        fontSize: '20rem'
    }
})(PanoramaOutlinedIcon);

const NoImage = () => {

    return (
        <div className='noImage-container'>
            <StyledPanoramaOutlinedIcon/>
            <div className='noImage-container__text'>Няма фатаграфiй :(</div>
        </div>
    )
}

export default NoImage;