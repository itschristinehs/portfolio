import { useState } from 'react';
import { workTabDefs, publications, projects } from '../data';

export default function Work() {
  const [tab, setTab] = useState('research');

  return (
    <div className="page page-inset work-page">
      <div className="eyebrow">Work</div>
      <h2 className="page-title">Research &amp; projects</h2>
      <p className="page-subtitle">
        Papers, tools, and things I've built — vision–language–action, computer vision, medical
        imaging.
      </p>

      <div className="sub-tabs">
        {workTabDefs.map((t) => (
          <button
            key={t.key}
            className={`sub-tab${tab === t.key ? ' active' : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'research' && (
        <div>
          {publications.map((pub, i) => (
            <div className="pub-row" key={i}>
              <div className="pub-year">{pub.year}</div>
              <div className="pub-body">
                <div className="pub-title">{pub.title}</div>
                <div className="pub-authors">{pub.authors}</div>
                <div className="pub-venue">{pub.venue}</div>
                {pub.links.length > 0 && (
                  <div className="pub-links">
                    {pub.links.map((lnk, j) => (
                      <a key={j} href={lnk.href} className="pub-link">
                        {lnk.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'projects' && (
        <div className="project-list">
          {projects.map((proj, i) => (
            <a key={i} href={proj.href} className="project-row">
              <div className="project-head">
                <div className="project-name">{proj.name}</div>
                <div className="project-tag">{proj.tag}</div>
              </div>
              <div className="project-desc">{proj.desc}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
