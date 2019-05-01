import React from "react"
import {Link} from "react-router-dom"

export default function Navbar () {
    return(
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <Link className="navbar-brand" href="/">Home </Link>
                <Link className="navbar-brand" href="/series">Series </Link>
                <Link className="navbar-brand" href="/favorites">Favorites </Link>
            </nav>
        </div>
    )
}