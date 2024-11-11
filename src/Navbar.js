import React from 'react'
import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
            <div className='navbar_logo'>
                < img src='logo-kasa.PNG' alt='logo'></img>
            </div>
            <div>Accueil</div>
            <div>A propos</div>
    
    </nav>
  )
}

export default Navbar