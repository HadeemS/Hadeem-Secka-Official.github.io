import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../styles/nav.css'


export default function Nav(){
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  const closeNav = () => {
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <div className="navbar">
        <div className="brand">
          <NavLink to="/" className="brand-link" onClick={closeNav}>
            <img className="brand-logo" src="/images/logo-gameday-wordmark-red.svg" alt="GameDay" />
          </NavLink>
        </div>

        <button 
          className="nav-toggle" 
          aria-controls="primary-nav" 
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span aria-hidden="true"></span>
        </button>

        <nav id="primary-nav" className={`nav ${isOpen ? 'is-open' : ''}`} aria-label="Primary">
          <NavLink to="/" className={({isActive}) => isActive ? 'active' : undefined} onClick={closeNav}>Home</NavLink>
          <NavLink to="/teams" className={({isActive}) => isActive ? 'active' : undefined} onClick={closeNav}>Teams</NavLink>
          <NavLink to="/schedule" className={({isActive}) => isActive ? 'active' : undefined} onClick={closeNav}>Schedule</NavLink>
          <NavLink to="/news" className={({isActive}) => isActive ? 'active' : undefined} onClick={closeNav}>News</NavLink>
          <NavLink to="/favorites" className={({isActive}) => isActive ? 'active' : undefined} onClick={closeNav}>Favorites</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : undefined} onClick={closeNav}>Contact Us</NavLink>
        </nav>
      </div>
    </header>
  )
}