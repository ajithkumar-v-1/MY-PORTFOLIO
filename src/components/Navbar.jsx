import  { useState } from 'react';
import { Container, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import DarkModeToggle from './DarkModeToggle.jsx';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false); 
  return (
    <div>
      {/* Main Navbar */}
      <BootstrapNavbar expand="lg" bg="light" variant="light" className="py-3">
        <Container>
          {/* Navbar Brand - Centered */}
          <BootstrapNavbar.Brand href="#home" className="mx-auto text-center">
            V AJITH KUMAR
          </BootstrapNavbar.Brand>

          {/* Mobile Toggle Button */}
          <BootstrapNavbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setOpenMenu(!openMenu)} // Toggle menu state
          />

          {/* Navbar Items (Centered on Larger Screens) */}
          <BootstrapNavbar.Collapse id="navbar-nav" className="justify-content-center">
            <Nav>
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#Skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
          <DarkModeToggle />
        </Container>
      </BootstrapNavbar>
    </div>
  );
};
export default Navbar;

