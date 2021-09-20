import "./Card.css";
import React from "react";

export default function Card({ title, mediaType, url, date, explanation }) {
  return (
    <div className="card-container">
      <img alt={title} src={url} className="card-media"/>
      <p className="card-title">{title}</p>
      <p className="card-date">Date Taken: {date}</p>
      <p className="card-desc">{explanation}</p>
      <div className="btn-div">
        <button className="like-btn">Like</button>
        <button className="share-btn">Share</button>
      </div>
    </div>
  )
}
