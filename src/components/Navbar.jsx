import { nanoid } from "nanoid";
import React from "react";
import "../styles/profile.css";
import { NavLink, useNavigate } from "react-router-dom";
import "../images/greenbird.png"

function Navbar() {

  const navigate = useNavigate()
  return (
    <div key={nanoid()}>
      <nav className="nav-bar rounded-bottom mx-auto">
        <ul className="list-unstyled mx-5 d-flex flex-row py-3">
          <li>
            <NavLink
              to={"/"}
              className="px-3 text-decoration-none py-3 link align-middle"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/UserProfile"}
              className="px-3 text-decoration-none py-3 link align-middle"
              activeClassName="active"
            >
              Profile
            </NavLink>
          </li>
          <div className="ms-auto">
            <li>
              <button className="text-decoration-none chirp" onClick={()=> navigate("/")}>
                Chirp
                <img src={require('../images/greenbird.png')} alt="" className="bird-img ms-2" />
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
