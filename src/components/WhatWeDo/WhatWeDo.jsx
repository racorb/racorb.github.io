import React from 'react'
import data from '../../constants/data'
import './WhatWeDo.css'

const WhatWeDo = () => {
  return (
    <section className="what-we-do py-6" id="what-we-do">
        <div className="container">
            <div className="section-title bg-dark">
                <h2 className="text-upper text-white text-center">what we do</h2>
            </div>
            <div className="what-we-do-content">
                {
                    data.what_we_do.map((whatItem, index) => {
                        return (
                            <div className="what-we-do-item grid text-center" key={index}>
                                <div className="what-we-do-item-left"  data-aos="fade-right">
                                    <img src={whatItem.image} alt="" className="mx-auto"/>
                                </div>
                                <div className="what-we-do-item-right" data-aos="fade-left">
                                    <h4 className="text-upper fs-20">{whatItem.title}</h4>
                                    <p className="text mx-auto">{whatItem.paragraph}</p>
                                    <a href="#" className="btn btn-red">view more</a>
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

export default WhatWeDo