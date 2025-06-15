import "../styles/Footer.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logoblue.png";

function Footer() {
  const location = useLocation();
  const selectedPage = location.pathname;

  return (
    <footer
      className={
        selectedPage === "/"
          ? "footer-position-fixed"
          : "footer-position-static"
      }
    >
      <section className="footer-site-information">
        <h3>Street Art Hunter</h3>
        <p>La chasse au street art peut commencer !</p>
        <p>2024</p>
      </section>
      <img src={logo} alt="logo de l'application" className="footer-logo" />
      <nav>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/credits">Crédits</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
