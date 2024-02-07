import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <Link to='/'>Front</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
    </nav>
  )
}
