import React from 'react'
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>     
        <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/blogs">Blogs</Link>
    <Link to="/contact">Contact</Link>
  </nav>
  </div>
  )
}
