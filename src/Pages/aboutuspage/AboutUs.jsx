import React, { useState, useEffect } from 'react';
import {
  Car,
  Target,
  Users,
  Award,
  Zap,
  Brain,
  ArrowRight,
  CheckCircle,
  Globe,
  TrendingUp,
  DollarSign,
  Shield,
  Calendar,
  Rocket
} from 'lucide-react';
import '../../stylesheets/AboutUs.css';

const LoadingScreen = () => (
  <div
    className="loader-overlay"
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      top: '70px',
      left: 0,
      width: '100vw',
      height: 'calc(100vh - 70px)',
      backgroundColor: 'white',
      zIndex: 9999,
    }}
  >
    <video
      src="/FInal_Loader_OP_2.mp4"
      autoPlay
      loop
      muted
      playsInline
      style={{ height: '120px', width: '120px' }}
    />
    <img
      src="/loading.gif"
      alt="Loading text animation"
      style={{
        height: '124px',
      }}
    />
  </div>
);

const AboutUs = ({ setIsPageLoading }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (setIsPageLoading) setIsPageLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [setIsPageLoading]);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content-about">
          <h1 className="hero-title">
            Started as a simple idea: 
          </h1>
           <h1 className="hero-title">
          <span className="hero-highlight">True Autonomy. Any Road. Any Condition.</span></h1>
          <p className="hero-description">
            Each road we've traveled, every challenge we've faced, has brought us closer to a breakthrough that doesn’t rely on dense maps or endless data.
            We've designed a system that adapts to any road, any condition, no matter how unpredictable.
            <br /><br />
            <strong>This is just the beginning — the journey ahead is bound to be even more extraordinary.</strong>
          </p>
        </div>
      </section>


      <div className="main-content">
        {/* Key Stats */}
        {/* <div className="main-content">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number blue">2015</div>
              <div className="stat-label">Founded</div>
            </div>
            <div className="stat-card">
              <div className="stat-number green">70%</div>
              <div className="stat-label">R&D Focus</div>
            </div>
            <div className="stat-card">
              <div className="stat-number purple">100</div>
              <div className="stat-label">km/h Goal</div>
            </div>
            <div className="stat-card">
              <div className="stat-number orange">Level-5</div>
              <div className="stat-label">Autonomy</div>
            </div>
          </div>
        </div> */}
        {/* Company Overview */}
        {/* <section className="section-card">
          <div className="section-header-research">
            <h2 className="section-title">Our Mission</h2>
          </div>
          <div className="section-content">
            <p className="section-text">
              Swaayatt Robots is an Indian deep technology company founded in 2015 by Sanjeev Sharma,
              headquartered in Bhopal. We develop <strong className="text-highlight blue">Level-5 autonomous driving systems </strong>
              specifically engineered to navigate the world's most complex traffic scenarios.
            </p>
            <p className="section-text">
              Our industry-first focus is creating self-driving technology that operates safely in
              <strong className="text-highlight purple"> highly stochastic, unstructured, and adversarial traffic conditions</strong>,
              including those unique to developing countries.
            </p>
          </div>
        </section> */}

        {/* Research & Innovation */}
        {/* <section className="section-card">
          <div className="section-header-research">
            <h2 className="section-title">Research & Innovation</h2>
          </div>
          <div className="research-grid">
            <div className="research-item">
              <h3 className="research-title">Deep AI Research</h3>
              <p className="research-text-p">
                Over 70% of our R&D focuses on advanced AI: <strong className="text-highlight purple">reinforcement learning,
                  motion planning, theoretical computer science, and behavioral algorithms</strong>.
              </p>
              <div className="research-badge purple">
                <CheckCircle className="badge-icon" />
                <span className="badge-text">70% R&D Investment</span>
              </div>
            </div>
            <div className="research-item">
              <h3 className="research-title">Real-World Testing</h3>
              <p className="research-text-p">
                Our flagship goal: <strong className="text-highlight green">100 km/h autonomous driving on Indian roads</strong>,
                demonstrating technology maturity in challenging scenarios.
              </p>
              <div className="research-badge green">
                <CheckCircle className="badge-icon" />
                <span className="badge-text">100 km/h Target Speed</span>
              </div>
            </div>
          </div>
        </section> */}



        {/* Founder Section */}
        <section className="section-card">
          <div className="section-header-research">
            {/* <Users className="section-icon blue" /> */}
            <h2 className="section-title">Meet the Founder</h2>
          </div>
          <div className="founder-content">
            <div className="founder-image">
              <img
                src="/sir.jpeg"
                alt="Sanjeev Sharma - Founder & CEO"
                className="founder-photo"
              />
            </div>
            <div className="founder-info">
              <h3 className="founder-name">Sanjeev Sharma</h3>
              <p className="founder-title">Founder & CEO</p>
              <p className="founder-description">
                Sanjeev Sharma deferred a PhD at UMass Amherst to build Swaayatt Robots, pioneering autonomous driving in India’s complex traffic
                using multi-agent reinforcement learning. His research blends reinforcement learning, deep learning, and motion planning to push the
                boundaries of autonomous navigation. His contributions include
                invited talks at the <strong className="text-highlight blue">United Nations</strong> and distinguished
                conferences on AI, reinforcement learning, and robotics.
              </p>

              {/* Know More Button */}
              <div className="founder-button-container">
                <button
                  onClick={() => window.open('https://sanjeevsharma.ai/', '_blank')}
                  className="know-more-button"
                >
                  <span>Know More</span>
                  <ArrowRight className="button-icon" />
                </button>
              </div>

              {/* Awards */}
              <div className="awards-grid">
                <div className="award-badge yellow">
                  <Award className="award-icon" />
                  <span className="award-text">Forbes '30 Under 30'</span>
                </div>
                <div className="award-badge blue">
                  <Award className="award-icon" />
                  <span className="award-text">National Entrepreneurs Award</span>
                </div>
                <div className="award-badge green">
                  <Award className="award-icon" />
                  <span className="award-text">Smart Cities Leader</span>
                </div>
                <div className="award-badge purple">
                  <Award className="award-icon" />
                  <span className="award-text">Top 40 Data Scientists</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="section-card">
          <div className="section-header-research">
            <h2 className="section-title">Key Focus Areas</h2>
          </div>
          <div className="focus-grid">
            <div className="focus-card blue">
              <div className="focus-gradient"></div>
              <div className="focus-content">
                <div className="focus-icon" />
                <h3 className="focus-title">Level-5 Autonomous Driving</h3>
                <p className="focus-description">Advanced self-driving for structured and unstructured environments</p>
              </div>
            </div>
            <div className="focus-card green">
              <div className="focus-gradient"></div>
              <div className="focus-content">
                <div className="focus-icon" />
                <h3 className="focus-title">Mapless Navigation</h3>
                <p className="focus-description">Cost-effective solutions using advanced perception algorithms</p>
              </div>
            </div>
            <div className="focus-card purple">
              <div className="focus-gradient"></div>
              <div className="focus-content">
                <div className="focus-icon" />
                <h3 className="focus-title">Industrial Robotics</h3>
                <p className="focus-description">Adaptable solutions for warehouse and industrial automation</p>
              </div>
            </div>
            <div className="focus-card orange">
              <div className="focus-gradient"></div>
              <div className="focus-content">
                <div className="focus-icon" />
                <h3 className="focus-title">AI Research</h3>
                <p className="focus-description">Motion planning, behavioral learning, and reinforcement learning</p>
              </div>
            </div>
            <div className="focus-card red">
              <div className="focus-gradient"></div>
              <div className="focus-content">
                <div className="focus-icon" />
                <h3 className="focus-title">High-Speed Trials</h3>
                <p className="focus-description">Real-world capability through robust validation testing</p>
              </div>
            </div>
            <div className="focus-card indigo">
              <div className="focus-gradient"></div>
              <div className="focus-content">
                <div className="focus-icon" />
                <h3 className="focus-title">Future Mobility</h3>
                <p className="focus-description">Transforming transportation for universal accessibility</p>
              </div>
            </div>
          </div>
        </section>






        {/* Timeline Section */}
        <section className="section-card timeline-section">
          <div className="section-header-research timeline-header">
            <h2 className="section-title">Startup Journey Timeline</h2>
            <p className="timeline-subtitle">From stealth to scale — a decade of breakthroughs and milestones</p>
          </div>


          <div className="timeline-container">
            <div className="timeline-progress-track">
              <div className="timeline-progress-fill"></div>
            </div>

            {/* Timeline Items */}
            <div className="timeline-milestone" data-year="2015">
              <div className="milestone-marker">
                <div className="marker-ring"></div>
                <div className="marker-dot">
                  <Rocket className="marker-icon" />
                </div>
              </div>
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-year">2015</span>
                  <span className="milestone-phase">Genesis</span>
                </div>
                <h3 className="milestone-title">Founding & Vision</h3>
                <p className="milestone-description">
                  Founded in Bhopal by <strong>Sanjeev Sharma </strong>with the mission to build autonomous driving systems
                  capable of navigating <strong> highly unstructured and adversarial traffic environments</strong> in India.
                  Operated in <strong>stealth and bootstrap mode</strong>, with all R&D self-funded for the first 6 years.
                </p>
                <div className="milestone-tags">
                  <span className="tag bootstrap">Bootstrap Mode</span>
                  <span className="tag stealth">Stealth R&D</span>
                </div>
                <div className="milestone-image-reveal">
                  <img
                    src="S0yByiy7L-w-HQ.jpg"
                    alt="Company founding"
                    className="milestone-image"
                  />
                  <div className="image-overlay">
                    <span className="overlay-text">The Beginning</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-milestone" data-year="2016-2018">
              <div className="milestone-marker ">
                <div className="marker-ring"></div>
                <div className="marker-dot">
                  <Car className="marker-icon" />
                </div>
              </div>
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-year">2016-2018</span>
                  <span className="milestone-phase">Innovation</span>
                </div>
                <h3 className="milestone-title">India's First Real-World Autonomy Demos</h3>
                <p className="milestone-description">
                  Successfully conducted <strong>India’s first on-road autonomous driving demos </strong>in chaotic, unregulated urban conditions using<strong> reinforcement learning (RL)</strong>.
                  Introduced real-time decision-making using a planning stack based on <strong>classical RL</strong>—without relying on HD maps.
                  2017: Demonstrated a <strong>multi-agent reinforcement learning (MARL)</strong> framework for coordination in dynamic traffic, a first-of-its-kind globally.
                </p>
                <div className="milestone-tags">
                  <span className="tag innovation">First in India</span>
                  <span className="tag tech">MARL Framework</span>
                  <span className="tag achievement">No HD Maps</span>
                </div>
                <div className="milestone-image-reveal">
                  {/* <img
                    src="/nlNK5qVqljE-HD.jpg"
                    alt="Autonomous driving demo"
                    className="milestone-image"
                  /> */}
                  <video
                    src="/logo r.mp4"
                    className="milestone-image"
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                  <div className="image-overlay">
                    <span className="overlay-text">Breaking Barriers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-milestone" data-year="2021">
              <div className="milestone-marker ">
                <div className="marker-ring"></div>
                <div className="marker-dot">
                  <TrendingUp className="marker-icon" />
                </div>
              </div>
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-year">2021</span>
                  <span className="milestone-phase">Growth</span>
                </div>
                <h3 className="milestone-title">First Institutional Funding Round</h3>
                <p className="milestone-description">
                  Raised the <strong>first seed funding</strong> round (~$3M) from U.S.-based investors after 6 years of bootstrapping.
                  Marked the transition from R&D focus to commercial prototype development and team expansion.
                </p>
                <div className="milestone-tags">
                  <span className="tag funding">$3M Raised</span>
                  <span className="tag growth">Team Expansion</span>
                </div>
                <div className="milestone-image-reveal">
                  <img
                    src="/car.jpeg"
                    alt="Funding round"
                    className="milestone-image"
                  />
                  <div className="image-overlay">
                    <span className="overlay-text">Scaling Up</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-milestone" data-year="2022-2023">
              <div className="milestone-marker ">
                <div className="marker-ring"></div>
                <div className="marker-dot">
                  <Globe className="marker-icon" />
                </div>
              </div>
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-year">2021-2023</span>
                  <span className="milestone-phase">Expansion</span>
                </div>
                <h3 className="milestone-title">Expansion of Use Cases</h3>
                <p className="milestone-description">
                  Demonstrated vehicle navigation in <strong>off-road, narrow-lane, and geofenced environments</strong>.
                  Focused on extremely low-margin, real-world driving cases like <strong>overtaking, tight obstacle avoidance</strong>, and <strong>path planning in adversarial conditions</strong>.

                </p>
                <div className="milestone-tags">
                  <span className="tag expansion">Off-Road Navigation</span>
                  <span className="tag tech">Edge Cases</span>
                </div>
                <div className="milestone-image-reveal">
                  <img
                    src="/PcB3k26qF2U-HD.jpg"
                    alt="Off-road autonomous navigation"
                    className="milestone-image"
                  />
                  <div className="image-overlay">
                    <span className="overlay-text">Beyond Limits</span>
                  </div>
                </div>
              </div>
            </div>


            <div className="timeline-milestone" data-year="2022-oct">
              <div className="milestone-marker ">
                <div className="marker-ring"></div>
                <div className="marker-dot">
                  <Zap className="marker-icon" />
                </div>
              </div>
              <div className="milestone-card ">
                <div className="milestone-header">
                  <span className="milestone-year">Oct 2023</span>
                  <span className="milestone-phase">Breakthrough</span>
                </div>
                <h3 className="milestone-title">High-Speed Bi-Directional Demo</h3>
                <p className="milestone-description">
                  Groundbreaking <strong>Level-5 demonstration</strong> on <strong>Awadhpuri roads, Bhopal</strong>.
                  Successfully navigated <strong>high-speed</strong>, <strong>single-lane, bidirectional traffic</strong> using real-time RL-based motion planning—without HD maps or V2X support.
                  Demonstration used <strong>Perception-to-Control</strong> end-to-end stack with no manual intervention.
                </p>
                <div className="milestone-tags">
                  <span className="tag breakthrough">Level-5 Demo</span>
                  <span className="tag tech">End-to-End Stack</span>
                  <span className="tag achievement">No Manual Intervention</span>
                </div>
                <div className="milestone-image-reveal">
                  {/* <img
                    src="/image (1).png"
                    alt="High-speed autonomous demo"
                    className="milestone-image"
                  /> */}
                   <video
                    src="/Video1 Swaayatt_Removed Logo.mp4"
                    className="milestone-image"
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                  <div className="image-overlay">
                    <span className="overlay-text">Game Changer</span>
                  </div>
                </div>
              </div>
            </div>



            <div className="timeline-milestone" data-year="2022-feb">
              <div className="milestone-marker ">
                <div className="marker-ring"></div>
                <div className="marker-dot">
                  <Award className="marker-icon" />
                </div>
              </div>
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-year">June 2024</span>
                  <span className="milestone-phase">Recognition</span>
                </div>
                <h3 className="milestone-title">IEEE Spectrum Feature</h3>
                <p className="milestone-description">
                  Research breakthroughs in <strong>RL-based motion planning</strong> featured in <strong>IEEE Spectrum</strong>,
                  gaining international credibility and recognition in the autonomous vehicle community.

                </p>
                <div className="milestone-tags">
                  <span className="tag recognition">IEEE Feature</span>
                  <span className="tag global">Global Recognition</span>
                </div>
                <div className="milestone-image-reveal">
                  <img
                    src="/1718869448725.jpg"
                    alt="IEEE Spectrum publication"
                    className="milestone-image"
                  />
                  <div className="image-overlay">
                    <span className="overlay-text">Global Stage</span>
                  </div>
                </div>
              </div>
            </div>


            <div className="timeline-milestone" data-year="2024">
              <div className="milestone-marker ">
                <div className="marker-ring"></div>
                <div className="marker-dot">
                  <DollarSign className="marker-icon" />
                </div>
              </div>
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-year">June 2024</span>
                  <span className="milestone-phase">Scale</span>
                </div>
                <h3 className="milestone-title">$4M Second Seed Round</h3>
                <p className="milestone-description">
                  Raised <strong>$4 million</strong> in a second angel-led seed round from global investors.
                  Company valued at <strong>$151 million</strong>, with expectations to expand up to <strong>$175 million</strong> as part of a larger ongoing raise.
                  Funding to scale the team, productize core IP, and enter international collaborations with <strong>OEMs</strong> in the US, UK, and the Middle East.
                </p>
                <div className="milestone-tags">
                  <span className="tag funding">$4M Raised</span>
                  <span className="tag valuation">$151M Valuation</span>
                  <span className="tag global">Global OEMs</span>
                </div>
                <div className="milestone-image-reveal">
                  <img
                    src="/image (1).png"
                    alt="Investment growth"
                    className="milestone-image"
                  />
                  <div className="image-overlay">
                    <span className="overlay-text">Global Scale</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-milestone" data-year="2025">
              <div className="milestone-marker ">
                <div className="marker-ring"></div>
                <div className="marker-dot">
                  <Shield className="marker-icon" />
                </div>
              </div>
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-year">Feb 2025</span>
                  <span className="milestone-phase">Defense</span>
                </div>
                <h3 className="milestone-title">Defense Showcase</h3>
                <p className="milestone-description">
                  Conducted a <strong>live demonstration of autonomous vehicle technology</strong>  for the <strong> Indian Armed Forces</strong> .
                  The invited session was attended by <strong> Lt. Gen. P.S. Shekhawat</strong> , General Officer Commanding (GoC) MB Area.
                  Showcased <strong> off-road, high-speed, real-time obstacle avoidance</strong>  without HD maps or infrastructure.
                </p>
                <div className="milestone-tags">
                  <span className="tag defense">Armed Forces</span>
                  <span className="tag achievement">Lt. Gen. Attended</span>
                </div>
                <div className="milestone-image-reveal">
                  {/* <img
                    src="/image (1).png"
                    alt="Defense demonstration"
                    className="milestone-image"
                  /> */}
                  <video
                    src="/army.mp4"
                    className="milestone-image"
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>

                  <div className="image-overlay">
                    <span className="overlay-text">National Pride</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </section>


        {/* <div className="timeline-summary">
            <div className="summary-stats">
              <div className="summary-stat">
                <span className="stat-value">10+</span>
                <span className="stat-label">Years Journey</span>
              </div>
              <div className="summary-stat">
                <span className="stat-value">$7M+</span>
                <span className="stat-label">Total Funding</span>
              </div>
              <div className="summary-stat">
                <span className="stat-value">$151M</span>
                <span className="stat-label">Valuation</span>
              </div>
            </div>
          </div> */}
        {/* Closing Statement */}
        {/* <section className="closing-section">
          <Rocket className="closing-icon" />
          <h2 className="closing-title">Our Commitment</h2>
          <p className="closing-text">
            Swaayatt Robots is committed to transforming the future of transportation,
            making autonomous mobility a safe, scalable, and universal reality.
          </p>
        </section> */}

      </div>
    </div>
  );
};

export default AboutUs;