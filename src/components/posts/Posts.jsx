import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react';
import InputOption from '../feed/inputOption/InputOption';
import './posts.css';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="posts">
        <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpIcon} title='Like' color='gray'/>
            <InputOption Icon={ChatIcon} title='Comment' color='gray'/>
            <InputOption Icon={ShareIcon} title='Share' color='gray'/>
            <InputOption Icon={SendIcon} title='Send' color='gray'/>
        </div>
    </div>
  )
})

export default Posts