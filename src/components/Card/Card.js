import "./Card.css";
import React, { useState } from "react";
import Heart from "react-animated-heart";

export default function Card({ title, mediaType, url, date, explanation }) {
  const [isClick, setClick] = useState(false);
  return (
    <div className="card-container">
      <img alt={title} src={url} className="card-media" />
      <p className="card-title">{title}</p>
      <p className="card-date">Date Posted: {date}</p>
      <p className="card-desc">{explanation}</p>
      <div className="btn-div">
        <Heart
          isClick={isClick}
          onClick={() => setClick(!isClick)}
        />
      </div>
    </div>
  );
}
