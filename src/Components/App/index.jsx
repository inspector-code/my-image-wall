import React, {useEffect, useState} from 'react'
import './index.scss'
import Post from '../Post'
import {db, auth} from '../../firebase'
import ImageUpload from '../ImageUpload'
import {TransitionGroup} from 'react-transition-group'
import CSSTransition from 'react-transition-group/CSSTransition'
import SignModal from '../SignModal'
import Header from '../Header'
import NoImage from '../NoImage'
import Preloader from '../Preloader';

function App() {
    const [posts, setPosts] = useState([])
    const [open, setOpen] = useState(false)
    const [openSignIn, setOpenSignIn] = useState(false)
    const [user, setUser] = useState(null)
    const [userDisplayName, setUserDisplayName] = useState('')
    const [loading, setLoading] = useState(false)
    const [loginProgress, setLoginProgress] = useState(false)

    useEffect(() => {
        setLoginProgress(true)
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser)
                setLoginProgress(false)
            } else {
                setUser(null)
                setLoginProgress(false)
            }
        })
        return () => {
            unsubscribe()
        }
    }, [user])

    useEffect(() => {
        setLoading(true)
        db
            .collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    post: doc.data()
                })))
                setLoading(false)
            })
    }, [])

    return (
        <>
            <div className='image-wall'>
                <Header
                    loginProgress={loginProgress}
                    user={user}
                    setOpenSignIn={setOpenSignIn}
                    setOpen={setOpen}
                    userDisplayName={userDisplayName}
                />
                {!posts.length && !loading ? <NoImage/> :
                    loading ? <Preloader/> :
                        <TransitionGroup>
                            {posts.map(({id, post}) => (
                                <CSSTransition
                                    key={id}
                                    classNames='postEffect'
                                    timeout={{enter: 800, exit: 300}}
                                >
                                    <Post postId={id}
                                          avatarURL={post.avatarURL}
                                          imageName={post.imageName}
                                          user={user}
                                          uid={post.uid}
                                          username={post.username}
                                          caption={post.caption}
                                          imageUrl={post.imageUrl}/>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                }
                <SignModal
                    setUserDisplayName={setUserDisplayName}
                    setUser={setUser}
                    open={open}
                    openSignIn={openSignIn}
                    setOpen={setOpen}
                    setOpenSignIn={setOpenSignIn}
                />
                {user ? <ImageUpload/> : ''}
            </div>
            <div className='footer'>Фотакарткi by @bamboleylo</div>
        </>
    )
}

export default App
