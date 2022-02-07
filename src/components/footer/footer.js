/** @jsx jsx */
import { jsx, Heading, Box, Container, Text } from "theme-ui";
import { Link } from "components/link";
import menuItems from "./footer.data";
import { FaYoutube, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-section">
      <footer class="footer-distributed">
        <div class="footer-right">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <span style={{ margin: "5px", color: "#fff", fontSize: "1.2rem" }}>
              Contact Us
            </span>
          </div>
          <div>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="mailto:inovacteam@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div class="footer-left">
          <p class="footer-links">
            <a class="link-1" href="#">
              Home
            </a>

            <a href="#">About</a>
            <a href="#about">Privacy Policy</a>
            <a href="/community">Contact</a>
          </p>

          <p>INOVACT &copy; 2022</p>
        </div>
      </footer>
    </div>
  );
}
