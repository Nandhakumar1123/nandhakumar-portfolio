import React from "react";

const projects = [
  {
    title: "AgoraHub",
    subtitle:
      "Empowering Communities through Collaborative Governance and Intelligent Decision-Making",
    date: "November 2025 – April 2026",
    category: "Community Platform",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    imageCaption: "People collaborating through community discussions and decision-making.",
    accent: "AI + Community",
    tech: ["React Native", "Node.js", "PostgreSQL", "Socket.IO", "Ollama"],
    repo: "https://github.com/Nandhakumar1123/AgoraHub",
    highlights: [
      "Developed AgoraHub, a full-stack community platform with real-time chat, complaints, petitions, and polls using React Native and Node.js.",
      "Integrated RAG and LLM-based AI features using Ollama and NLP models for moderation, summaries, and intelligent responses.",
      "Built a scalable backend using Express.js, Socket.IO, PostgreSQL (pgvector), and Redis for authentication, caching, and real-time communication."
    ]
  },
  {
    title: "Medical Store Management System",
    subtitle: "Smart inventory and billing workspace for pharmacies.",
    date: "May 2025 – June 2025",
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    imageCaption: "A pharmacy dashboard showing medicine records, billing, and stock updates.",
    accent: "Healthcare Ops",
    tech: ["FastAPI", "PostgreSQL", "REST API", "Billing", "Alerts"],
    repo: "https://github.com/Nandhakumar1123/MedicalStore_Management_Application",
    highlights: [
      "Built a full-stack system using FastAPI and PostgreSQL to manage medicine records and billing.",
      "Automated bill generation with real-time stock updates after each sale.",
      "Implemented expiry alerts to notify about medicines nearing expiration."
    ]
  },
  {
    title: "Housing Price Prediction",
    subtitle: "Data-driven property value forecasting model.",
    date: "March 2025 – April 2025",
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
    imageCaption: "A real-estate analytics view used to estimate property pricing trends.",
    accent: "ML Insights",
    tech: ["Python", "Regression", "Pandas", "Scikit-learn", "EDA"],
    repo: "https://github.com/Nandhakumar1123/House_price_prediction",
    highlights: [
      "Built a predictive regression model for house pricing.",
      "Achieved 85% accuracy using linear regression and data preprocessing.",
      "Improved feature understanding through exploratory analysis."
    ]
  },
  {
    title: "IoT Accident Detection System",
    subtitle: "Smart emergency response for road safety monitoring.",
    date: "March 2026 – April 2026",
    category: "IoT & Safety",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    accent: "Connected Safety",
    tech: ["ESP8266", "MPU6050", "Telegram Bot", "Wi-Fi", "Sensors"],
    repo: "https://github.com/Nandhakumar1123/Iot_Accident_detection",
    highlights: [
      "Multi-sensor validation to detect accidents accurately.",
      "15-second confirmation window reduces false alerts.",
      "Real-time emergency messaging through Telegram integration."
    ]
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Featured Work</p>
          <h2>Projects</h2>
        </div>
        <p>Selected builds that show my full-stack, AI, and embedded work.</p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div
              className="project-visual"
              style={{ backgroundImage: `linear-gradient(135deg, rgba(18,8,43,0.88), rgba(46,15,93,0.38)), url(${project.image})` }}
            >
              <div className="visual-top">
                <span>{project.category}</span>
                <span>{project.accent}</span>
              </div>
              <div className="visual-bottom">
                <p>{project.date}</p>
                <div className="tech-row">
                  {project.tech.slice(0, 3).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                {project.imageCaption && (
                  <span className="image-caption">{project.imageCaption}</span>
                )}
              </div>
            </div>

            <div className="card-content">
              <div className="card-top">
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
              </div>
              <ul className="bullet-list">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="card-actions">
                <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
                  GitHub Repository
                </a>
                <span className="project-pill">{project.category}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
