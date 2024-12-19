import  { useEffect, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { LuDownload } from 'react-icons/lu';
import  { ReactTyped } from 'react-typed';
import profilePic from '../assets/pic.jpeg';
import './Home.css';


const Home = () => {
  
  const [loading, setLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [darkMode] = useState(false); 

  useEffect(() => {
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFadeIn(true);
    }, 3000); 
  }, []);

  return (
    <div  id='Home' className="container mt-4">
      <div className="row justify-content-center text-center">
        {/* Profile Picture */}
        <div className="col-12 col-md-4 mb-4">
          <img
            src={profilePic}
            alt="Profile"
            className={`rounded-circle img-fluid mb-4 ${fadeIn ? "fade-in-image" : ""}`}
            style={{ width: '600px', height: '550px'}}
          />
        </div>
        {/* Typed Text / Introduction */}
        <div className="col-12 mb-4">
          <h1 className="font-Oswald ">
            {loading ? (
              'Loading...'
            ) : (
              <ReactTyped
                strings={[
                  'Hi, I am a Full Stack Developer...',
                  'I build amazing web applications...',
                  'I write clean and efficient code...',
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1000}
                loop
              />
            )}
          </h1>
        </div>

       {/* Resume and Contact Buttons */}
<div className="col-12 d-flex flex-column flex-sm-row justify-content-center gap-4">
  {/* Resume Button */}
  <a
  
    href="https://drive.google.com/file/d/1Tz8uVjuE9PK36Troidh_CEQFU7uCsWhf/view?usp=sharing"
    target="_blank"
    download
    className="btn px-4 py-2 rounded-pill border"
    style={{
      borderColor: darkMode ? '#c4bfba' : '#d3d2d1', // Set border color
      color: darkMode ? '#f2f2f2' : '#5d5248', // Text color for dark mode and light mode
      backgroundColor: darkMode ? '#5d5248' : 'transparent', // Background color for dark mode
    }}
  >
    Resume
    <LuDownload />
  </a>

  {/* Contact Button */}
  <a
    href="#contact"
    className="btn px-4 py-2 rounded-pill border"
    style={{
      borderColor: darkMode ? '#c4bfba' : '#d3d2d1', 
      color: darkMode ? '#f2f2f2' : '#5d5248', 
      backgroundColor: darkMode ? '#5d5248' : 'transparent', 
    }}
  >
    Contact
    <MdArrowOutward size={20} />
  </a>
</div>
      </div>
    </div>
  );
};export default Home;

