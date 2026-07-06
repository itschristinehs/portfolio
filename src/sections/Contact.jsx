export default function Contact() {
  return (
    <div className="page contact-page">
      <div className="eyebrow">Contact</div>
      <p className="contact-lead">Let's talk —</p>
      <h2 className="contact-title">research, film, or anywhere in between</h2>
      <div className="contact-links">
        <a href="mailto:tzutsenhs@gmail.com" className="contact-link">
          Email
        </a>
        <a href="https://github.com/chrisinths0623" className="contact-link">
          GitHub
        </a>
        {/* <a href="#" className="contact-link">
          Google Scholar
        </a> */}
        <a href="https://www.linkedin.com/in/tzu-tsen-hsieh-924a47208/" className="contact-link">
          LinkedIn
        </a>
        <a href="https://drive.google.com/file/d/1szG47ID_lBJzGht3TNx6qY7_Fh8Jxbd1/view?usp=sharing" className="contact-link">
          Download CV (PDF)
        </a>
      </div>
    </div>
  );
}
