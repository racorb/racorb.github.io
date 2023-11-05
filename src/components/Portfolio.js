import React, { useEffect, useState } from "react";
import SectionTitle from "../parts/SectionTitle";
import { navData, portfolioData } from "../constants/PortfolioData";

const Portfolio = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name == "all") {
      setProjects(portfolioData);
    } else {
      const newProjects = portfolioData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <SectionTitle
          title="Our Portfolio"
          subtitle="Check out our beautifull portfolio"
        />

        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              {navData.map((navItem, index) => {
                return (
                  <li
                    data-filter={`.filter-${navItem.name}`}
                    key={index}
                    onClick={(e) => {
                      handleClick(e, index);
                    }}
                    className={`${active === index ? "filter-active" : ""} `}
                  >
                    {navItem.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          {projects.map((portfolioItem, index) => {
            return (
              <div
                className={`col-lg-4 col-md-6 portfolio-item filter-${portfolioItem.category}`}
                key={index}
              >
                <div className="portfolio-wrap">
                  <img src={portfolioItem.image} className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <a
                      target="_blank"
                      href={portfolioItem.image}
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title={portfolioItem.title}
                    >
                      <i className="bi bi-eye"></i>
                    </a>
                    <a
                      target="_blank"
                      href={portfolioItem.url}
                      title="More Details"
                    >
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h4>{portfolioItem.title}</h4>
                    <p>{portfolioItem.category}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
