import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import {db, storage, auth} from '../../firebase'
import firebase from 'firebase'
import './index.scss'
import clsx from 'clsx'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import {green} from '@material-ui/core/colors'
import Fab from '@material-ui/core/Fab'
import CheckIcon from '@material-ui/icons/Check'
import SaveIcon from '@material-ui/icons/Save'
import Input from '@material-ui/core/Input'
import {generateName} from '../common/nameGenerator'
import IconButton from "@material-ui/core/IconButton"
import AddCircleIcon from '@material-ui/icons/AddCircle'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

const StyledIconButton = withStyles({
    root: {
        position: 'fixed',
        bottom: '15px',
        left: '50%',
        transform: 'translate(-50%, 0)'
    }
})(IconButton);

const StyledAddCircleIcon = withStyles({
    root: {
        fontSize: '4rem'
    }
})(AddCircleIcon);

const StyledSwipeableDrawer = withStyles({
    paper: {
        maxWidth: '600px',
        margin: '0 auto'
    }
})(SwipeableDrawer);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignSelf: 'center',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    customButton: {
        position: 'fixed',
        bottom: '15px',
        left: '50%',
        transform: `translate(-50%, 0)`,
        'svg': {
            fontSize: '40px'
        }
    },
    captionInput: {
        marginBottom: '20px',
    },
    input: {
        display: 'none',
    },
    inputRoot: {
        '& > *': {
            margin: theme.spacing(1),
        },
        alignSelf: 'center'
    },
}));

function ImageUpload() {
    const classes = useStyles()
    const [image, setImage] = useState(null)
    const [caption, setCaption] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [showMenu, setShowMenu] = React.useState(false);

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    })

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const toggleDrawer = (open, caption, image) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }
        setShowMenu(open)
        setCaption(caption)
        setImage(image)
    }

    const handleUpload = () => {
        const fileName = generateName()
        const uploadTask = storage.ref(`image/${fileName}`).put(image)

        uploadTask.on(
            'state_changed',
            () => {
                setSuccess(false)
                setLoading(true)
            },
            (error) => {
                alert(error.message)
            },
            () => {
                storage
                    .ref('image')
                    .child(fileName)
                    .getDownloadURL()
                    .then(url => {
                        db.collection('posts').add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            imageName: fileName,
                            username: auth.currentUser.displayName,
                            uid: auth.currentUser.uid,
                            avatarURL: auth.currentUser.photoURL
                        }).then(() => {
                            setShowMenu(false)
                            setLoading(false)
                            setCaption('')
                            setImage(null)
                        })
                    })
            }
        )
    }

    return (
        <>
            <StyledIconButton
                color='secondary'
                aria-controls='customized-menu'
                aria-haspopup='true'
                onClick={toggleDrawer(true)}
            >
                <StyledAddCircleIcon/>
            </StyledIconButton>
            <StyledSwipeableDrawer
                anchor='bottom'
                open={showMenu}
                onClose={toggleDrawer(false, '', null)}
                onOpen={toggleDrawer(true)}
            >
                <div className='imageUpload'>
                    <Input
                        className={classes.captionInput}
                        placeholder='Увядзi загаловак...'
                        type='text'
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />
                    {image ?
                        <>
                            <div className='imageName'>{image.name}</div>
                            <div className={classes.root}>
                                <div className={classes.wrapper}>
                                    <Fab
                                        aria-label='save'
                                        color='primary'
                                        className={buttonClassname}
                                        onClick={handleUpload}
                                        disabled={!caption}
                                    >
                                        {success ? <CheckIcon/> : <SaveIcon/>}
                                    </Fab>
                                    {loading && <CircularProgress size={68} className={classes.fabProgress}/>}
                                </div>
                            </div>
                        </>
                        :
                        <div className={classes.inputRoot}>
                            <input
                                className={classes.input}
                                id='contained-button-file'
                                multiple
                                type='file'
                                onChange={handleChange}
                            />
                            <label htmlFor={caption ? 'contained-button-file' : ''}>
                                <Button variant='contained' color='primary' component='span' disabled={!caption}>
                                    Выбраць файл
                                </Button>
                            </label>
                        </div>
                    }
                </div>
            </StyledSwipeableDrawer>
        </>
    )
}

export default ImageUpload