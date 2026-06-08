import React from "react";

function Projects(){

return(
<section id="projects" className="section">
<div className="section-header">
<h2>Projects</h2>
<p>Selected builds that show my full‑stack and ML work.</p>
</div>

<div className="project-list">
<div className="card">
<div className="card-top">
<div>
<h3>AgoraHub – Empowering Communities through Collaborative Governance and Intelligent Decision-Making</h3>
<p className="project-date">November 2025 – April 2026</p>
</div>
<span className="tag">Community Platform</span>
</div>
<ul className="bullet-list">
<li>Developed AgoraHub, a full-stack community platform with real-time chat, complaints, petitions, and polls using React Native and Node.js.</li>
<li>Integrated RAG and LLM-based AI features using Ollama and NLP models for moderation, summaries, and intelligent responses.</li>
<li>Built a scalable backend using Express.js, Socket.IO, PostgreSQL (pgvector), and Redis for authentication, caching, and real-time communication.</li>
</ul>
<a className="project-link" href="https://github.com/Nandhakumar1123/AgoraHub" target="_blank" rel="noreferrer">GitHub Repository</a>
</div>

<div className="card">
<div className="card-top">
<div>
<h3>Medical Store Management System</h3>
<p className="project-date">May 2025 – June 2025</p>
</div>
<span className="tag">Full Stack</span>
</div>
<ul className="bullet-list">
<li>Built a full-stack system using FastAPI and PostgreSQL to manage medicine records and billing.</li>
<li>Automated bill generation with real-time stock updates after each sale.</li>
<li>Implemented expiry alerts to notify about medicines nearing expiration.</li>
</ul>
<a className="project-link" href="https://github.com/Nandhakumar1123/MedicalStore_Management_Application" target="_blank" rel="noreferrer">GitHub Repository</a>
</div>

<div className="card">
<div className="card-top">
<div>
<h3>Housing Price Prediction</h3>
<p className="project-date">March 2025 – April 2025</p>
</div>
<span className="tag">Data Science</span>
</div>
<ul className="bullet-list">
<li>Built a regression model to predict housing prices using Python.</li>
<li>Achieved 85% accuracy using linear regression and data preprocessing.</li>
</ul>
<a className="project-link" href="https://github.com/Nandhakumar1123/House_price_prediction" target="_blank" rel="noreferrer">GitHub Repository</a>
</div>

<div className="card">
<div className="card-top">
<div>
<h3>IoT-Based Intelligent Accident Detection and Emergency Response System</h3>
<p className="project-date">March 2026 – April 2026</p>
</div>
<span className="tag">IoT & Safety</span>
</div>
<ul className="bullet-list">
<li>Developed an IoT-based accident detection system using ESP8266, MPU6050, shock, sound, and tilt sensors to automatically identify road accidents through multi-sensor verification.</li>
<li>Implemented a false-alert prevention mechanism with a 15-second user confirmation timer and push-button cancellation feature to improve detection accuracy.</li>
<li>Integrated Telegram Bot API and Wi-Fi communication to send real-time emergency alerts with accident status, enabling faster response and improved road safety.</li>
</ul>
<a className="project-link" href="https://github.com/Nandhakumar1123/Iot_Accident_detection" target="_blank" rel="noreferrer">GitHub Repository</a>
</div>
</div>
</section>
);
}

export default Projects;
