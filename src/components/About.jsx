
import { Container, Row, Col } from "react-bootstrap";
import profilePic from '../assets/pic.jpeg';
import { GrLinkedin } from "react-icons/gr";
import { FaEnvelope, FaGithub } from "react-icons/fa";
const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} md={4} sm={12} className="d-flex justify-content-center mb-4 mb-lg-0">
            <img
              src={profilePic} 
              alt="Profile"
              className="rounded-circle img-fluid" 
              style={{ width: "250px", height: "300px" }}
            />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h2 className="text-center text-md-start">About Me</h2>
            <p className="mt-4 text-center text-md-start">
            Hy I am Ajithkumar from chennai and I come from a BCom background but have transitioned into full-stack development. 
      My passion for technology and coding led me to explore web development, and I am now focused on building dynamic, 
      responsive, and scalable web applications using the MERN stack. I enjoy learning new technologies and am excited to 
      continue growing as a developer. I believe in continuous learning and strive to build applications that are not only functional but also user-friendly and visually appealing.
            </p>
            <div className="d-flex align-items-start justify-content-start gap-3">
  {/* GitHub Link */}
  <a
    href="https://github.com/ajithkumar-v-1"
    target="_blank"
    className="text-primary hover:text-dark"
  >
    <FaGithub size={25} />
  </a>

  {/* Email Link */}
  <a
    href="mailto:ajithkumar19092004@gmail.com"
    target="_blank"
    className="text-orange"
  >
    <FaEnvelope size={30} />
  </a>

  {/* LinkedIn Link */}
  <a
    href="https://www.linkedin.com/in/ajith-kumar-v-097860327/"
    target="_blank"
    className="text-primary"
  >
    <GrLinkedin size={25} />
  </a>
</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
