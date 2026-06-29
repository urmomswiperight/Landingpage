import React, { useState, useEffect } from 'react';
import AnoAI from './components/ui/animated-shader-background';
import { CircularTestimonialsDemo } from './components/circular-testimonials-demo';
import { QualificationForm } from './components/QualificationForm';
import logo from './assets/logo.png';

export default function App() {
  // Navigation Background on Scroll
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize Google Calendar Scheduling Button
  useEffect(() => {
    // Inject the CSS
    const link = document.createElement('link');
    link.href = "https://calendar.google.com/calendar/scheduling-button-script.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Inject the Script
    const script = document.createElement('script');
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize the button when script loads
    script.onload = () => {
      if (window.calendar && window.calendar.schedulingButton) {
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Dw4I1qUv4wlZnY1tPR8V9a7sSVztUqMaii2aQEUONUmQj6P4srF8HwXrV-tNe5pDRsRsgPDie?gv=true',
          color: '#039BE5',
          label: 'Book an appointment',
          target: document.getElementById('calendar-button-container'),
        });
      }
    };

    return () => {
      // Cleanup
      if (document.body.contains(script)) document.body.removeChild(script);
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);

  // ROI Calculator State
  const [adv, setAdv] = useState(10000);
  const [d0, setD0] = useState(10);
  const [c0, setC0] = useState(10);
  const [c1, setC1] = useState(15);
  const [cost, setCost] = useState(5000);

  // Auto-adjust target close rate to be >= current close rate
  useEffect(() => {
    if (c1 < c0) {
      setC1(c0);
    }
  }, [c0]);

  // ROI Calculations
  const incrementalRevenue = adv * (d0 * ((c1 - c0) / 100));
  const paybackMonths = incrementalRevenue <= 0 ? 0 : cost / incrementalRevenue;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div>
      <AnoAI />
      {/* Background Blurs */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      {/* HEADER / NAVIGATION */}
      <nav id="site-nav" className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <a href="#" className="logo" id="nav-logo">
          <img src={logo} alt="Load Logic Logo" className="w-8 h-8 object-contain" />
          Load<span>Logic</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
        </button>
        <ul id="nav-links" className={menuOpen ? 'active' : ''}>
          <li><a href="#problems" id="link-problems" onClick={() => setMenuOpen(false)}>The Issues</a></li>
          <li><a href="#services" id="link-services" onClick={() => setMenuOpen(false)}>Our Solutions</a></li>
          <li><a href="#roi" id="link-roi" onClick={() => setMenuOpen(false)}>ROI Calculator</a></li>
          <li><a href="#case-studies" id="link-cases" onClick={() => setMenuOpen(false)}>Case Studies</a></li>
          <li><a href="#about" id="link-about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#book" className="nav-cta" id="link-book-cta" onClick={() => setMenuOpen(false)}>Book Consultation</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="hero-section">
        <div className="hero-badge animate-fade-in" id="badge-hero">⚡ Custom Enterprise Workflows</div>
        <h1 id="hero-title" className="animate-slide-up">
          Automate your operations & scale client delivery <em>guaranteed</em>
        </h1>
        <p id="hero-subtitle" className="animate-slide-up-delayed">
          We build custom AI systems, RAG pipelines, and automated lead acquisition infrastructure to replace hours of manual labor with clean, reusable templates.
        </p>
        <div className="hero-actions" id="hero-actions-container">
          <a href="#book" className="btn-primary animate-pulse" id="btn-hero-primary">Book Technical Alignment</a>
          <a href="#services" class="btn-secondary" id="btn-hero-secondary">Explore Solutions</a>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats" id="stats-container">
        <div className="stat-item fade-in-section" id="stat-1">
          <div class="stat-num" id="stat-num-1">10<span>x</span></div>
          <div class="stat-label" id="stat-label-1">Average Project ROI</div>
        </div>
        <div className="stat-item fade-in-section" id="stat-2">
          <div class="stat-num" id="stat-num-2">95<span>%</span></div>
          <div class="stat-label" id="stat-label-2">Leads Routed Under 1 Hour</div>
        </div>
        <div className="stat-item fade-in-section" id="stat-3">
          <div class="stat-num" id="stat-num-3">3<span>h</span></div>
          <div class="stat-label" id="stat-label-3">Admin Work Cut to 10 Mins</div>
        </div>
        <div className="stat-item fade-in-section" id="stat-4">
          <div class="stat-num" id="stat-num-4">21<span>d</span></div>
          <div class="stat-label" id="stat-label-4">Average Go-Live Time</div>
        </div>
      </div>

      {/* THE PROBLEM SECTION */}
      <section id="problems">
        <div className="section-header" id="problems-header">
          <span className="section-label" id="label-problems">The Reality</span>
          <h2 className="section-title" id="title-problems">Why Digital Agencies & SaaS <em>Fail to Scale</em></h2>
          <p className="section-sub" id="sub-problems">Software implementation issues go far beyond basic tool setup. Manual friction, disjointed stacks, and human error throttle your margins.</p>
        </div>

        <div className="problems-container" id="problems-cards-container">
          <div className="problem-card" id="prob-card-1">
            <div className="problem-badge" id="badge-prob-1">Issue #1</div>
            <h3 id="title-prob-1">Inconsistent Lead Generation</h3>
            <p id="desc-prob-1">Relying on referrals creates a feast-or-famine cycle. Without a systematic, outbound system running 24/7, predicting revenue and hiring growth is impossible.</p>
            <div className="problem-solution" id="sol-prob-1">Load Logic: Automated lead gen engines driving calls predictably.</div>
          </div>

          <div className="problem-card" id="prob-card-2">
            <div className="problem-badge" id="badge-prob-2">Issue #2</div>
            <h3 id="title-prob-2">Onboarding & Reporting Churn</h3>
            <p id="desc-prob-2">Taking hours to onboard clients manually creates poor first impressions. Combined with manual monthly reports, clients feel ignored and churn rates spike.</p>
            <div className="problem-solution" id="sol-prob-2">Load Logic: 10-minute auto-onboarding & real-time client dashboards.</div>
          </div>

          <div className="problem-card" id="prob-card-3">
            <div className="problem-badge" id="badge-prob-3">Issue #3</div>
            <h3 id="title-prob-3">Tool Fatigue & Data Silos</h3>
            <p id="desc-prob-3">Using 20+ disconnected tools that don't talk to each other. Your team spends half their day manually copying data, resulting in errors and burnout.</p>
            <div className="problem-solution" id="sol-prob-3">Load Logic: Unified custom APIs and system integrations.</div>
          </div>
        </div>
      </section>

      {/* SERVICES / SOLUTIONS SECTION */}
      <section id="services">
        <div className="section-header" id="services-header">
          <span className="section-label" id="label-services">Our Infrastructure</span>
          <h2 className="section-title" id="title-services">Core Automation & <em>AI Services</em></h2>
          <p className="section-sub" id="sub-services">We replace manual pipelines with custom-engineered software architectures designed for absolute reliability.</p>
        </div>

        <div className="services-grid" id="services-cards-grid">
          <div className="service-card" id="srv-card-1">
            <div className="service-icon" style={{ background: 'rgba(59, 130, 246, 0.12)' }} id="icon-srv-1">📥</div>
            <h3 id="title-srv-1">Lead Management</h3>
            <p id="desc-srv-1">Capture leads from websites, Facebook, Instagram, and web forms automatically. Intelligent routing routes opportunities to the right reps instantly.</p>
            <div className="service-benefit" id="benefit-srv-1">✦ Zero lost leads, faster response SLA</div>
          </div>
          <div className="service-card" id="srv-card-2">
            <div className="service-icon" style={{ background: 'rgba(139, 92, 246, 0.12)' }} id="icon-srv-2">⚡</div>
            <h3 id="title-srv-2">Automated Follow-Ups</h3>
            <p id="desc-srv-2">Set up multi-channel email sequences, SMS, WhatsApp, and confirmation systems that run autonomously to prevent leads from going cold.</p>
            <div className="service-benefit" id="benefit-srv-2">✦ Maximum lead-to-booking conversions</div>
          </div>
          <div className="service-card" id="srv-card-3">
            <div className="service-icon" style={{ background: 'rgba(16, 185, 129, 0.12)' }} id="icon-srv-3">🔑</div>
            <h3 id="title-srv-3">Client Portal Architecture</h3>
            <p id="desc-srv-3">Deploy custom portal hubs for your clients to monitor campaign progress, access reports, download invoices, and submit requests without emailing.</p>
            <div className="service-benefit" id="benefit-srv-3">✦ Drastically reduced support overhead</div>
          </div>
          <div className="service-card" id="srv-card-4">
            <div className="service-icon" style={{ background: 'rgba(245, 158, 11, 0.12)' }} id="icon-srv-4">📅</div>
            <h3 id="title-srv-4">Appointment Booking</h3>
            <p id="desc-srv-4">Custom booking page configurations integrated directly into calendars with custom reminders to eliminate booking friction and no-shows.</p>
            <div className="service-benefit" id="benefit-srv-4">✦ Hands-free scheduling automation</div>
          </div>
          <div className="service-card" id="srv-card-5">
            <div className="service-icon" style={{ background: 'rgba(239, 68, 68, 0.12)' }} id="icon-srv-5">📊</div>
            <h3 id="title-srv-5">Reporting Dashboards</h3>
            <p id="desc-srv-5">Consolidate multiple ad platform KPIs and databases into live, unified visual report dashboards. Push insights to stakeholders automatically.</p>
            <div className="service-benefit" id="benefit-srv-5">✦ Hours of manual report compiling saved</div>
          </div>
          <div className="service-card" id="srv-card-6">
            <div className="service-icon" style={{ background: 'rgba(6, 182, 212, 0.12)' }} id="icon-srv-6">⚙️</div>
            <h3 id="title-srv-6">Project Management</h3>
            <p id="desc-srv-6">Develop custom task routing, milestones, and automated notification setups to ensure project delivery stays on schedule.</p>
            <div className="service-benefit" id="benefit-srv-6">✦ Bulletproof internal task visibility</div>
          </div>
          <div className="service-card" id="srv-card-7">
            <div className="service-icon" style={{ background: 'rgba(236, 72, 153, 0.12)' }} id="icon-srv-7">✨</div>
            <h3 id="title-srv-7">AI content Tools</h3>
            <p id="desc-srv-7">Build custom LLM engines for drafting emails, creating blog outlines, generating captions, and repurposing content based on your brand voice.</p>
            <div className="service-benefit" id="benefit-srv-7">✦ Fast, localized copywriting pipelines</div>
          </div>
          <div className="service-card" id="srv-card-8">
            <div className="service-icon" style={{ background: 'rgba(14, 116, 144, 0.12)' }} id="icon-srv-8">⭐</div>
            <h3 id="title-srv-8">Reputation Management</h3>
            <p id="desc-srv-8">Automate review requests and track brand sentiment signals, ensuring you catch positive feedback and isolate complaints proactively.</p>
            <div className="service-benefit" id="benefit-srv-8">✦ Scaled social proof and client trust</div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ROI CALCULATOR SECTION */}
      <section id="roi">
        <div className="section-header" id="roi-header">
          <span className="section-label" id="label-roi">Economic Proof</span>
          <h2 class="section-title" id="title-roi">Interactive <em>ROI Calculator</em></h2>
          <p class="section-sub" id="sub-roi">Adjust the variables below based on your current numbers to see how automation compression pays for itself.</p>
        </div>

        <div className="calc-container" id="roi-calculator-wrapper">
          <div className="calc-inputs" id="calc-inputs-container">
            <div className="input-group" id="calc-group-adv">
              <div className="input-label-row">
                <label htmlFor="calc-adv">Average Deal Value (ADV)</label>
                <span className="input-val-display" id="val-adv">{formatCurrency(adv)}</span>
              </div>
              <input 
                type="range" 
                id="calc-adv" 
                min="1000" 
                max="50000" 
                step="500" 
                value={adv} 
                onChange={(e) => setAdv(Number(e.target.value))} 
              />
            </div>
            <div className="input-group" id="calc-group-d0">
              <div className="input-label-row">
                <label htmlFor="calc-d0">Current Demos per Month ($D_0$)</label>
                <span className="input-val-display" id="val-d0">{d0}</span>
              </div>
              <input 
                type="range" 
                id="calc-d0" 
                min="1" 
                max="100" 
                step="1" 
                value={d0} 
                onChange={(e) => setD0(Number(e.target.value))} 
              />
            </div>
            <div className="input-group" id="calc-group-c0">
              <div className="input-label-row">
                <label htmlFor="calc-c0">Current Close Rate ($C_0$)</label>
                <span className="input-val-display" id="val-c0">{c0.toFixed(1)}%</span>
              </div>
              <input 
                type="range" 
                id="calc-c0" 
                min="1" 
                max="50" 
                step="0.5" 
                value={c0} 
                onChange={(e) => setC0(Number(e.target.value))} 
              />
            </div>
            <div className="input-group" id="calc-group-c1">
              <div className="input-label-row">
                <label htmlFor="calc-c1">Target Close Rate ($C_1$)</label>
                <span className="input-val-display" id="val-c1">{c1.toFixed(1)}%</span>
              </div>
              <input 
                type="range" 
                id="calc-c1" 
                min="1" 
                max="60" 
                step="0.5" 
                value={c1} 
                onChange={(e) => setC1(Number(e.target.value))} 
              />
            </div>
            <div className="input-group" id="calc-group-cost">
              <div className="input-label-row">
                <label htmlFor="calc-cost">Implementation Value</label>
                <span className="input-val-display" id="val-cost">{formatCurrency(cost)}</span>
              </div>
              <input 
                type="range" 
                id="calc-cost" 
                min="5000" 
                max="25000" 
                step="2500" 
                value={cost} 
                onChange={(e) => setCost(Number(e.target.value))} 
              />
            </div>
          </div>

          <div className="calc-results" id="calc-results-panel">
            <div className="calc-res-item" id="res-item-revenue">
              <div className="calc-res-val green" id="res-revenue">{formatCurrency(incrementalRevenue)}</div>
              <div className="calc-res-lbl">Incremental Monthly Revenue</div>
            </div>
            <div className="calc-res-item" id="res-item-payback">
              <div className="calc-res-val" id="res-payback">
                {paybackMonths === 0 ? 'Infinite' : paybackMonths < 1 ? `${(paybackMonths * 30).toFixed(0)} Days` : `${paybackMonths.toFixed(1)} Months`}
              </div>
              <div className="calc-res-lbl">Payback Period</div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section id="case-studies">
        <div className="section-header" id="cases-header">
          <span className="section-label" id="label-cases">Proven Results</span>
          <h2 className="section-title" id="title-cases">Proven Agency <em>Transformations</em></h2>
          <p className="section-sub" id="sub-cases">How we solved actual operational challenges for scale-ready agencies.</p>
        </div>

        <div className="cases-grid" id="cases-cards-grid">
          <div className="case-card" id="case-card-1">
            <div className="case-body" id="case-body-1">
              <div className="case-meta" id="case-meta-1">
                <span className="case-tag" id="tag-case-1">Outbound Gen & Scheduling</span>
                <span className="case-client" id="client-case-1">Apex Growth Media</span>
              </div>
              <h3 id="title-case-1">Securing 18+ Qualified Bookings in 30 Days</h3>
              <p id="desc-case-1">Apex Growth Media struggled with unpredictable outbound pipelines and a high rate of booking no-shows due to slow scheduling follow-ups. Load Logic built a custom n8n lead generation engine integrated with Apollo and automated SMS/email booking notifications.</p>
              <div className="case-results" id="results-case-1">
                <div className="result-item" id="res-case-1-a">
                  <div className="result-val" id="val-case-1-a">18+</div>
                  <div className="result-lbl" id="lbl-case-1-a">Calls Booked</div>
                </div>
                <div className="result-item" id="res-case-1-b">
                  <div className="result-val" id="val-case-1-b">10<span>x</span></div>
                  <div className="result-lbl" id="lbl-case-1-b">Project ROI</div>
                </div>
              </div>
            </div>
          </div>

          <div className="case-card" id="case-card-2">
            <div className="case-body" id="case-body-2">
              <div className="case-meta" id="case-meta-2">
                <span className="case-tag" id="tag-case-2">Operations & Reporting</span>
                <span className="case-client" id="client-case-2">Vanguard Digital</span>
              </div>
              <h3 id="title-case-2">Cutting Onboarding Friction by 94%</h3>
              <p id="desc-case-2">Vanguard's account managers spent 3 hours manual admin time onboarding each client, leading to delayed campaigns and lost client trust. Load Logic designed a standardized, automated onboarding sequence and a live performance dashboard.</p>
              <div className="case-results" id="results-case-2">
                <div className="result-item" id="res-case-2-a">
                  <div className="result-val" id="val-case-2-a">10<span>m</span></div>
                  <div className="result-lbl" id="lbl-case-2-a">Onboard Time</div>
                </div>
                <div className="result-item" id="res-case-2-b">
                  <div className="result-val" id="val-case-2-b">0</div>
                  <div className="result-lbl" id="lbl-case-2-b">Manual Reports</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE FOUNDER / EXPERTISE SECTION */}
      <section id="about">
        <div className="about-container" id="about-wrapper">
          <div className="about-graphics" id="about-gfx-container">
            <div className="about-card-glow" id="gfx-glow"></div>
            <div className="about-avatar-card" id="avatar-panel">
              <div className="avatar-icon" id="avatar-icon-element">🚀</div>
              <h3 id="founder-name">Load Logic</h3>
              <p id="founder-title">Engineering & Data Science</p>
              <div className="skills-list" id="skills-tags-container">
                <span className="skill-tag" id="skill-1">Large Language Models</span>
                <span className="skill-tag" id="skill-2">RAG Pipelines</span>
                <span className="skill-tag" id="skill-3">n8n Automation</span>
                <span className="skill-tag" id="skill-4">APIs & Integrations</span>
                <span class="skill-tag" id="skill-5">Machine Learning</span>
              </div>
            </div>
          </div>

          <div className="about-bio" id="bio-container">
            <span className="section-label" id="label-about">The Expertise</span>
            <h2 className="section-title" id="title-about">Built by <em>Data Scientists & AI Engineers</em></h2>
            <p className="founder-tagline" id="about-tagline">Theoretical depth paired with hands-on automation expertise.</p>
            <p id="bio-p-1">At Load Logic, we don't just patch software together. Our architectures are built by a team of AI Engineers and Data Scientists specializing in AGI research, LLM fine-tuning, and Retrieval-Augmented Generation (RAG) systems.</p>
            <p id="bio-p-2">With a dual background in Computer Science and Data Science, we bring engineering precision to business operations—turning complex spreadsheets, manuals, and data silos into clean, automated infrastructure.</p>
          </div>
        </div>
      </section>

      {/* BOOKING / QUALIFICATION SECTION */}
      <section className="booking-section" id="book">
        <div className="section-header" id="booking-header">
          <span className="section-label" id="label-booking">Consultation</span>
          <h2 className="section-title" id="title-booking">Secure Your <em>Operational Audit</em></h2>
          <p className="section-sub" style={{ margin: '0 auto 2.5rem' }} id="sub-booking">Complete the form below to help us prepare for your audit.</p>
        </div>

        <div className="booking-wrapper" id="booking-widgets-wrapper">
          <QualificationForm />
          <div className="mt-8 text-center text-muted">
            <p className="font-semibold">Need to speak with us directly?</p>
            <p>Email: <a href="mailto:info@loadlogic.dpdns.org" className="text-accent underline">info@loadlogic.dpdns.org</a></p>
            <p>Phone: <a href="tel:+251-9-72-32-4832" className="text-accent underline">+251-9-72-32-4832</a></p>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="section-header">
            <h2 className="section-title">Client <em>Testimonials</em></h2>
        </div>
        <CircularTestimonialsDemo />
      </section>

      {/* FOOTER */}
      <footer id="site-footer">
        <div className="logo" id="footer-logo">
          <img src={logo} alt="Load Logic Logo" className="w-8 h-8 object-contain" />
          Load<span>Logic</span>
        </div>
        <p id="footer-copy">© 2026 Load Logic. All rights reserved. Custom AI & automation implementations.</p>
        <div className="footer-links" id="footer-links-container">
          <a href="#" id="foot-privacy">Privacy Policy</a>
          <a href="#" id="foot-terms">Terms of Service</a>
          <a href="#services" id="foot-solutions">Solutions</a>
        </div>
      </footer>
    </div>
  );
}
