import { NavLink } from 'react-router-dom'
import '../styles/nav.css'


export default function Nav(){
return (
<header className="nav">
<div className="nav__inner">
<div className="nav__brand">
<img src="/images/logo.svg" alt="Logo" className="nav__logo" />
<span className="nav__title">Atlanta Sports Hub</span>
</div>
{/* Per spec, no JS toggle required yet. On small screens the nav stacks vertically via CSS. */}
<nav className="nav__links" aria-label="Primary">
<NavLink to="/" className={({isActive})=> isActive ? 'active' : undefined}>Hub</NavLink>
<NavLink to="/birds-of-prey" className={({isActive})=> isActive ? 'active' : undefined}>Birds of Prey</NavLink>
<NavLink to="/powerhouses" className={({isActive})=> isActive ? 'active' : undefined}>Powerhouses</NavLink>
<NavLink to="/history" className={({isActive})=> isActive ? 'active' : undefined}>The History</NavLink>
<NavLink to="/about" className={({isActive})=> isActive ? 'active' : undefined}>About Us</NavLink>
<NavLink to="/contact" className={({isActive})=> isActive ? 'active' : undefined}>Contact Us</NavLink>
</nav>
</div>
</header>
)
}