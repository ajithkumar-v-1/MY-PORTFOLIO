import Project1 from "../assets/project-1.png";
import Project2 from "../assets/project-2.png";
import Project3 from "../assets/project-3.png";
import Project4 from "../assets/project-4.png";
import "./Projects.css";


const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {/* Project 1 */}
          <div className="col">
            <div className="card h-100">
            <img
  src={Project1} 
  className="card-img-top img-fluid"
  alt="Project 1"
  style={{ 
    height: "200px",
    objectFit: "cover",
    width: "100%"
  }}
/>
              <div className="card-body">
                <h5 className="card-title">CHAT-APP</h5>
                <p className="card-text">
                Chat Application..!!!
Welcome to the Chat Application! This full-stack chat app allows users to send messages in real-time, join chat rooms, and manage their profile settings. The project is built using a MERN stack (MongoDB, Express.js, React.js, Node.js) and includes features like user authentication, socket integration for live chat, and secure communication.
                </p>
                <a
                  href="https://chat-app-tdja.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/ajithkumar-v-1/CHAT-APP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary"
                >
                  View Source
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="col">
            <div className="card h-100">
              <img
                src={Project2}
                className="card-img-top img-fluid"
                alt="Project 1"
                style={{ 
                  height: "200px",
                  objectFit: "cover",
                  width: "100%"
                }}
              />
              <div className="card-body">
                <h5 className="card-title">ART-VISTA-GALLERY</h5>
                <p className="card-text">
                ArtVista Gallery ArtVista Gallery is a full-stack web application designed for showcasing and selling art. It allows users to explore various artworks, purchase them securely, and manage their profiles.
                 Secure Payments: Integration with Stripe/RazorPay for secure payment processing.
                </p>
                <a
                  href="https://willowy-bienenstitch-5869df.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/ajithkumar-v-1/artvista-gallery-front-end"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary"
                >
                  View Source
                </a>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="col">
            <div className="card h-100">
              <img
                src={Project3}
                className="card-img-top img-fluid"
                alt="Project 1"
                style={{ 
                  height: "200px",
                  objectFit: "cover",
                  width: "100%"
                }}
              />
              <div className="card-body">
                <h5 className="card-title">E-COMMERCE</h5>
                <p className="card-text">
                A basic e-commerce application built with MERN stack (MongoDB, Express.js, React, Node.js) and Zustand for state management.

Features
Create, Read, Update, and Delete (CRUD) products
Real-time UI updates using Zustand store
MongoDB database integration
RESTful API endpoints
                </p>
                <a
                  href="https://e-commerce-mn4f.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/ajithkumar-v-1/E-commerce-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary"
                >
                  View Source
                </a>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div className="col">
            <div className="card h-100">
              <img
                src={Project4}
                className="card-img-top img-fluid"
                alt="Project 1"
                style={{ 
                  height: "200px",
                  objectFit: "cover",
                  width: "100%"
                }}
              />
              <div className="card-body">
                <h5 className="card-title">TO-DO-LIST</h5>
                <p className="card-text">
                The To-Do List Application is a simple web-based tool developed using HTML, CSS, and JavaScript. It allows users to create, manage, and organize their daily tasks efficiently. Users can add new tasks, mark tasks as completed, delete tasks, and clear all completed tasks, providing a seamless experience to enhance productivity.
                </p>
                <a
                  href="https://to-do-list-blush-xi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/ajithkumar-v-1/To-do-list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary"
                >
                  View Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
