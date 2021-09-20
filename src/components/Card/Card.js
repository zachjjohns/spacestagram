import "./Card.css";
import React from "react";

export default function Card({ title, mediaType, url, date, explanation }) {
  return (
    <div className="card-container">
      <span></span>
      <img alt={title} src={url} />
    </div>
  )
}
