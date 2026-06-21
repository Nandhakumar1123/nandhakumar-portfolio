import React from "react";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <h2>Experience</h2>
        <p>Hands-on work and real-world exposure.</p>
      </div>

      <div className="grid two">
        <div className="card">
          <div className="card-top">
            <div>
              <h3>PDC, Coimbatore Institute of Technology</h3>
              <p className="project-date">June 2025</p>
            </div>
            <span className="tag">15-day Internship</span>
          </div>
          <p className="muted">Full Stack Internship • Coimbatore, India</p>
          <ul className="bullet-list">
            <li>
              Internship certificate: {" "}
              <a
                href="https://drive.google.com/file/d/1tcZZi5X6v1RwHf50TwAvZ-EulEJhXXIs/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                PDC Internship Certificate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
