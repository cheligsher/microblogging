import { nanoid } from 'nanoid'
import React from 'react'
import '../styles/navbar.css'

function Navbar() {
  return (
    <div key={nanoid()}>
        <nav className="nav-bar rounded-bottom mx-auto">
            <ul className="list-unstyled mx-5 d-flex flex-row py-3">
                <li><a href="./index.html" className="text-light mx-5 text-decoration-none">Home</a></li>
                <li><a href="./profile.html" className="text-light text-decoration-none">Profile</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar