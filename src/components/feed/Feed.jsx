import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import './feed.css';
import FlipMove from 'react-flip-move';
import Posts from '../posts/Posts';

import CreateIcon from '@mui/icons-material/Create';
import InputOption from './inputOption/InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

import {collection, orderBy, query, onSnapshot, serverTimestamp} from 'firebase/firestore';

import { db } from '../../firebase';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('')
    const { user } = useSelector(store => store.user)


    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));

        const getPost = onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        });
        return () =>{
            getPost();
        }
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: serverTimestamp(),
        });

        setInput('');
    };

  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                    <button type="submit" onClick={sendPost}>Send</button>
                </form>
            </div>

            <div className="feed__inputOptions">
                <InputOption title='Photo' Icon={ImageIcon} color='#7005f9'/>
                <InputOption title='Video' Icon={SubscriptionsIcon} color='#E7A33E'/>
                <InputOption title='Event' Icon={EventNoteIcon} color='#C0C0CD'/>
                <InputOption title='Write article' Icon={CalendarViewDayIcon} color='#7FC15E'/>
            </div>
        </div>

        {/* Posts */}
        <FlipMove>
        {posts.map(({ id, data: {name, description, message, photoUrl }}) => (
            <Posts 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
        ))}
        </FlipMove>

    </div>
  )
}

export default Feed