import Image from "next/image";
import {
  Coffee,
  Download,
  Smartphone,
  Sparkles,
  ShieldCheck,
  Wifi,
  MapIcon,
  Radio,
  Route,
  MapPin,
  Navigation,
  CheckCircle,
  Award,
  Trophy,
  Users,
} from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { FeatureCardObserver } from "./components/FeatureCardObserver";

export default function HomePage() {
  return (
    <>
      {/* Background Decorative Blurs */}
      <div className="glow-bg glow-1" />
      <div className="glow-bg glow-2" />

      {/* Header / Navigation */}
      <header>
        <div className="header-container">
          <a href="#" className="logo">
            <div className="logo-icon">
              <Coffee size={18} />
            </div>
            <span className="logo-text">
              Kape<span>Club</span>
            </span>
          </a>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#install-guide">How to Install</a>
            <ThemeToggle />
            <a
              href="/kapeclub.apk"
              download
              className="btn btn-nav hide-mobile"
            >
              <Download size={14} />
              Download APK
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="badge-pill">
              <Sparkles size={14} />
              Android MVP Launching Now
            </div>
            <h1>
              Find work-friendly cafes with fast WiFi, power outlets, and live
              occupancy.
            </h1>
            <p className="hero-desc">
              Stop guessing. KapeClub is your offline-first guide to finding
              verified workspaces, tracking live crowd levels, and mapping out
              the perfect productive cafe hop.
            </p>

            <div className="cta-group">
              <a href="/kapeclub.apk" download className="btn btn-lg btn-accent">
                <Download size={20} />
                <div className="btn-text">
                  <span className="btn-subtitle">Download for Android</span>
                  <span className="btn-title">Get KapeClub APK</span>
                </div>
              </a>
              <div className="btn btn-lg btn-disabled">
                <Smartphone size={20} />
                <div className="btn-text">
                  <span className="btn-subtitle">Coming Soon</span>
                  <span className="btn-title">iOS App Store</span>
                </div>
              </div>
            </div>

            <div className="hero-meta">
              <span className="meta-item">
                <ShieldCheck size={16} /> Verified APK
              </span>
              <span className="meta-item">
                <Wifi size={16} /> &gt;50Mbps Filters
              </span>
              <span className="meta-item">
                <MapIcon size={16} /> Offline Map Support
              </span>
            </div>
          </div>

          {/* App Preview Graphic */}
          <div className="hero-visual-graphic">
            <Image
              src="/promo-discover.png"
              alt="KapeClub — Find your next work café with map discovery and cafe details"
              className="hero-showcase-img"
              width={520}
              height={520}
              priority
            />
          </div>
        </div>
      </section>

      {/* Showcase 1: Not all cafés are built for work */}
      <section className="showcase alt-bg">
        <div className="showcase-container reverse">
          <div className="showcase-text showcase-animate">
            <div className="badge-pill">
              <MapPin size={14} />
              Curated for Productivity
            </div>
            <h2>Not all cafés are built for work.</h2>
            <p>
              Skip the guesswork. Find spots with the right Wi-Fi, outlets,
              vibe, and work-friendly setup before you go. Every listing is
              community-verified with real telemetry data.
            </p>
            <div className="showcase-features">
              <div className="showcase-feature-item">
                <Wifi size={18} /> Fast Wi-Fi (&gt;50Mbps verified)
              </div>
              <div className="showcase-feature-item">
                <CheckCircle size={18} /> Power outlets rated by abundance
              </div>
              <div className="showcase-feature-item">
                <Radio size={18} /> Focus-friendly noise & vibe levels
              </div>
            </div>
          </div>
          <div className="showcase-visual showcase-animate">
            <Image
              src="/promo-work.png"
              alt="KapeClub showing work-ready cafe filters, WiFi speed, and outlet availability"
              className="showcase-img"
              width={520}
              height={520}
            />
          </div>
        </div>
      </section>

      {/* Showcase 2: From discovery to directions */}
      <section className="showcase">
        <div className="showcase-container">
          <div className="showcase-text showcase-animate">
            <div className="badge-pill">
              <Navigation size={14} />
              Navigate. Arrive. Get to work.
            </div>
            <h2>From discovery to directions.</h2>
            <p>
              Found a café that fits your workflow? Head there faster with
              built-in navigation and a smooth check-in journey. Map-based
              routing with real-time turn-by-turn directions.
            </p>
            <div className="showcase-features">
              <div className="showcase-feature-item">
                <MapIcon size={18} /> Map-based routing
              </div>
              <div className="showcase-feature-item">
                <Route size={18} /> Quick turn-by-turn directions
              </div>
              <div className="showcase-feature-item">
                <CheckCircle size={18} /> Easy one-tap check-ins
              </div>
            </div>
          </div>
          <div className="showcase-visual showcase-animate">
            <Image
              src="/promo-directions.png"
              alt="KapeClub navigation and directions to Jungle Base Grounds café"
              className="showcase-img"
              width={520}
              height={520}
            />
          </div>
        </div>
      </section>

      {/* Showcase 3: Rewards & Challenges */}
      <section className="showcase alt-bg">
        <div className="showcase-container reverse">
          <div className="showcase-text showcase-animate">
            <div className="badge-pill">
              <Trophy size={14} />
              Passport Rewards
            </div>
            <h2>Work, explore, and earn along the way.</h2>
            <p>
              Track café visits, join challenges, and turn everyday coffee runs
              into a more rewarding routine. Earn badges and complete challenges
              across the Pampanga café scene.
            </p>
            <div className="showcase-features">
              <div className="showcase-feature-item">
                <Award size={18} /> Passport rewards & badges
              </div>
              <div className="showcase-feature-item">
                <Coffee size={18} /> Cafe-hopping challenges
              </div>
              <div className="showcase-feature-item">
                <Users size={18} /> Community-powered insights
              </div>
            </div>
          </div>
          <div className="showcase-visual showcase-animate">
            <Image
              src="/promo-rewards.png"
              alt="KapeClub passport rewards showing challenges and badges earned"
              className="showcase-img"
              width={520}
              height={520}
            />
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="features" id="features">
        <div className="section-container">
          <div className="section-header">
            <h2>Engineered for High-Productivity Coffee Sessions</h2>
            <p>
              No more sitting around waiting for pages to load or hoping there
              is an outlet near the corner seat.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-box accent">
                <Wifi size={24} />
              </div>
              <h3>Work-Ready Filters</h3>
              <p>
                Instantly screen cafes by internet speeds over 50Mbps, power
                outlet abundance, late-night operating hours, and air-con
                strength.
              </p>
            </div>

            <div className="feature-card">
              <div className="icon-box warning">
                <Radio size={24} />
              </div>
              <h3>Crowdsourced Telemetry</h3>
              <p>
                Low-friction check-ins allow real-time reporting on cafe
                occupancy. See if a spot is full or quiet before you make the
                trip.
              </p>
            </div>

            <div className="feature-card">
              <div className="icon-box danger">
                <MapIcon size={24} />
              </div>
              <h3>Offline-First Architecture</h3>
              <p>
                Download comprehensive vector map packs of city areas to search
                for locations, read reviews, and check navigation without
                needing cellular data.
              </p>
            </div>

            <div className="feature-card">
              <div className="icon-box accent">
                <Route size={24} />
              </div>
              <h3>Cafe Hop Planner</h3>
              <p>
                Plan out a multi-stop itinerary. Map out your route across
                areas, preview details, and get live turn-by-turn routing
                directions in one go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Install Android APK Guide */}
      <section className="install-guide" id="install-guide">
        <div className="section-container">
          <div className="install-wrapper">
            <div className="install-info">
              <h2>Installing the KapeClub APK</h2>
              <p>
                Since KapeClub is currently in beta launch for the Philippine
                developer and maker community, we are distributing it directly
                as a secure Android APK. Follow these simple steps to get
                started:
              </p>

              <div className="steps-list">
                <div className="step-item">
                  <span className="step-num">1</span>
                  <div className="step-content">
                    <h4>Download the file</h4>
                    <p>
                      Click the &quot;Download APK&quot; button on your Android device to
                      save the <code>kapeclub.apk</code> file.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <span className="step-num">2</span>
                  <div className="step-content">
                    <h4>Enable installation source</h4>
                    <p>
                      If prompted, allow your browser (e.g. Chrome) to install
                      applications from unknown sources. This is a standard
                      prompt for non-Play Store apps.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <span className="step-num">3</span>
                  <div className="step-content">
                    <h4>Run the installer</h4>
                    <p>
                      Open your file manager or browser downloads, tap{" "}
                      <code>kapeclub.apk</code>, and click{" "}
                      <strong>Install</strong>. Once completed, KapeClub is
                      ready to run!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="install-graphic">
              <div className="install-card">
                <div className="security-badge">
                  <ShieldCheck size={14} />
                  <span>Secure Build Verified</span>
                </div>
                <h3>Package Details</h3>
                <ul className="package-details">
                  <li>
                    <span>Filename</span> <strong>kapeclub.apk</strong>
                  </li>
                  <li>
                    <span>Version</span> <strong>0.1.0-beta</strong>
                  </li>
                  <li>
                    <span>Platform</span> <strong>Android 8.0+</strong>
                  </li>
                  <li>
                    <span>Size</span> <strong>~156 MB</strong>
                  </li>
                  <li>
                    <span>Signature</span> <strong>SHA-256 Verified</strong>
                  </li>
                </ul>
                <a
                  href="/kapeclub.apk"
                  download
                  className="btn btn-accent btn-block"
                >
                  <Download size={18} />
                  Download KapeClub APK
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">
                <Coffee size={18} />
              </div>
              <span className="logo-text">
                Kape<span>Club</span>
              </span>
            </div>
            <p>
              The ultimate cafe discovery and live crowd telemetry companion for
              builders in the Philippines.
            </p>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} KapeClub. Handcrafted for the
              Philippine Maker Community. Run offline, work anywhere.
            </p>
          </div>
        </div>
      </footer>

      {/* Client-side scroll animation observer */}
      <FeatureCardObserver />
    </>
  );
}
