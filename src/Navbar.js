import React from "react";

function Navbar(){
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Nandhakumar_D_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

return(
<nav className="navbar">
<div className="nav-brand">Nandhakumar D</div>
<div className="nav-links">
<a href="#home">Home</a>
<a href="#education">Education</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#experience">Experience</a>
<a href="#leadership">Leadership</a>
<a href="#certificates">Certificates</a>
<button className="resume-btn" onClick={handleResumeDownload} title="Download Resume">📄 Resume</button>
</div>
</nav>
);
}

export default Navbar;
