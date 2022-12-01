import React from 'react';
import { useSelector } from 'react-redux';
import './headerOption.css';
import { Avatar } from '@mui/material';

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const { user } = useSelector(store => store.user)

  return (
    <div className="headerOption" onClick={onClick}>
        {Icon && <Icon className='headerOption__icon' />}
        {avatar && (
            <Avatar src={user?.photoUrl} className='headerOption__icon'>{user?.email[0]}</Avatar>
        )}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption