import { nanoid } from 'nanoid'
import React from 'react'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div key={nanoid()}>
        <nav className="nav-bar rounded-bottom mx-auto">
            <ul className="list-unstyled mx-5 d-flex flex-row py-3">
                <li><NavLink to={"/"} className="px-3 text-decoration-none py-3" activeClassName="active">Home</NavLink></li>
                <li><NavLink to={"/UserProfile"} className="px-3 text-decoration-none py-3" activeClassName="active">Profile</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar