import React from 'react'

export default function Portfolio() {
  const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'Git']
  const projects = [
    { name: 'Project 1', description: 'A brief description of Project 1' },
    { name: 'Project 2', description: 'A brief description of Project 2' },
    { name: 'Project 3', description: 'A brief description of Project 3' },
  ]

  return (
    <div className="container">
      <header className="header">
        <h1 className="name">Seeman Ali</h1>
        <nav className="nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2 className="hero-title">Welcome to My Portfolio</h2>
          <p className="hero-subtitle">Web Developer & Designer</p>
        </section>

        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <img
              src="https://i.postimg.cc/65ZX7RpK/1713604422487.jpg"
              alt="Your Name"
              className="about-image"
            />
            <div className="about-text">
              <p>
                I'm a passionate web developer with a keen eye for design. I love creating 
                beautiful, functional websites that provide great user experiences.
              </p>
              <p>
                With a background in computer science and years of experience in web development,
                I bring a unique blend of technical skills and creative problem-solving to every project.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <p>To see my projects <a href="https://seemanali.online/projects" target="_blank">click here </a></p>
        
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Seeman Ali. All rights reserved.</p>
      </footer>

      <style>{`
        body {
          font-family: 'Helvetica', 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #fff;
          margin: 0;
          padding: 0;
          display:flex;
          align-items :center;
          justify-content:center;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          
          padding: 20px;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }
        .name {
          font-size: 24px;
          font-weight: normal;
        }
        .nav {
          display: flex;
          gap: 20px;
        }
        .nav-link {
          text-decoration: none;
          color: #333;
        }
        .hero {
          text-align: center;
          margin-bottom: 60px;
        }
        .hero-title {
          font-size: 36px;
          font-weight: normal;
          margin-bottom: 10px;
        }
        .hero-subtitle {
          font-size: 18px;
          color: #666;
        }
        .section {
          margin-bottom: 40px;
        }
        .section-title {
          font-size: 24px;
          font-weight: normal;
          margin-bottom: 20px;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }
        .about-content {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }
        .about-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
        }
        .about-text {
          flex: 1;
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          list-style: none;
          padding: 0;
        }
        .skill-item {
          background-color: #f8f8f8;
          padding: 5px 10px;
          border-radius: 3px;
          font-size: 14px;
        }
        .project {
          margin-bottom: 20px;
        }
        .project-title {
          font-size: 18px;
          font-weight: normal;
          margin-bottom: 10px;
        }
        .footer {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #eee;
          color: #666;
        }
      `}</style>
    </div>
  )
}