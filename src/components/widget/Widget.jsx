import { FiberManualRecord, InfoOutlined } from '@mui/icons-material'
import React from 'react'
import './widget.css';

const Widget = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widget__article">
            <div className="widget__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

  return (
    <div className="widget">
        <div className="widget__header">
            <h2>LinkedIn News</h2>
            <InfoOutlined />
        </div>

        {newsArticle("OLUMIDE React is back", "Top news - 9000 readers")}
        {newsArticle("OLUMIDE React is back", "Top news - 9000 readers")}
        {newsArticle("OLUMIDE React is back", "Top news - 9000 readers")}
        {newsArticle("OLUMIDE React is back", "Top news - 9000 readers")}
        {newsArticle("OLUMIDE React is back", "Top news - 9000 readers")}
    </div>
  )
}

export default Widget