import React from 'react'
import images from '../../constants/images'
import './Header.css'
import Navbar from '../Navbar/Navbar'

// npm install react-icons --save
import {FaPaperPlane} from 'react-icons/fa'

const Header = () => {
  return (
    <header className="header flex" id="header">
        <Navbar />
        <div className="container">
            <div className="header-content grid text-center py-6 text-white">
                <div className="header-content-left">
                    <h1 className="text-upper header-title">info-tech app Development</h1>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ipsam asperiores et expedita voluptatum corporis officia ut esse, reprehenderit sunt aliquid nam illo sequi quas. Libero suscipit animi exercitationem sapiente.
                    </p>
                    <a href="#" className="btn btn-dark">
                        <span>view more</span> <FaPaperPlane/>
                    </a>
                </div>
                <div className="header-content-right">
                    <img src={images.header_device} alt="devices_images" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header