import "./Header.css";

function Header({ title, tagline }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>{tagline}</p>
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
