import React from 'react'
import images from '../../constants/images'
import './Support.css'

const Support = () => {
  return (
    <section className="support py-6" id="support">
        <div className="container">
            <div className="section-title bg-dark">
                <h2 className="text-upper text-white text-center">updates & support</h2>
            </div>
            <div className="support-content grid py-6 text-center">
                <div className="support-content-left" data-aos="fade-right">
                    <p className="text mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vel pariatur minima distinctio, qui atque architecto quasi illo, deserunt, corrupti tenetur neque reiciendis accusamus repellendus suscipit labore. Provident, necessitatibus tenetur!</p>
                    <p className="text mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis officiis, aut pariatur, dicta hic quia consequuntur, provident ex a incidunt ut quis velit! </p>
                    <a href="#" className="btn btn-red">support center</a>
                </div>
                <div className="support-content-right" data-aos="fade-left">
                    <img src={images.header_device} alt="" className="mx-auto" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Support