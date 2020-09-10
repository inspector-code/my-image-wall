import React from 'react'
import Button from '@material-ui/core/Button'
import {auth} from '../../firebase'
import './index.scss'

function Header({user, setOpenSignIn, setOpen, userDisplayName, loginProgress}) {
    return (
        <div className='header'>
            <div className='container'>
                <div className='header__content'>
                    <div className='header__content__logo'>
                        Фотакарткi<span
                        className='header__content__logo-userName'>
                        {user && !loginProgress ? `@${userDisplayName || user.displayName}` :
                            !loginProgress && !user && '@not logged'}
                    </span>
                    </div>
                    {user && !loginProgress ?
                        <div className='header__content__buttons-signOut'>
                            <Button onClick={() => auth.signOut()}>Выйсцi</Button>
                        </div>
                        : !loginProgress && !user &&
                        <div className='header__content__buttons-signInOut'>
                            <Button onClick={() => setOpenSignIn(true)}>Уваход</Button>
                            <Button onClick={() => setOpen(true)}>Новы</Button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header