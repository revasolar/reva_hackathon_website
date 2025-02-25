"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
    }, 1500);

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
      <div className="loader">
        <div className="loader-content">
          <h1 className="loader-logo">DeepDrive</h1>
          <div className="loader-bar">
            <div className="loader-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="page-content">
        <header>
          <div className="container">
            <nav>
            <div className="brand-name">DeepDrive</div>
              <div className="menu">
                <a href="#about">About</a>
                <a href="#tracks">Tracks</a>
                <a href="#timeline">Timeline</a>
                <a href="#winners">Winners</a>
              </div>
              <div className="logo">
                <Image 
                  src="/reva_logo.png" 
                  alt="REVA Logo" 
                  width={100} 
                  height={70} 
                  priority
                />
              </div>
            </nav>
          </div>
        </header>

        <section className="hero">
  <div className="hero-content">
    <h3 className="reva-title">REVA SOLAR RACING</h3>
    <h2>PRESENTS</h2>
    <h1>DeepDrive Auto Challenge</h1>
    <p>The First<span className="highligh-text"> Autonomous</span> Vehicle Hackathon In VIT Chennai.</p>
    

<div className="button-group">
  <a href="#" className="cta-button">
    Register Now
  </a><br></br>
  <a 
    href="https://www.vitchennaievents.com/conf1/index.php?eventid=2623" 
    className="cta-button secondary"
    target="_blank"
    rel="noopener noreferrer"
  >
    VIT Portal Registration
  </a>
</div>

            
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
        <section className="registration-details">
  <div className="container">
    <h2 className="section-title">Registration Details</h2>
    <div className="details-grid">
      <div className="detail-card venue-card">
        <div className="detail-icon">📍</div>
        <h3>Venue</h3>
        <p>Kasturba Hall</p>
        <p>VIT Chennai</p>
      </div>
      <div className="detail-card date-card">
        <div className="detail-icon">📅</div>
        <h3>Date</h3>
        <p>5th March, 2025</p>
        <p>8:00 AM onwards</p>
      </div>
      <div className="detail-card fees-card">
        <div className="detail-icon">💰</div>
        <h3>Registration Fees</h3>
        <div className="fees-item">
          <span className="team-type">Duo</span>
          <span className="fee-amount">₹250</span>
        </div>
        <div className="fees-item">
          <span className="team-type">Trio/Squad</span>
          <span className="fee-amount">₹400</span>
        </div>
      </div>
    </div>
  </div>
</section>
       
        <section className="special-guests" id="guests">
          <div className="container">
            <h2 className="section-title">Special Guest</h2>
            <div className="guests-grid">
              <div className="guest-card">
                <div className="guest-image"></div>
                <div className="guest-info">
                  <h3>Grand Suprise</h3>
                  <p>Stay Tuned!</p>
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
                <p className="track-description">Simulate an autonomous vehicle in Carla that will successfully operate in a map made by us,autonomous racing in a simulated environment.</p>
              </div>
              <div className="track-card">
                <div className="track-icon">⚡</div>
                <h3 className="track-title">Hardware Track</h3>
                <p className="track-description">Designing circuits to monitor realtime vehicle parameters and exploring energy harvesting techniques, collecting data and presenting it in usable form. </p>
              </div>
              <div className="track-card">
                <div className="track-icon">📊</div>
                <h3 className="track-title">IOT Based Innovation</h3>
                <p className="track-description">Building small scale vehicles that can self park or navigate using sensor integration.</p>
              </div>
              {/*<div className="track-card">
                <div className="track-icon">🛡️</div>
                <h3 className="track-title">Security Track</h3>
                <p className="track-description">Develop security solutions for autonomous vehicle networks.</p>
              </div>*/}
              <div className="track-card">
                <div className="track-icon">🛡️</div>
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
        <section className="prizes-section">
  <div className="container">
    <h2 className="section-title">Grand Prize Pool</h2>
    <div className="total-prize-pool">
      <div className="prize-pool-amount">₹7500</div>
      <div className="prize-pool-label">Total Prize Pool</div>
    </div>
    
    <div className="prizes-grid">
      <div className="prize-card">
        <div className="prize-icon">🏆</div>
        <div className="prize-amount">₹3000</div>
        <div className="prize-label">Winners</div>
        <div className="prize-extras">
           +Industry Mentorship
        </div>
      </div>

      <div className="prize-card">
        <div className="prize-icon">🏆</div>
        <div className="prize-amount">₹1500</div>
        <div className="prize-label">Runner Ups Software Track</div>
        <div className="prize-extras">
          + Development Resources
        </div>
      </div>

      <div className="prize-card">
        <div className="prize-icon">🏆</div>
        <div className="prize-amount">₹1500</div>
        <div className="prize-label">Runner Ups IOT track</div>
        <div className="prize-extras">
           +Special Recognition
        </div>
      </div>

      <div className="prize-card">
        <div className="prize-icon">⭐</div>
        <div className="prize-amount">₹1500</div>
        <div className="prize-label">Best All Girls Team</div>
        <div className="prize-extras">
          + Special Recognition
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

       {/*} <section className="sponsors-section" id="sponsors">
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
        </section>*/}



        <footer>
          <div className="container">
            <div className="footer-content">
              <div className="footer-column">
                <h3 className="footer-title">Co-ordinators</h3>
                <ul className="footer-links">
                  <li>Priyanuj Boruah</li>
                  <li>Ananya Anand</li>
                  {/*<li><a href="#timeline">Timeline</a></li>*/}
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-title">Contact Details</h3>
                <ul className="footer-links">
                  <li>+918471806109</li>
                  <li>+919714989797</li>
                  <li>reva.vitc@gmail.com</li>
                </ul>
              </div>
              <div className="footer-column">
  <h3 className="footer-title">Follow Us</h3>
  <div className="social-icons">
    <a href="https://www.instagram.com/revasolarracing.vitc/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="mailto:reva.vitc@gmail.com">
      <i className="fas fa-envelope"></i>
    </a>
    <a href="https://www.linkedin.com/company/re-va/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i>
    </a>
  </div>
</div>
            </div>
            <div className="copyright">
  © 2025 REVA. All rights reserved. Developed By{" "}
  <a 
    href="https://www.linkedin.com/in/pranjalmitra/" 
    className="developer-link" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Pranjal Mitra
  </a>
</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page;