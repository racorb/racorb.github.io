import React from "react";
import { serviceData } from "../constants/ServiceData";
import SectionTitle from "../parts/SectionTitle";

const Service = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container">
        <SectionTitle
          title="Services"
          subtitle="Check out the great services we offer"
        />

        <div className="row">
          {serviceData.map((serviceItem, index) => {
            return (
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                key={index}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className={serviceItem.icon}></i>
                  </div>
                  <h4 className="title">{serviceItem.title}</h4>
                  <p className="description">{serviceItem.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
