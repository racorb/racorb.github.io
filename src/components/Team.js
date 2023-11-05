import React from "react";
import SectionTitle from "../parts/SectionTitle";
import { teamData } from "../constants/TeamData";

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="container">
        <SectionTitle
          title="Our Team"
          subtitle="Our team is always here to help"
        />

        <div className="row">
          {teamData.map((member, index) => {
            return (
              <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                <div className="member">
                  <img src={member.image} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>{member.name}</h4>
                      <span>{member.position}</span>
                    </div>
                    <div className="social">
                      {member.social.map((social, index) => {
                        return (
                          <a href={social.link} key={index} target="_blank">
                            <i className={social.icon}></i>
                          </a>
                        );
                      })}
                    </div>
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

export default Team;
