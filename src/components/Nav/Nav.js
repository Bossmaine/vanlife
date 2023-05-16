import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <Link to='/home'>
        <h2>#VANLIFE</h2>
        </Link>
      </div>
      <div className="nav-links">
        <Link to='/about'>
            About
        </Link>
        <Link to='/vans'>
            Vans
        </Link>
      </div>
    </nav>
  )
}
