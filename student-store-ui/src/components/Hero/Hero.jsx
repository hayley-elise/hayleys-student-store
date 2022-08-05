import "./Hero.css"
import * as React from "react"


export default function Hero () {

  return (
    <div className = "hero">
      <div className = "hero-header">
        <h1> Student Store </h1>
      </div>

      <div className = "hero-image">
        <img className = "image" src = "/assets/transparent_moon.png"/>
      </div>
    </div>
  )
}