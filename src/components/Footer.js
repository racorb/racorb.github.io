import React from "react";
import { aboutData } from "../constants/AboutData";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>{aboutData[0]?.name}</h3>
              <p>
                {aboutData[0]?.address}
                <br />
                <br />
                <strong>Phone:</strong> {aboutData[0]?.phone}
                <br />
                <strong>Email:</strong> {aboutData[0]?.email}
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#about">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#services">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#team">Team</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>
                You can follow our social networks to get information about our
                company and companies
              </p>
              <div className="social-links mt-3">
                {aboutData[0]?.social.map((socialItem, index) => {
                  return (
                    <a
                      href={socialItem.link}
                      className={socialItem.title}
                      key={index}
                      target="_blank"
                    >
                      <i className={socialItem.icon}></i>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>{aboutData[0]?.name}</span>
          </strong>
          | All Rights Reserved
        </div>
        <div className="credits">
          Designed by{" "}
          <a href="https://rashadalakbarov.netlify.app/" target="_blank">
            Rashad Alakbarov
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
