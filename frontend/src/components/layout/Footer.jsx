import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Heart, ShieldCheck, Globe } from 'lucide-react';
import './Footer.css';

/**
 * Footer — simple site footer with links and attribution.
 */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      {/* svg wave */}
      <div className="footer__wave-container">
        <svg className="footer__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path
              id="thin-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 58-18 88-18 58 18 88 18"
            />
          </defs>
          <g className="footer__wave-parallax">
            <use href="#thin-wave" x="48" y="0" fill="none" stroke="var(--color-primary)" strokeWidth="1" opacity="0.3" />
            <use href="#thin-wave" x="48" y="3" fill="none" stroke="var(--color-primary)" strokeWidth="2" opacity="0.6" />
          </g>
        </svg>
      </div>

      <div className="footer__container">

        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">
              <span aria-hidden="true" className="footer__logo-icon">📷</span>
              SnapPass AI
            </span>
            <p className="footer__tagline">
              Your open-source AI passport photo studio.<br />Fast, private, and completely free to use.
            </p>
          </div>

          <div className="footer__info-grid">

            <div className="footer__info-card">
              <ShieldCheck className="footer__info-icon" size={20} />
              <div>
                <h4>Privacy First</h4>
                <p>Your photos stay secure and are processed safely.</p>
              </div>
            </div>

            <div className="footer__info-card">
              <Globe className="footer__info-icon" size={20} />
              <div>
                <h4>Open Source</h4>
                <p>Built transparently for developers and creators.</p>
              </div>
            </div>

            <div className="footer__socials">
              <a
                href="https://github.com/souma9830/SnapPass-AI"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <ExternalLink size={18} />
                GitHub
              </a>
            </div>

          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} SnapPass AI. Released under the MIT License.
          </p>
          <p className="footer__status">
            Built with ❤️ for the open-source community
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;