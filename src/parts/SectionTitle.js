import React from "react";

const SectionTitle = (props) => {
  return (
    <div className="section-title" data-aos="fade-up">
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default SectionTitle;
