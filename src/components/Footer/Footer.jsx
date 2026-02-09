import "./Footer.css";

function Footer({ name }) {
  return (
    <footer className="footer">
      <p>Copyright notice: "© 2024 {name}"</p>
    </footer>
  );
}

export default Footer;
