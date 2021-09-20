import React from 'react'
import logo from './logo.svg';
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Spacestagram logo that represents solar system" className="logo"/>
        <h1 className="app-name">Spacestagram</h1>
      </div>
      <span className="tagline">Tidbits from NASA's Astronomy Picture of the Day</span>
    </header>
  )
}
