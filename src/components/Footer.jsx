  import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
  import { useState, useEffect } from "react";
  import "./Footer.css";

  const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <footer className="footer">
        <div className="container text-center">
          <p className="mb-3">© 2024 Ajithkumar Portfolio.</p>
          <div className="footer-icons d-flex justify-content-center gap-3 mb-3">
          <a
            href="https://github.com/ajithkumar-v-1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ajith-kumar-v-097860327/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:ajithkumar19092004@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          </div>

        
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="btn scroll-to-top-btn rounded-circle shadow"
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                backgroundColor: "#5d5248",
                color: "#f2f2f2",
                border: "2px solid #a7a4a1",
                zIndex: 1000,
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                opacity: "0.8",
                padding: "0",
              }}
              aria-label="Scroll to top"
            >
              <FaArrowUp size={20} />
            </button>
          )}
        </div>
      </footer>
    );
  };

  export default Footer;
