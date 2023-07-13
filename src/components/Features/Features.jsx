import React from 'react'
import data from '../../constants/data'
import './Features.css'

const Features = () => {
  return (
    <section className="features py-6" id="features">
        <div className="container">
            <div className="section-title bg-dark">
                <h2 className="text-upper text-white text-center">
                    our features
                </h2>
            </div>
            <div className="features-content grid py-6">
                {
                    data.features.map((feature, index) => {
                        return (
                            <div className="features-item text-center" key={index} data-aos="zoom-in">
                                <div className="features-item-icon">
                                    <img src={feature.icon} alt="features icon" className="mx-auto" />
                                </div>
                                <div className="features-item-text">
                                    <h2 className="text-cap">{feature.title}</h2>
                                    <p className="text mx-auto">
                                        {feature.text}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Features