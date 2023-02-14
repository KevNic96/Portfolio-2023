import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container container">
            <ul className="footer__list">

                <li>
                    <a href="#home" className='footer__link'>Inicio</a>
                </li>

                <li>
                    <a href="#about" className='footer__link'>Sobre mí</a>
                </li>

                <li>
                    <a href="#tech" className='footer__link'>Tecnologías</a>
                </li>

                <li>
                    <a href="#project" className='footer__link'>Portfolio</a>
                </li>

            </ul>

            <div className="footer__social">
                {/* <a href="https://instagram.com/" className="footer__social-link" target="_blank" rel='noreferrer'>
                    <i class="uil uil-instagram"></i>
                </a> */}
                <a href="https://twitter.com/KevFlores96" className="footer__social-link" target="_blank" rel='noreferrer'>
                    <i class="uil uil-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/kevin-flores96/" className="footer__social-link" target="_blank" rel='noreferrer'>
                    <i class="uil uil-linkedin"></i>
                </a>
                <a href="https://github.com/KevNic96" className="footer__social-link" target="_blank" rel='noreferrer'>
                    <i class="uil uil-github"></i>
                </a>
            </div>

            <span className="footer__copy">© Kevin Flores 2023. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
