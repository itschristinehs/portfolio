import { useState } from 'react';
import { lifeTabDefs, films, posts, places } from '../data';

export default function Life() {
  const [tab, setTab] = useState('film');

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
        <div>
          {films.map((film, i) => (
            <a key={i} href={film.href} className="film-card">
              <div className="film-thumb">
                <span className="film-play">▶</span>
              </div>
              <div className="film-head">
                <div className="film-title">{film.title}</div>
                <div className="film-meta">
                  {film.role} · {film.year}
                </div>
              </div>
              <div className="film-desc">{film.desc}</div>
            </a>
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
        <div className="travel-grid">
          {places.map((place, i) => (
            <div key={i}>
              <div className="travel-photo">
                <span className="travel-photo-label">photo</span>
              </div>
              <div className="travel-name">{place.name}</div>
              <div className="travel-note">{place.note}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
