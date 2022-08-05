import "./Navbar.css"
import * as React from "react"
import {Link} from "react-router-dom"


export default function Navbar() {
  
  return (
    <nav className = "navbar">
      <div className = "nav-image">
        <Link to = {"/#"}>
          <img className = "nav-hero-img"  title = "Back to Home Page"  src = "/assets/transparent_moon.png"/>
        </Link>
      </div>

      <div className = "navigation">
        <ul className = "nav-links">
          <li> <Link to = {"/purchases"} title = "Go to Purchases Page"> Past Orders </Link> </li>
          <li> <a href = "/#About" title = "Jump to About section"> About </a> </li>
          <li> <a href = "/#Contact" title = "Jump to Contact section"> Contact Us </a> </li>
        </ul>
      </div>
    </nav>
  )
}