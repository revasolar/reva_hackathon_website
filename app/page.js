"use client";
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const timer = setInterval(() => {
      const targetDate = new Date('2025-03-05T08:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <>
        {loading && (
          <div className="loader">
            <div className="loader-content">
              <h1 className="loader-logo">DeepDrive</h1>
              <div className="loader-bar">
                <div className="loader-progress"></div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="page-content">
        <header>
          <div className="container">
            <nav>
              <div className="logo">DeepDrive</div>
              <div className="menu">
                <a href="#about">About</a>
                <a href="#tracks">Tracks</a>
                <a href="#timeline">Timeline</a>
                <a href="#winners">Winners</a>
                <a href="#sponsors">Sponsors</a>
              </div>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div className="hero-content">
            <h1>DeepDrive Auto Challenge</h1>
            <p>Where Innovation Meets Automation - Join us for a groundbreaking hackathon focused on the future of autonomous vehicles and smart mobility solutions.</p>
            <button className="cta-button">REGISTER NOW</button>
            
            <div className="countdown">
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.days}</span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.hours}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.minutes}</span>
                <span className="countdown-label">Minutes</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{timeLeft.seconds}</span>
                <span className="countdown-label">Seconds</span>
              </div>
            </div>
          </div>
        </section>

        <section className="special-guests" id="guests">
          <div className="container">
            <h2 className="section-title">Special Guest</h2>
            <div className="guests-grid">
              <div className="guest-card">
                <div className="guest-image">👨‍💼</div>
                <div className="guest-info">
                  <h3>Anshuman Phadke</h3>
                  <p>ADAS Engineer, Mercedes Benz</p>
                  <div className="guest-topic">Keynote Speaker</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tracks" id="tracks">
          <div className="container">
            <h2 className="section-title">Hackathon Tracks</h2>
            <div className="tracks-grid">
              <div className="track-card">
                <div className="track-icon">🔒</div>
                <h3 className="track-title">Software Track</h3>
                <p className="track-description">Simulate an autonomous vehicle in Carla that will successfully operate in a map made by us.</p>
              </div>
              <div className="track-card">
                <div className="track-icon">⚡</div>
                <h3 className="track-title">Hardware Track</h3>
                <p className="track-description">Design and prototype hardware solutions for autonomous vehicle systems.</p>
              </div>
              <div className="track-card">
                <div className="track-icon">📊</div>
                <h3 className="track-title">Low Voltage Sensor Integration</h3>
                <p className="track-description">Build low-powered circuits for vehicle data collection and monitoring.</p>
              </div>
              <div className="track-card">
                <div className="track-icon">🛡️</div>
                <h3 className="track-title">Security Track</h3>
                <p className="track-description">Develop security solutions for autonomous vehicle networks.</p>
              </div>
              <div className="track-card">
                <div className="track-icon">💡</div>
                <h3 className="track-title">Open Innovation</h3>
                <p className="track-description">Create innovative solutions for autonomous systems challenges.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="timeline-section" id="timeline">
          <div className="container">
            <h2 className="section-title">Event Timeline</h2>
            <div className="timeline">
              <div className="timeline-item left">
                <div className="timeline-content">
                  <div className="timeline-date">February 25, 2025</div>
                  <h3 className="timeline-title">Registrations Open</h3>
                  <p className="timeline-text">Begin your journey into autonomous innovation.</p>
                </div>
              </div>
              <div className="timeline-item right">
                <div className="timeline-content">
                  <div className="timeline-date">March 5, 2025</div>
                  <h3 className="timeline-title">Opening Ceremony</h3>
                  <p className="timeline-text">Welcome address and keynote speaker presentation.</p>
                </div>
              </div>
              <div className="timeline-item left">
                <div className="timeline-content">
                  <div className="timeline-date">March 6, 2025</div>
                  <h3 className="timeline-title">Project Submission</h3>
                  <p className="timeline-text">Final submission of all hackathon projects.</p>
                </div>
              </div>
              <div className="timeline-item right">
                <div className="timeline-content">
                  <div className="timeline-date">March 6, 2025</div>
                  <h3 className="timeline-title">Winners Announcement</h3>
                  <p className="timeline-text">Celebration and recognition of top projects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="winners-section" id="winners">
          <div className="container">
            <h2 className="section-title">Winners</h2>
            <div className="podium-container">
              <div className="podium first-place">
                <div className="winner-avatar">👑</div>
                <div className="winner-info">
                  <div className="winner-place">1st Place</div>
                  <div className="winner-name">TBD</div>
                  <div className="project-name">TBD</div>
                </div>
                <div className="podium-stand">1</div>
              </div>
              <div className="podium second-place">
                <div className="winner-avatar">🥈</div>
                <div className="winner-info">
                  <div className="winner-place">2nd Place</div>
                  <div className="winner-name">TBD</div>
                  <div className="project-name">TBD</div>
                </div>
                <div className="podium-stand">2</div>
              </div>
              <div className="podium third-place">
                <div className="winner-avatar">🥉</div>
                <div className="winner-info">
                  <div className="winner-place">3rd Place</div>
                  <div className="winner-name">TBD</div>
                  <div className="project-name">TBD</div>
                </div>
                <div className="podium-stand">3</div>
              </div>
            </div>
          </div>
        </section>

        <section className="sponsors-section" id="sponsors">
          <div className="container">
            <h2 className="section-title">Our Sponsors</h2>
            <div className="sponsors-grid">
              <div className="sponsor-card">
                <img src="sponsor1.png" alt="Sponsor 1" className="sponsor-logo" />
              </div>
              <div className="sponsor-card">
                <img src="sponsor2.png" alt="Sponsor 2" className="sponsor-logo" />
              </div>
              <div className="sponsor-card">
                <img src="sponsor3.png" alt="Sponsor 3" className="sponsor-logo" />
              </div>
              <div className="sponsor-card">
                <img src="sponsor4.png" alt="Sponsor 4" className="sponsor-logo" />
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="footer-content">
              <div className="footer-column">
                <h3 className="footer-title">Quick Links</h3>
                <ul className="footer-links">
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#tracks">Tracks</a></li>
                  <li><a href="#timeline">Timeline</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-title">Contact</h3>
                <ul className="footer-links">
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="#support">Support</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-title">Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-icon">📱</a>
                  <a href="#" className="social-icon">💻</a>
                  <a href="#" className="social-icon">📧</a>
                </div>
              </div>
            </div>
            <div className="copyright">
              © 2025 REVA. All rights reserved.Made By Pranjal Mitra
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page;