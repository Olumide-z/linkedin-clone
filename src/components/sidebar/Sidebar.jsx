import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import './sidebar.css';

const Sidebar = () => {
    const { user } = useSelector(store => store.user)

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1620055374842-145f66ec4652?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="background" />
            <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who Viewed you</p>
                <p className="sidebar__statNumber">2,456</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,336</p>
            </div>
        </div>

        <div className="sidebar__button">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('software development')}
            {recentItem('design')}
        </div>
    </div>
  )
}

export default Sidebar