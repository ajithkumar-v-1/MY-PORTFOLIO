
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Skills.css'; 
import { faBootstrap, faCss3Alt, faGit, faHtml5, faJs, faNodeJs, faNpm, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { TbBrandRedux } from 'react-icons/tb';
import { SiExpress, SiMysql, SiNetlify, SiRender, SiTailwindcss } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  return (
    <section id='Skills' className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        <div className="skills-list">
        <div className="skill">
            <FontAwesomeIcon icon={faHtml5} size="2x" />
            <p>HTML</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCss3Alt} size="2x" />
            <p>CSS</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faJs} size="2x" />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="2x" />
            <p>React</p>
          </div>
          <div className="skill">
            <TbBrandRedux size="2x" />
            <p>REDUX</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faBootstrap} size="2x" />
            <p>BOOTSTRAP</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faNodeJs} size="2x" />
            <p>Node.js</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="2x" />
            <p>MONGODB</p>
          </div>
          <div className="skill">
            <SiMysql size="2x" />
            <p>MySql</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faNpm} size="2x" />
            <p>NPM</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faGit} size="2x" />
            <p>GIT</p>
          </div>
          <div className="skill">
            <SiExpress size="2x" />
            <p>Expressjs</p>
          </div>
          <div className="skill">
            <SiNetlify size="2x" />
            <p>Netlify</p>
          </div>
          <div className="skill">
            <SiRender size="2x" />
            <p>Render</p>
          </div>
          <div className="skill">
            <VscVscode size="2x" />
            <p>VsCode</p>
          </div>
          <div className="skill">
            <SiTailwindcss size="2x" />
            <p>TailWindcss</p>
          </div>
        </div>
      </div>
    </section>
  );
};export default Skills;
