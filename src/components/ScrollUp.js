import React from "react";

const ScrollUp = () => {
  const toggleBacktotop = () => {
    const backtotop = document.querySelector(".back-to-top");
    if (window.scrollY > 100) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  };
  window.addEventListener("scroll", toggleBacktotop);
  return (
    <a
      href="#"
      className="back-to-top d-flex align-items-center justify-content-center"
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollUp;
