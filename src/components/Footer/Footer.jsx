import React from 'react'
import './Footer.css'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-6" id="footer">
        <div className="container">
            <div className="footer-content text-center">
                <div className="footer-item-group grid">
                    <div className="footer-item">
                        <h3 className="footer-item-title text-upper">
                            portfolio
                        </h3>
                        <ul className="footer-item-links">
                            <li><a href="#" className="text-cap">Web Design</a></li>
                            <li><a href="#" className="text-cap">Branding itentity</a></li>
                            <li><a href="#" className="text-cap">mobile design</a></li>
                            <li><a href="#" className="text-cap">Print</a></li>
                            <li><a href="#" className="text-cap">user interface</a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h3 className="footer-item-title text-upper">
                            about
                        </h3>
                        <ul className="footer-item-links">
                            <li><a href="#" className="text-cap">The company</a></li>
                            <li><a href="#" className="text-cap">History</a></li>
                            <li><a href="#" className="text-cap">Vision</a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h3 className="footer-item-title text-upper">
                            gallery
                        </h3>
                        <ul className="footer-item-links">
                            <li><a href="#" className="text-cap">Flicker</a></li>
                            <li><a href="#" className="text-cap">Picasa</a></li>
                            <li><a href="#" className="text-cap">iStockPhoto</a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h3 className="footer-item-title text-upper">
                            contact
                        </h3>
                        <ul className="footer-item-links">
                            <li><a href="#" className="text-cap">basic Info</a></li>
                            <li><a href="#" className="text-cap">Map</a></li>
                            <li><a href="#" className="text-cap">Contact Form</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-social-icons flex flex-center">
                    <a href="#" className="bg-red flex flex-center"><FaFacebookF/></a>
                    <a href="#" className="bg-red flex flex-center"><FaTwitter/></a>
                    <a href="#" className="bg-red flex flex-center"><FaInstagram/></a>
                    <a href="#" className="bg-red flex flex-center"><FaLinkedin/></a>
                </div>
                <div className="footer-bottom-text">
                    <p className="text fs-16">Copyright &copy; 2023 racorb. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer