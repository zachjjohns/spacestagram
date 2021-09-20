import "./Card.css";
import React from "react";

export default function Card({ title, mediaType, url, date, explanation }) {
  return (
    <div className="card-box">
      <img alt={title} src={url} className="card-media"/>
      <p className="card-title">{title}</p>
      <p className="card-date">{date}</p>
      <p className="card-desc">{explanation}</p>
    </div>
  )
}
