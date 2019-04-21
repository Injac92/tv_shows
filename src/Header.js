import React from "react";
// import "./Header.css";

export default function Header(props){
return (
<div className="navbar">
    <h1 className="navbar-brand">TV SHOW</h1>
    <input className="nav-item"type="text" onChange={props.onSearch} />    
</div>)

}