"use client";
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
        <>
        {loading&&(
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
    <div className='page-content'>
    <header>
    <div className="container">
        <nav>
            <div class="logo">DeepDrive</div>
            <div class="menu">
                <a href="#about">About</a>
                <a href="#tracks">Tracks</a>
                <a href="#timeline">Timeline</a>
                <a href="#winners">Winners</a>
                <a href="#sponsors">Sponsors</a>
            </div>
        </nav>
        
        <div className="hero">
            <div className="hero-content">
                <h1>DeepDrive Auto Challenge</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore itaque aliquid neque! Recusandae numquam repudiandae, qui non sit, eos nihil ut laborum repellendus nam earum quis ratione, modi iste libero?</p>
                <button className="cta-button">REGISTER NOW</button>
                
                <div className="countdown">
                    <div className="countdown-item">
                        <div className="countdown-number" id="days">28</div>
                        <div className="countdown-label">Days</div>
                    </div>
                    <div className="countdown-item">
                        <div className="countdown-number" id="hours">14</div>
                        <div className="countdown-label">Hours</div>
                    </div>
                    <div className="countdown-item">
                        <div className="countdown-number" id="minutes">36</div>
                        <div className="countdown-label">Minutes</div>
                    </div>
                    <div className="countdown-item">
                        <div className="countdown-number" id="seconds">42</div>
                        <div className="countdown-label">Seconds</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<section className="special-guests" id="guests">
  <div className="container">
    <h2 className="section-title">Special Guest</h2>
    <div className="guests-grid">
      <div className="guest-card ">
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
            <div className="track-card float-animation">
                <div className="track-icon">🔒</div>
                <h3 className="track-title">Software</h3>
                <p className="track-description">Simulate an autonomous vehicle in Carla that will successfully operate in a map
                made by us.</p>
            </div>
            <div className="track-card float-animation">
                <div className="track-icon">⛓️</div>
                <h3 className="track-title">Hardware &</h3>
                <p className="track-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, facilis. Natus fugiat placeat velit sit.</p>
            </div>
            <div className="track-card float-animation">
                <div className="track-icon">+</div>
                <h3 className="track-title">Low Voltage Sensor Integration</h3>
                <p className="track-description">Build low-powered circuits that can collect different data
                from a vehicle (eg: tyre pressure, battery temperature, shock absorber compression, internal
                vibrations, energy recovered from regenerative braking etc).</p>
            </div>
            <div className="track-card float-animation">
                <div className="track-icon">🌐</div>
                <h3 className="track-title">Security of Autonomous Systems</h3>
                <p className="track-description">The target is to safeguard the autonomous system networks using different network protocols or some hardware solutions  </p>
            </div>
            <div className="track-card float-animation">
                <div className="track-icon">💡</div>
                <h3 className="track-title">Open Innovation</h3>
                <p className="track-description">The team can create any project based on their understanding of Autonomous Systems</p>
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
                    <div className="timeline-date">February, 2025</div>
                    <h3 className="timeline-title">Regigrations Open</h3>
                    <p className="timeline-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="timeline-item right">
                <div className="timeline-content">
                    <div className="timeline-date">March 5, 2025</div>
                    <h3 className="timeline-title">Opening Ceremony</h3>
                    <p className="timeline-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="timeline-item left">
                <div className="timeline-content">
                    <div className="timeline-date">March 6, 2025</div>
                    <h3 className="timeline-title">Project Submission</h3>
                    <p className="timeline-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="timeline-item right">
                <div className="timeline-content">
                    <div className="timeline-date">March 6, 2025</div>
                    <h3 className="timeline-title">Winners Announcement</h3>
                    <p className="timeline-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
                <img src="sponsor1.png" alt="Sponsor 1" class="sponsor-logo" />
            </div>
            <div className="sponsor-card">
                <img src="sponsor2.png" alt="Sponsor 2" class="sponsor-logo" />
            </div>
            <div className="sponsor-card">
                <img src="sponsor3.png" alt="Sponsor 3" class="sponsor-logo" />
            </div>
            <div className="sponsor-card">
                <img src="sponsor4.png" alt="Sponsor 4" class="sponsor-logo" />
            </div>
        </div>
    </div>
</section>

<footer>
    <div className="container">
        <div className="footer-content">
            <div className="footer-column">
                <h3 className="footer-title">About</h3>
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
            © 2025 REVA. All rights reserved.
        </div>
    </div>
</footer>
</div></>
  );
};

export default Page;