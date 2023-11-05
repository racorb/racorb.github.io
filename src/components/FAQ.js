import React from "react";
import { faqData } from "../constants/FAQData";
import SectionTitle from "../parts/SectionTitle";

const FAQ = () => {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="F.A.Q" subtitle="Frequently Asked Questions" />

        <ul className="faq-list">
          {faqData.map((faqItem, index) => {
            return (
              <li key={index}>
                <div
                  data-bs-toggle="collapse"
                  className="collapsed question"
                  href={`#faq${faqItem.id}`}
                >
                  {faqItem.title}{" "}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                  id={`faq${faqItem.id}`}
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>{faqItem.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
