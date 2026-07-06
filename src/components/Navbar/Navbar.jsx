import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav-left">
        <span className="nav-logo">M.</span>
      </div>
      <div className="nav-right">
        <a href="#work" className="nav-link">Work</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  )
}
