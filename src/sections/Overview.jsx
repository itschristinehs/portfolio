import { cardDefs, palettes } from '../data';

export default function Overview({ onNavigate }) {
  return (
    <div className="page">
      <header className="hero">
        <div className="eyebrow-row">
          <span className="eyebrow-rule" />
          <span className="eyebrow">Personal website</span>
        </div>
        <p className="hero-tagline">To see, to understand, to move the world…</p>
        <h1 className="hero-name">Christine</h1>
        <p className="hero-lead">
          I'm a researcher working on vision–language–action models and robotics, teaching
          machines to see, understand, and act.
        </p>
        <p className="hero-sub">
          Before that, computer vision and medical imaging. I love languages, films, and the
          places that shape how I understand the world — and I'd like to change a small part of
          it.
        </p>
        <div className="hero-stats">
          <div>
            <span className="stat-label">Languages</span>
            <br />
            <span className="stat-value">Mandarin · English · Français</span>
          </div>
          <div>
            <span className="stat-label">Fields</span>
            <br />
            <span className="stat-value">Robotics · CV · Medical imaging</span>
          </div>
          <div>
            <span className="stat-label">Based</span>
            <br />
            <span className="stat-value">Taiwan</span>
          </div>
          <div>
            <span className="stat-label">Have lived in</span>
            <br />
            <span className="stat-value">Sweden · Canada</span>
          </div>
        </div>
      </header>

      <div className="explore-row">
        <span className="eyebrow">Explore</span>
      </div>

      <div className="card-grid">
        {cardDefs.map((card) => {
          const cp = palettes[card.key];
          return (
            <button
              key={card.key}
              className="explore-card"
              style={{ background: cp.bg, color: cp.text, borderColor: cp.border }}
              onClick={() => onNavigate(card.key)}
            >
              <div className="card-top">
                <span className="card-tag">{card.tag}</span>
                <span className="card-arrow">→</span>
              </div>
              <div className="card-label" style={{ color: cp.accent }}>
                {card.label}
              </div>
              <div className="card-blurb">{card.blurb}</div>
            </button>
          );
        })}
      </div>

      <section className="now-strip">
        <div className="now-inner">
          <div className="now-title-col">
            <span className="now-title">Now</span>
          </div>
          <div className="now-list-col">
            <ul className="now-list">
              <li>
                <span className="now-arrow">→</span>
                <span>Researching vision–language–action models for real-world robotic manipulation.</span>
              </li>
              <li>
                <span className="now-arrow">→</span>
                <span>Writing more — short notes to think in public.</span>
              </li>
              <li>
                <span className="now-arrow">→</span>
                <span>Improving my French, and watching a lot of cinema.</span>
              </li>
              <li>
                <span className="now-arrow">→</span>
                <span>Looking toward research roles in Europe or the US.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
