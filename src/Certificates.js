import React from "react";

const certificates = [
  {
    title: "Google Cloud Certificate",
    provider: "Google Cloud",
    type: "Cloud Certification",
    link: "https://drive.google.com/file/d/15NSwRf07M6of0j_1EN0Q-YOvrj0ei3KF/view"
  },
  {
    title: "C++ Internship",
    provider: "CodeSoft",
    type: "Internship Certificate",
    link: "https://drive.google.com/file/d/1N99_SarQWWUqFF5u1e8f14-6iEmTLfWD/view?usp=drive_link"
  },
  {
    title: "SQL (Basic)",
    provider: "HackerRank",
    type: "Skill Certification",
    link: "https://www.hackerrank.com/certificates"
  }
];

function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Credentials</p>
          <h2>Certificates</h2>
        </div>
        <p>Industry-recognized learning and professional achievements.</p>
      </div>

      <div className="grid three">
        {certificates.map((item) => (
          <a
            className="cert-card"
            href={item.link}
            target="_blank"
            rel="noreferrer"
            key={item.title}
          >
            <div className="cert-top">
              <span>{item.type}</span>
              <span>↗</span>
            </div>
            <h3>{item.title}</h3>
            <p className="muted">{item.provider}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
