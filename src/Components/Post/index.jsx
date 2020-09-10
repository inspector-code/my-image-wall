import React, {useEffect, useState} from 'react'
import './index.scss'
import Avatar from '@material-ui/core/Avatar'
import {db, auth, storage} from '../../firebase'
import firebase from 'firebase'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import ClearIcon from '@material-ui/icons/Clear'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
    deleteComment: {
        color: 'gray',
        fontSize: '15px',
        '&:hover': {
            color: '#646464'
        },
        '&:active': {
            color: '#888888'
        }
    },
})

function Post({postId, imageUrl, caption, username, user, imageName, uid, avatarURL}) {
    const classes = useStyles()
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const [showIcon, setShowIcon] = useState(false)

    useEffect(() => {
        let unsubscribe
        if (postId) {
            unsubscribe = db
                .collection('posts')
                .doc(postId)
                .collection('comments')
                .orderBy('timestamp', 'asc')
                .onSnapshot(((snapshot) => {
                    setComments(snapshot.docs.map((doc) => ({
                            commentId: doc.id,
                            data: doc.data()
                        })
                    ))
                }))
        }
        return () => {
            unsubscribe()
        }
    }, [postId])

    const postComment = (event) => {
        event.preventDefault()

        db.collection('posts').doc(postId).collection('comments').add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            uid: auth.currentUser.uid,
        })
        setComment('')
    }

    const deleteComment = (postId, commentId) => {
        db
            .collection('posts')
            .doc(postId).collection('comments')
            .doc(commentId).delete()
            .then(function () {
                console.log('Document successfully deleted!')
            }).catch(function (error) {
            console.error('Error removing document: ', error)
        })
    }

    const deletePost = (id, fileName) => {
        db.collection('posts').doc(id).delete().then(function () {
            console.log('Document successfully deleted!')
            storage.ref(`image/${fileName}`).delete().then(function () {
                console.log('File successfully deleted!')
            }).catch(function (error) {
                console.error('Error removing document: ', error)
            });
        }).catch(function (error) {
            console.error('Error removing document: ', error)
        });
    }

    return (
        <div className='container'>
            <div className='post'>
                <div className='post__header'>
                    <div className='post__header__left'>
                        <Avatar
                            className='post__header__left__avatar'
                            alt={username}
                            src={avatarURL}
                        />
                        <div>{username}</div>
                    </div>
                    <div className='post__header__right'>
                        {auth.currentUser?.uid === uid &&
                            <IconButton aria-label='delete' onClick={() => deletePost(postId, imageName)}>
                                <DeleteIcon/>
                            </IconButton>}
                    </div>
                </div>
                <div className='post__image'>
                    <img src={imageUrl} alt=""/>
                </div>
                <div className='post__text' onMouseEnter={() => setShowIcon(true)}
                     onMouseLeave={() => setShowIcon(false)}>
                    <div className='post__text__caption'>
                        <div className='post__text__caption-userName'>
                            {username}
                        </div>
                        <div className='post__text__caption-captionText'>
                            {caption}
                        </div>
                    </div>
                    {
                        comments.map((comment) => (
                            <div key={comment.commentId} className='post__text__comments'>
                                <div className='post__text__comments__left'>
                                    <div className='post__text__comments__left-userName'>
                                        {comment.data.username}
                                    </div>
                                    <div className='post__text__comments__left-message'>
                                        {comment.data.text}
                                    </div>
                                </div>
                                <div className='post__text__comments__right'>
                                    {comment.data.uid === auth.currentUser?.uid && showIcon &&
                                        <button className='post__text__comments__right-button'
                                                onClick={() => deleteComment(postId, comment.commentId)}>
                                            <ClearIcon className={classes.deleteComment}/>
                                        </button>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                {user &&
                    <form className='post__commentBox'>
                        <input
                            className='post__commentBox__input'
                            type='text'
                            placeholder='Каментаваць...'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button
                            disabled={!comment}
                            className='post__commentBox__button'
                            type='submit'
                            onClick={postComment}
                        >
                            Адправiць
                        </button>
                    </form>
                }
            </div>
        </div>
    );
}

export default Post