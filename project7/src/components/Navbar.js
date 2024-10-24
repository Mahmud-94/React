import React from 'react'
import {Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    

    <Link to={"/"}>Home</Link>
    <Link to={"About"}>About</Link>
    <Link to={"Contact"}>Contact</Link>

    </>
  )
}
