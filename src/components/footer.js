import React from "react";

export default function Footer() {
  return (
    <section 
      id="contact"
      style={{
        display: "flex"
      }}
    >
      <div 
        className="footer-container"
        style={{
          display: "flex"
        }}
      >
        <h4
          style={{
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          Yassin Ali Sheikh
        </h4>
        <a 
          href="" 
          target="_blank"
          style={{
            marginRight: 10,
          }}
        >
          <div className="icon-text-container">
            <i className="bi bi-github"></i>
            <p id="icon-text">Github</p>
          </div>
        </a>
        <a href="" target="_blank">
          <div className="icon-text-container">
            <i className="bi bi-linkedin"></i>
            <p id="icon-text">LinkedIn</p>
          </div>
        </a>
      </div>
    </section>
  );
}