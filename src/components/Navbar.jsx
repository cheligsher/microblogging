import { nanoid } from 'nanoid'
import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div key={nanoid()}>
        <nav className="nav-bar rounded-bottom mx-auto">
            <ul className="list-unstyled mx-5 d-flex flex-row py-3">
                <li><Link to={"/"} className="text-light mx-5 text-decoration-none">Home</Link></li>
                <li><Link to={"/UserProfile"} className="text-light text-decoration-none">Profile</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar