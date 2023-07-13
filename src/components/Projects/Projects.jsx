import React from 'react'
import data from '../../constants/data'
import './Projects.css'

const Projects = () => {
  return (
    <section className="projects py-6" id="projects">
        <div className="container">
            <div className="section-title bg-dark">
                <h2 className="text-upper text-white text-center">our projects</h2>
            </div>
            <div className="projects-content grid py-6">
                {
                    data.projects.map((project, index) => {
                        return (
                            <div className="projects-item text-center" key={index} data-aos="zoom-in">
                                <img src={project.img} alt="" className="mx-auto" />
                                <h4 className="text-upper">{project.title}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Projects