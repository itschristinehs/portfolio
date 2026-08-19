import { useState } from 'react';
import { lifeTabDefs, films, posts, trips, tripGroups } from '../data';

export default function Life() {
  const [tab, setTab] = useState('film');
  const [playing, setPlaying] = useState(null);
  const [f, setF] = useState({ year: 'all', region: 'all', purpose: 'all' });
  const films = [
    { yt: 'ydMNk5UsWwU', title: 'My First personal video', role: 'Directed', year: '2025', desc: '...' },
  ];
  const matches = (t) =>
    (f.year === 'all' || t.year === f.year) &&
    (f.region === 'all' || t.region === f.region) &&
    (f.purpose === 'all' || t.purposes.includes(f.purpose));
  const shownTrips = trips.filter(matches);

  return (
    <div className="page page-inset life-page">
      <div className="eyebrow">Life</div>
      <h2 className="page-title">Film, writing &amp; travel</h2>
      <p className="page-subtitle">What I make and where I go when I'm not at a desk.</p>

      <div className="sub-tabs">
        {lifeTabDefs.map((t) => (
          <button
            key={t.key}
            className={`sub-tab${tab === t.key ? ' active' : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'film' && (
        <div className="film-grid">
          {films.map((film, i) => (
            <div key={i} className="film-card">
              <div className="film-thumb">
                {playing === i ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${film.yt}?rel=0&autoplay=1`}
                    title={film.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    className="film-thumb-btn"
                    onClick={() => setPlaying(i)}
                    style={{ backgroundImage: `url(https://i.ytimg.com/vi/${film.yt}/hqdefault.jpg)` }}
                  >
                    <span className="film-play">▶</span>
                  </button>
                )}
              </div>
              <div className="film-head">
                <div className="film-title">{film.title}</div>
                <div className="film-meta">{film.role} · {film.year}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'writing' && (
        <div>
          {posts.map((post, i) => (
            <a key={i} href={post.href} className="post-row">
              <div className="post-date">{post.date}</div>
              <div className="post-title">{post.title}</div>
              <div className="post-excerpt">{post.excerpt}</div>
            </a>
          ))}
        </div>
      )}

      {tab === 'travel' && (
        <div className="travel">
          <div className="tv-filters">
            {tripGroups.map((g) => (
              <div className="tv-row" key={g.key}>
                <span className="tv-row-label">{g.label}</span>
                <div className="tv-chips">
                  {['all', ...g.values].map((v) => (
                    <button
                      key={v}
                      className={`tv-chip${f[g.key] === v ? ' is-active' : ''}`}
                      onClick={() => setF({ ...f, [g.key]: v })}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="tv-timeline">
            {[...trips].reverse().map((t) => (
              <button
                key={t.when + t.title}
                className={`tv-dot${matches(t) ? '' : ' is-dim'}`}
                onClick={() => setF({ year: t.year, region: t.region, purpose: 'all' })}
              >
                <span className={`tv-dot-mark${t.upcoming ? ' is-hollow' : ''}`} />
                <span className="tv-dot-when">{t.when}</span>
                <span className="tv-dot-place">{t.title}</span>
              </button>
            ))}
          </div>

          <p className="tv-hint">
            {shownTrips.length === trips.length
              ? `${trips.length} trips`
              : `Showing ${shownTrips.length} of ${trips.length} trips`}
            {' · hollow dots are upcoming · arrows list the stops on a multi-city trip.'}
          </p>

          {shownTrips.length === 0 && (
            <div className="tv-empty">
              <span>No trips match that combination.</span>
              <button onClick={() => setF({ year: 'all', region: 'all', purpose: 'all' })}>
                Show all again
              </button>
            </div>
          )}

          {shownTrips.map((t) => (
            <div className="tv-trip" key={t.when + t.title}>
              <div className="tv-trip-side">
                <div className="tv-trip-when">{t.when}</div>
                <div className="tv-trip-where">{t.where}</div>
                <div className="tv-tags">
                  <span className="tv-tag is-region">{t.region}</span>
                  {t.purposes.map((q) => (
                    <span className="tv-tag" key={q}>{q}</span>
                  ))}
                  {t.upcoming && <span className="tv-tag is-up">upcoming</span>}
                </div>
              </div>
              <div className="tv-trip-main">
                <a className="tv-trip-title" href={t.href}>{t.title}</a>
                {t.subtitle && <div className="tv-trip-sub">{t.subtitle}</div>}
                {t.desc && <p className="tv-trip-desc">{t.desc}</p>}
                {t.route && <div className="tv-trip-route">{t.route}</div>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}