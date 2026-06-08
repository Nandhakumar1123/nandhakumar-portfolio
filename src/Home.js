import React from "react";
import profilePhoto from "./nk.jpeg";

function Home(){
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Nandhakumar_D_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

return(
<section id="home" className="hero">
<div className="hero-content">
<div className="hero-text">
<p className="eyebrow">Hello, I&apos;m</p>
<h1>Nandhakumar D</h1>
<h3>Computer Science Engineering Student</h3>
<p className="hero-subtitle">Building immersive web experiences, AI-powered products, and embedded systems that solve real-world problems.</p>
<p className="lead">
Full Stack Development, Machine Learning, and building real-world applications.
</p>
<div className="hero-actions">
<a className="btn primary" href="https://www.linkedin.com/in/nandhakumar-duraisamy-a368163a3?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
<a className="btn ghost" href="https://github.com/Nandhakumar1123" target="_blank" rel="noreferrer">GitHub</a>
<button className="btn resume" onClick={handleResumeDownload} title="Download my resume in PDF format">📥 Download Resume</button>
</div>
<div className="meta">
<span>📧 nandhakumar05d@gmail.com</span>
<span>📱 9500471215</span>
<span>📍 Namakkal</span>
</div>
</div>
<div className="hero-media">
<img src={profilePhoto} alt="Nandhakumar D" />
</div>
</div>
</section>
);
}

export default Home;
