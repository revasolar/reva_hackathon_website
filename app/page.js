import React from 'react'

const page = () => {
  return (
    <> <header>
    <div class="container">
        <nav>
            <div class="logo">REVATHON</div>
            <div class="menu">
                <a href="#about">About</a>
                <a href="#tracks">Tracks</a>
                <a href="#timeline">Timeline</a>
                <a href="#winners">Winners</a>
                <a href="#sponsors">Sponsors</a>
            </div>
        </nav>
        
        <div class="hero">
            <div class="hero-content">
                <h1>REVATHON</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore itaque aliquid neque! Recusandae numquam repudiandae, qui non sit, eos nihil ut laborum repellendus nam earum quis ratione, modi iste libero?</p>
                <button class="cta-button">REGISTER NOW</button>
                
                <div class="countdown">
                    <div class="countdown-item">
                        <div class="countdown-number" id="days">28</div>
                        <div class="countdown-label">Days</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-number" id="hours">14</div>
                        <div class="countdown-label">Hours</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-number" id="minutes">36</div>
                        <div class="countdown-label">Minutes</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-number" id="seconds">42</div>
                        <div class="countdown-label">Seconds</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<section class="tracks" id="tracks">
    <div class="container">
        <h2 class="section-title">Hackathon Tracks</h2>
        
        <div class="tracks-grid">
            <div class="track-card float-animation">
                <div class="track-icon">🔒</div>
                <h3 class="track-title">Software</h3>
                <p class="track-description">Simulate an autonomous vehicle in Carla that will successfully operate in a map
                made by us.</p>
            </div>
            <div class="track-card float-animation">
                <div class="track-icon">⛓️</div>
                <h3 class="track-title">Hardware &</h3>
                <p class="track-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, facilis. Natus fugiat placeat velit sit.</p>
            </div>
            <div class="track-card float-animation">
                <div class="track-icon">+</div>
                <h3 class="track-title">track3</h3>
                <p class="track-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt natus aliquam odit voluptatum suscipit.</p>
            </div>
            <div class="track-card float-animation">
                <div class="track-icon">🌐</div>
                <h3 class="track-title">track4</h3>
                <p class="track-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nam laboriosam est enim repellat quasi.</p>
            </div>
            <div class="track-card float-animation">
                <div class="track-icon">💡</div>
                <h3 class="track-title">track5</h3>
                <p class="track-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores est neque velit temporibus, earum eaque.</p>
            </div>
        </div>
    </div>
</section>

<section class="timeline-section" id="timeline">
    <div class="container">
        <h2 class="section-title">Event Timeline</h2>
        <div class="timeline">
            <div class="timeline-item left">
                <div class="timeline-content">
                    <div class="timeline-date">February, 2025</div>
                    <h3 class="timeline-title">Regigrations Open</h3>
                    <p class="timeline-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="timeline-item right">
                <div class="timeline-content">
                    <div class="timeline-date">March 5, 2025</div>
                    <h3 class="timeline-title">Opening Ceremony</h3>
                    <p class="timeline-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="timeline-item left">
                <div class="timeline-content">
                    <div class="timeline-date">March 6, 2025</div>
                    <h3 class="timeline-title">Project Submission</h3>
                    <p class="timeline-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="timeline-item right">
                <div class="timeline-content">
                    <div class="timeline-date">March 6, 2025</div>
                    <h3 class="timeline-title">Winners Announcement</h3>
                    <p class="timeline-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="winners-section" id="winners">
    <div class="container">
        <h2 class="section-title">Winners</h2>
        <div class="podium-container">
            <div class="podium first-place">
                <div class="winner-avatar">👑</div>
                <div class="winner-info">
                    <div class="winner-place">1st Place</div>
                    <div class="winner-name">TBD</div>
                    <div class="project-name">TBD</div>
                </div>
                <div class="podium-stand">1</div>
            </div>
            <div class="podium second-place">
                <div class="winner-avatar">🥈</div>
                <div class="winner-info">
                    <div class="winner-place">2nd Place</div>
                    <div class="winner-name">TBD</div>
                    <div class="project-name">TBD</div>
                </div>
                <div class="podium-stand">2</div>
            </div>
            <div class="podium third-place">
                <div class="winner-avatar">🥉</div>
                <div class="winner-info">
                    <div class="winner-place">3rd Place</div>
                    <div class="winner-name">TBD</div>
                    <div class="project-name">TBD</div>
                </div>
                <div class="podium-stand">3</div>
            </div>
        </div>
    </div>
</section>

<section class="sponsors-section" id="sponsors">
    <div class="container">
        <h2 class="section-title">Our Sponsors</h2>
        <div class="sponsors-grid">
            <div class="sponsor-card">
                <img src="sponsor1.png" alt="Sponsor 1" class="sponsor-logo" />
            </div>
            <div class="sponsor-card">
                <img src="sponsor2.png" alt="Sponsor 2" class="sponsor-logo" />
            </div>
            <div class="sponsor-card">
                <img src="sponsor3.png" alt="Sponsor 3" class="sponsor-logo" />
            </div>
            <div class="sponsor-card">
                <img src="sponsor4.png" alt="Sponsor 4" class="sponsor-logo" />
            </div>
        </div>
    </div>
</section>

<footer>
    <div class="container">
        <div class="footer-content">
            <div class="footer-column">
                <h3 class="footer-title">About</h3>
                <ul class="footer-links">
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#tracks">Tracks</a></li>
                    <li><a href="#timeline">Timeline</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3 class="footer-title">Contact</h3>
                <ul class="footer-links">
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#support">Support</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3 class="footer-title">Follow Us</h3>
                <div class="social-links">
                    <a href="#" class="social-icon">📱</a>
                    <a href="#" class="social-icon">💻</a>
                    <a href="#" class="social-icon">📧</a>
                </div>
            </div>
        </div>
        <div class="copyright">
            © 2025 REVA. All rights reserved.
        </div>
    </div>
</footer></>
  )
}

export default page