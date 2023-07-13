import React from 'react'
import data from '../../constants/data'
import './Teams.css'

const Teams = () => {
  return (
    <section className="team py-6 bg-red" id="teams">
        <div className="container">
            <div className="section-title bg-dark">
                <h2 className="text-upper text-white text-center">our team</h2>
            </div>
            <div className="team-content grid py-6">
                {
                    data.teams.map((team, index) => {
                        return (
                            <div className="team-item text-center text-white" key={index} data-aos="fade-up">
                                <img src={team.img} alt="" className="mx-auto"/>
                                <p className="text-upper fw-7">{team.name}</p>
                                <span className="text-upper">{team.post}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Teams