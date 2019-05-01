import React from "react"
//import {NavLink} from "react-router-dom"

export default function Navbar () {
    return(
        <div>
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="/series">Series</NavLink>
            <NavLink to="/favorites">Favorites</NavLink> */}
            
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Home </a>
                <a className="navbar-brand" href="/series">Series </a>
                <a className="navbar-brand" href="/favorites">Favorites </a>
            </nav>
        </div>
    )
}