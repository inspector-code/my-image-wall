import React, {useState} from 'react'
import Modal from '@material-ui/core/Modal'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import {auth, storage} from '../../firebase'
import './index.scss'
import {generateName} from '../common/nameGenerator'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import ClearIcon from '@material-ui/icons/Clear'

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 315,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        outline: `none`
    },
    input: {
        display: 'none',
    },
    deleteImage: {
        color: 'gray',
        fontSize: '15px',
        '&:hover': {
            color: '#646464'
        },
        '&:active': {
            color: '#888888'
        }
    },
}))

function SignModal({open, openSignIn, setOpen, setOpenSignIn, setUserDisplayName}) {

    const classes = useStyles();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)

    const signUp = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                if (image) {
                    const fileName = generateName()
                    const uploadTask = storage.ref(`avatars/${fileName}`).put(image)
                    uploadTask.on(
                        'state_changed',
                        () => {
                        },
                        (error) => {
                            alert(error.message)
                        },
                        () => {
                            storage
                                .ref('avatars')
                                .child(fileName)
                                .getDownloadURL()
                                .then(url => {
                                    return authUser.user.updateProfile({
                                        photoURL: url
                                    })
                                })
                        }
                    )
                }
                authUser.user.updateProfile({
                    displayName: username
                }).then(() => {
                    setUserDisplayName(username)
                    setImage(null)
                    setOpen(false)
                })
            })
            .catch((error) => alert(error.message))
    }

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error.message))
        setOpenSignIn(false)
    }

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    return (
        <>
            <Modal
                open={openSignIn}
                onClose={() => setOpenSignIn(false)}
            >
                <div className={classes.paper}>
                    <form className='modal__sign'>
                        <div className='modal-logo'>
                            Фотакарткi
                        </div>
                        <Input
                            placeholder='E-mail'
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            placeholder='Password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type='submit' onClick={signIn}>Увайсцi</Button>
                    </form>
                </div>
            </Modal>

            <Modal
                open={open}
                onClose={() => {
                    setOpen(false)
                    setImage(null)
                }}
            >
                <div className={classes.paper}>
                    <form className='modal__sign'>
                        <div className='modal-logo'>
                            Фотакарткi
                        </div>
                        <Input
                            placeholder='Username'
                            type='text'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            placeholder='E-mail'
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            placeholder='Password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className='uploadAvatarForm'>
                            <span>Аватар:</span>
                            {image ?
                                <div className='uploadAvatarForm__nameButton'>
                                    <span className='uploadAvatarForm__nameButton__imageName'>{image.name}</span>
                                    <button className='uploadAvatarForm__nameButton__deleteImageButton'
                                            onClick={() => {
                                                setImage(null)
                                            }}>
                                        <ClearIcon className={classes.deleteImage}/>
                                    </button>
                                </div>
                                :
                                <div className='uploadAvatarForm__button'>
                                    <input className={classes.input} id='icon-button-file' type='file'
                                           onChange={handleChange}/>
                                    <label htmlFor='icon-button-file'>
                                        <IconButton color='secondary' aria-label='upload picture' component='span'>
                                            <PhotoCamera/>
                                        </IconButton>
                                    </label>
                                </div>
                            }
                        </div>
                        <Button type='submit' onClick={signUp}>Зарэгiстравацца</Button>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default SignModal