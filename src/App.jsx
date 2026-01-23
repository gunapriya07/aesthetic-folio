import './App.css';
import { useEffect } from 'react';

export default function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with animation class
    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">GK</span>
          </div>
          <ul className="nav-menu">
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Work</a></li>
            <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Full Stack Developer</span>
          </div>
          <h1>I craft digital<span className="highlight"> experiences</span> that<br />inspire & engage</h1>
          <p>Building elegant solutions at the intersection of design and engineering. Specializing in full-stack development with a passion for creating performant, user-centered digital products.</p>
          
          <div className="hero-highlights">
            <div className="highlight-item">
              <div>
                <h4>20+ Projects</h4>
                <span>Shipped to production</span>
              </div>
            </div>
            <div className="highlight-item">
              <div>
                <h4>Full Stack</h4>
                <span>Frontend to Backend</span>
              </div>
            </div>
            <div className="highlight-item">
              <div>
                <h4>Performance</h4>
                <span>Optimized & scalable</span>
              </div>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Get In Touch</button>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="scroll-indicator">-</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about" data-animate>
        <h2 className="section-title">ABOUT ME</h2>
        <h3 className="section-subtitle">Turning ideas into<span className="highlight"> reality</span></h3>
        
        <div className="about-content">
          <p className="about-text">
            Student at Kalvium with expertise in Full Stack Development, DBMS, OOPs, and DSA using Java. I specialize in creating innovative, performant, and visually stunning experiences with a keen eye for design. Whether working independently or collaborating with cross-functional teams, I thrive in turning complex challenges into elegant solutions.
          </p>
          
          <div className="stats">
            <div className="stat" data-animate>
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat" data-animate>
              <div className="stat-number">50+</div>
              <div className="stat-label">Repositories</div>
            </div>
            <div className="stat" data-animate>
              <div className="stat-number">30+</div>
              <div className="stat-label">Code Commits</div>
            </div>
            <div className="stat" data-animate>
              <div className="stat-number">10+</div>
              <div className="stat-label">Skills</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <h2 className="section-title">EXPERIENCE</h2>
        <h3 className="section-subtitle">Professional <span className="highlight">Journey</span></h3>
        
        <div className="timeline">
          <div className="timeline-item" data-animate>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h4>Backend Developer Intern</h4>
                <span className="timeline-date">May 2025 – Sept 2025</span>
              </div>
              <p className="timeline-company">Zolvit (VakilSearch)</p>
              <ul className="timeline-details">
                <li>Built and optimized backend APIs and SQL queries for the Zolvit 360 platform</li>
                <li>Collaborated with cross-functional engineering teams to deliver reliable features</li>
                <li>Reduced API execution time by ~25% through targeted query and code tuning</li>
                <li>Resolved production issues with Airbrake insights to stabilize dashboard performance</li>
              </ul>
              <div className="timeline-tags">
                <span>Ruby on Rails</span>
                <span>SQL</span>
                <span>Sidekiq</span>
                <span>JavaScript</span>
                <span>Airbrake</span>
              </div>
            </div>
          </div>

          <div className="timeline-item" data-animate>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h4>Student Developer</h4>
                <span className="timeline-date">2023 - Present</span>
              </div>
              <p className="timeline-company">Kalvium</p>
              <ul className="timeline-details">
                <li>Built full-stack web applications using modern technologies</li>
                <li>Mastered Data Structures and Algorithms using Java</li>
                <li>Developed expertise in DBMS and Object-Oriented Programming</li>
                <li>Created 50+ projects showcasing diverse tech stacks</li>
              </ul>
              <div className="timeline-tags">
                <span>React</span>
                <span>Java</span>
                <span>DBMS</span>
                <span>DSA</span>
                <span>Full Stack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Contributions */}
      <section id="opensource" className="opensource">
        <h2 className="section-title">OPEN SOURCE</h2>
        <h3 className="section-subtitle">Contributing to the <span className="highlight">Community</span></h3>
        
        <div className="opensource-grid">
          <div className="opensource-card featured">
            <div className="os-badge">Featured Contribution</div>
            <div className="featured-header">
              <div>
                <h4>Developer Conferences Agenda</h4>
              </div>
              <a href="https://github.com/gunapriya07/developers-conferences-agenda" target="_blank" className="os-link">View →</a>
            </div>
            <p className="os-description">Community platform for discovering developer conferences and CFPs, trusted by 10k+ devs worldwide.</p>
            
            <div className="contribution-details">
              <div className="detail-item">
                <span className="detail-label">Contribution Focus:</span>
                <p>Structured and validated conference + CFP metadata for cleaner data</p>
              </div>
              <div className="detail-item">
                <span className="detail-label">Impact & Results:</span>
                <p>Better accuracy, consistency, and discoverability across the platform</p>
              </div>
              <div className="detail-item">
                <span className="detail-label">Period:</span>
                <p>2026</p>
              </div>
            </div>

            <div className="os-stats">
              <span>JavaScript</span>
              <span>Git/GitHub</span>
              <span>10,000+ Users</span>
              <span>Global Reach</span>
            </div>
          </div>

          <div className="opensource-card">
            <div className="os-header">
              <h4>Competitive Programming Prep</h4>
              <a href="https://github.com/gunapriya07/competitive-programming-prep" target="_blank" className="os-link">View →</a>
            </div>
            <p className="os-description">Lean DSA prep kit with curated problems and concise solutions for interviews.</p>
            <div className="os-stats">
              <span>Java</span>
              <span>DSA</span>
              <span>Interview Prep</span>
            </div>
          </div>

          <div className="opensource-card">
            <div className="os-header">
              <h4>SkillSwap Platform</h4>
              <a href="https://github.com/gunapriya07/-SkillSwap" target="_blank" className="os-link">View →</a>
            </div>
            <p className="os-description">Peer-to-peer skill exchange that helps people teach and learn within their community.</p>
            <div className="os-stats">
              <span>HTML/CSS</span>
              <span>Community</span>
              <span>Collaboration</span>
            </div>
          </div>

          <div className="opensource-card">
            <div className="os-header">
              <h4>Calculator Using Rust</h4>
              <a href="https://github.com/gunapriya07/Calculator_using_rust" target="_blank" className="os-link">View →</a>
            </div>
            <p className="os-description">Advanced calculator implementation in Rust exploring systems programming and language performance optimization.</p>
            <div className="os-stats">
              <span>Rust</span>
              <span>Systems</span>
              <span>Performance</span>
            </div>
          </div>
        </div>

        <div className="os-contribution-stats">
          <div className="contribution-stat">
            <div className="stat-value">110+</div>
            <div className="stat-name">Repositories</div>
          </div>
          <div className="contribution-stat">
            <div className="stat-value">1000+</div>
            <div className="stat-name">Contributions</div>
          </div>
          <div className="contribution-stat">
            <div className="stat-value">4</div>
            <div className="stat-name">Major OSS Projects</div>
          </div>
          <div className="contribution-stat">
            <div className="stat-value">Active</div>
            <div className="stat-name">Community Member</div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="projects">
        <h2 className="section-title">MY WORK</h2>
        <h3 className="section-subtitle">Featured <span className="highlight">Projects</span></h3>
        
        <div className="projects-grid">
          <div className="project-card featured" data-animate>
            <div className="project-top">
              <div className="pill-row">
                <span className="pill">Featured Build</span>
                <span className="pill soft">Maps</span>
              </div>
              <div className="project-actions">
                <a href="https://github.com/kalviumcommunity/S61-0126-Abyss-Angular-And-Rust-CerebroAtlas" target="_blank">Repo</a>
                <a href="https://github.com/kalviumcommunity/S61-0126-Abyss-Angular-And-Rust-CerebroAtlas" target="_blank">Code</a>
              </div>
            </div>
            <h4>CerebroAtlas</h4>
            <p className="project-desc">Location-intelligence app built with Angular + Rust, layering geospatial search with fast, typed APIs.</p>
            <div className="project-tags">
              <span>Angular</span>
              <span>Rust</span>
              <span>Type-safe APIs</span>
              <span>Maps</span>
            </div>
          </div>

          <div className="project-card" data-animate>
            <div className="project-top">
              <div className="pill-row">
                <span className="pill soft">Mobile</span>
                <span className="pill ghost">Support</span>
              </div>
              <div className="project-actions">
                <a href="https://github.com/kalviumcommunity/S61-1225-ChronoByte-FlutterAndFireBase-Fixora" target="_blank">Repo</a>
                <a href="https://github.com/kalviumcommunity/S61-1225-ChronoByte-FlutterAndFireBase-Fixora" target="_blank">Code</a>
              </div>
            </div>
            <h4>Fixora</h4>
            <p className="project-desc">Flutter + Firebase app for service requests with real-time updates, auth, and cloud persistence.</p>
            <div className="project-tags">
              <span>Flutter</span>
              <span>Firebase</span>
              <span>Realtime</span>
              <span>Auth</span>
            </div>
          </div>

          <div className="project-card" data-animate>
            <div className="project-top">
              <div className="pill-row">
                <span className="pill soft">Travel</span>
                <span className="pill ghost">Full Stack</span>
              </div>
              <div className="project-actions">
                <a href="https://github.com/kalviumcommunity/S61_Gunapriya_Capstone_ChittoorTrails" target="_blank">Repo</a>
                <a href="https://github.com/kalviumcommunity/S61_Gunapriya_Capstone_ChittoorTrails" target="_blank">Code</a>
              </div>
            </div>
            <h4>Chittoor Trails</h4>
            <p className="project-desc">Destination guide with curated itineraries, local insights, and scalable API-backed content.</p>
            <div className="project-tags">
              <span>Full Stack</span>
              <span>APIs</span>
              <span>Content</span>
              <span>UX</span>
            </div>
          </div>

          <div className="project-card" data-animate>
            <div className="project-top">
              <div className="pill-row">
                <span className="pill soft">Product</span>
                <span className="pill ghost">AI Assist</span>
              </div>
              <div className="project-actions">
                <a href="https://github.com/gunapriya07/BookBuddy" target="_blank">Repo</a>
                <a href="https://github.com/gunapriya07/BookBuddy" target="_blank">Code</a>
              </div>
            </div>
            <h4>BookBuddy</h4>
            <p className="project-desc">Reading companion that recommends, tracks, and summarizes books with a clean, reader-first UI.</p>
            <div className="project-tags">
              <span>React</span>
              <span>Recommendations</span>
              <span>UX Writing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2 className="section-title">EXPERTISE</h2>
        <h3 className="section-subtitle">Skills & <span className="highlight">Services</span></h3>
        
        <div className="skills-layout">
          <div className="skill-groups">
            <div className="skill-group" data-animate>
              <div className="pill">Frontend</div>
              <h4>Interface Engineering</h4>
              <p>Design systems, accessible UI, and motion that feels intentional across web and mobile surfaces.</p>
              <div className="skill-chips">
                <span>React</span>
                <span>TypeScript</span>
                <span>Tailwind/CSS</span>
                <span>Framer Motion</span>
              </div>
            </div>

            <div className="skill-group" data-animate>
              <div className="pill">Backend</div>
              <h4>APIs & Data</h4>
              <p>Secure, observable services with clean contracts and pragmatic data modeling.</p>
              <div className="skill-chips">
                <span>Node.js</span>
                <span>Express</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>Auth</span>
              </div>
            </div>

            <div className="skill-group" data-animate>
              <div className="pill">Ops</div>
              <h4>Reliability</h4>
              <p>Deployment pipelines, monitoring, and performance budgets that keep products fast and resilient.</p>
              <div className="skill-chips">
                <span>AWS</span>
                <span>Docker</span>
                <span>CI/CD</span>
                <span>Perf Audits</span>
              </div>
            </div>
          </div>

          <div className="services-grid">
            <div className="service-card" data-animate>
              <div className="service-icon"></div>
              <h4>Product Strategy</h4>
              <p>Align business goals with user needs through lean discovery and rapid prototyping.</p>
              <ul>
                <li>Design sprints & user flows</li>
                <li>Experiment maps & KPIs</li>
                <li>Roadmap-ready specs</li>
              </ul>
            </div>

            <div className="service-card" data-animate>
              <div className="service-icon"></div>
              <h4>Full-Stack Delivery</h4>
              <p>From idea to launch with maintainable code, component libraries, and battle-tested APIs.</p>
              <ul>
                <li>Reusable UI kits</li>
                <li>Typed API contracts</li>
                <li>Testing & observability</li>
              </ul>
            </div>

            <div className="service-card" data-animate>
              <div className="service-icon"></div>
              <h4>Performance & DX</h4>
              <p>Optimization and automation to keep experiences under fast budgets and teams shipping quickly.</p>
              <ul>
                <li>Core Web Vitals tuning</li>
                <li>CI/CD pipelines</li>
                <li>Developer tooling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">GET IN TOUCH</h2>
        <h3 className="section-subtitle">Let's <span className="highlight">Connect</span></h3>
        
        <div className="contact-content">
          <div className="contact-text">
            <p>Have a project in mind?</p>
            <p>I'm always excited to work on new projects and collaborate with creative people. Drop me a message and let's create something amazing together.</p>
          </div>

          <div className="contact-form">
            <input type="email" placeholder="Your email" required />
            <textarea placeholder="Your message" rows="4" required></textarea>
            <button className="btn btn-primary">Send Message</button>
          </div>

          <div className="contact-info">
            <div className="info-item">
              <span className="icon"></span>
              <p>gunapriya77776@gmail.com</p>
            </div>
            <div className="info-item">
              <span className="icon"></span>
              <p>Chittor, Andhra Pradesh</p>
            </div>
            <div className="social-links">
              <a href="https://github.com/gunapriya07" target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/in/kommara-gunta-guna-priya-924b97297/" target="_blank">LinkedIn</a>
              <a href="https://leetcode.com/u/GunapriyaReddy/" target="_blank">LeetCode</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Guna Priya. All rights reserved.</p>
        <p>Designed & Built</p>
      </footer>
    </div>
  );
}
