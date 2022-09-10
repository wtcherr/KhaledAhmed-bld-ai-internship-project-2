import React from "react";
import "./Footer.css";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <h3>
          Top companies choose <span>Udemy Business</span> to build in-demand
          career skills.
        </h3>
        <div className="footer-logos">
          <img
            alt="Nasdaq"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
          />
          <img
            alt="Volkswagen"
            height="44"
            width="44"
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
          />
          <img
            alt="Box"
            height="44"
            width="67"
            src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
          />
          <img
            alt="NetApp"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
          />
          <img
            alt="Eventbrite"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
          />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links-language">
          <div className="footer-links">
            <div className="footer-link">Udemy Business</div>
            <div className="footer-link">Careers</div>
            <div className="footer-link">Terms</div>
            <div className="footer-link">Teach on Udemy</div>
            <div className="footer-link">Blog</div>
            <div className="footer-link">Privacy policy</div>
            <div className="footer-link">Get the app</div>
            <div className="footer-link">Help and Support</div>
            <div className="footer-link">Cookies settings</div>
            <div className="footer-link">About us</div>
            <div className="footer-link">Affiliate</div>
            <div className="footer-link">Sitemap</div>
            <div className="footer-link">Contact us</div>
            <div className="footer-link">Investors</div>
            <div className="footer-link">Accessibility statement</div>
          </div>
          <div className="footer-language-btn">
            <LanguageIcon fontSize={"small"} />
            English
          </div>
        </div>
        <div className="footer-logo-trademark">
          <Link to="/" className="logo">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
              alt="Udemy"
              width="91.07142857142857"
              height="34"
            ></img>
          </Link>
          <div className="footer-trademark simple-text">© 2022 Udemy, Inc.</div>
        </div>
      </div>
    </div>
  );
}
