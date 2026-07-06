import { navDefs } from '../data';

export default function Nav({ route, onNavigate }) {
  return (
    <div className="nav-bar">
      <div className="nav-inner">
        <button className="logo" onClick={() => onNavigate('home')}>
          Christine
        </button>
        <nav className="nav-links">
          {navDefs.map((item) => (
            <button
              key={item.key}
              className={`nav-link${route === item.key ? ' active' : ''}`}
              onClick={() => onNavigate(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
