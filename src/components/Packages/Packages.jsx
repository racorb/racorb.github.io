import React from 'react'
import data from '../../constants/data'
import './Packages.css'

const Packages = () => {
  return (
    <section className="packages py-6" id="packages">
        <div className="container">
            <div className="section-title bg-dark">
                <h2 className="text-upper text-white text-center">
                    our packages
                </h2>
            </div>
            <div className="package-content grid py-6">
                {
                    data.packages.map((packg, index) => {
                        return (
                            <div className="package-item text-center mx-auto" key={index}>
                                <h3 className="package-item-title">{packg.type}</h3>
                                <ul className="package-item-list">
                                    {
                                        packg.service_list.map((service, idx) => {
                                            return (
                                                <li key={idx}>{service}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="package-item-price">
                                    <span>${packg.price}</span> /mo.
                                </div>
                                <a href="#" className="btn btn-red">order now</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Packages