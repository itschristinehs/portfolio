export default function About() {
  return (
    <div className="page page-inset about-page">
      <div className="eyebrow">About</div>
      <h2 className="page-title">A little about me</h2>
      <div className="about-layout">
        <div className="about-copy">
          <p className="about-lead">
            I recently knew a term "Renaissance man". I think this is the best fit of my current life.
            I started in computer vision and medical imaging — building models that could read a
            scan or make sense of a scene. That work pulled me toward a harder question: not just
            how machines perceive the world, but how they can act in it.
          </p>
          <p className="about-body">
            I'm mainly organizing NTU AI safety. These days I work on vision–language–action models and robotics. Outside research,
            I'm the same curious person: I love languages, make the occasional film, travel
            whenever I can, and think a lot about music, movies, and writing.
          </p>
          <p className="about-body">
            I keep this site simple on purpose — a quiet place to document what I make and where
            my head is. It grows slowly, like most good things.
          </p>
        </div>
        <div className="portrait-box">
          <img src="profile.JPG" alt="Portrait" className="portrait-image" />
        </div>
      </div>
    </div>
  );
}
