import React from 'react';
import {
  Button, Container,
} from 'react-bootstrap';
import AboutImageDesktop from '../images/aboutImageDesktop.svg';
import ReactLogo from '../images/logos/reactLogo.png';
import JsLogo from '../images/logos/jslogo.png';
import ReduxLogo from '../images/logos/reduxlogo.png';
import HtmlLogo from '../images/logos/htmlLogo.png';
import CssLogo from '../images/logos/cssLogo.png';
import BootstrapLogo from '../images/logos/bootstrapLogo.png';
import RubyLogo from '../images/logos/rubylogo.png';
import RorLogo from '../images/logos/rorlogo.png';
import PostgresLogo from '../images/logos/postgreslogo.png';
import GitLogo from '../images/logos/gitlogo.png';
import GithubLogo from '../images/logos/githublogo.png';
import RspecLogo from '../images/logos/rspeclogo.png';
import JestLogo from '../images/logos/jestlogo.png';
import ChromeDevLogo from '../images/logos/chromedevtoolslogo.png';
import WebpackLogo from '../images/logos/webpacklogo.png';
import PostmanLogo from '../images/logos/postmanlogo.png';
import NpmLogo from '../images/logos/npmlogo.png';
import FigmaLogo from '../images/logos/figmalogo.png';
import CanvaLogo from '../images/logos/canvalogo.png';

const AboutSection = () => {
  const getResume = () => {
    const resume = '../Full-stack Yetemegn L..pdf';
    window.open(resume);
  };
  return (
    <Container fluid className="p-0 about-section">
      <div className="d-flex flex-column flex-md-column flex-lg-row p-0 py-5">
        <div className="about-content-desc p-5 mx-5">
          <h2>About me</h2>
          <p className="w-75 py-4">
            Hello Im a software developer! I can help you build a product ,
            feature or website Look through some of my work and experience! If
            you like what you see and have a project you need coded, dont
            hestiate to contact me.
          </p>
          <Button className="resume-btn" type="button" onClick={getResume}>Get My Resume</Button>
        </div>
        <img
          className="about-illustration-desktop"
          src={AboutImageDesktop}
          alt="desktop illustration for about section"
        />
      </div>
      <div className="d-flex flex-column align-items-center">
        <hr className="w-75 mx-5" />
        <div className="skills-container w-75">
          <div className="d-flex flex-column">
            <h3 className="skill-title">Front-End</h3>
            <div className="my-skills">
              <div className="skill">
                <img src={ReactLogo} alt="react" />
                <p>React</p>
              </div>
              <div className="skill">
                <img src={ReduxLogo} alt="redux" />
                <p>Redux</p>
              </div>
              <div className="skill">
                <img src={JsLogo} alt="js" />
                <p>Javascript</p>
              </div>
              <div className="skill">
                <img src={HtmlLogo} alt="html5" />
                <p>HTML5</p>
              </div>
              <div className="skill">
                <img src={CssLogo} alt="css3" />
                <p>CSS3</p>
              </div>
              <div className="skill">
                <img src={BootstrapLogo} alt="bootstrap" />
                <p>Bootstrap</p>
              </div>
            </div>
            <h3 className="skill-title">Tools</h3>
            <div className="my-skills">
              <div className="skill">
                <img src={GithubLogo} alt="github" />
                <p>Github</p>
              </div>
              <div className="skill">
                <img src={GitLogo} alt="GIT" />
                <p>Git</p>
              </div>
              <div className="skill">
                <img src={JestLogo} alt="jest" />
                <p>Jest</p>
              </div>
              <div className="skill">
                <img src={RspecLogo} alt="rspec" />
                <p>RSpec</p>
              </div>
              <div className="skill">
                <img src={WebpackLogo} alt="webpack" />
                <p>Webpack</p>
              </div>
              <div className="skill">
                <img src={PostmanLogo} alt="postman" />
                <p>Postman</p>
              </div>
              <div className="skill">
                <img src={NpmLogo} alt="npm" />
                <p>npm</p>
              </div>
              <div className="skill">
                <img src={ChromeDevLogo} alt="chromedev" />
                <p>Chrome Dev Tools</p>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column">
            <h3 className="skill-title">Back-End</h3>
            <div className="my-skills">
              <div className="skill">
                <img src={RubyLogo} alt="ruby" />
                <p>Ruby</p>
              </div>
              <div className="skill">
                <img src={RorLogo} alt="rubyonrails" />
                <p>Ruby on Rails</p>
              </div>
              <div className="skill">
                <img src={PostgresLogo} alt="postgresql" />
                <p>PostgreSQL</p>
              </div>
            </div>
            <h3 className="skill-title">Design</h3>
            <div className="my-skills">
              <div className="skill">
                <img src={FigmaLogo} alt="figma" />
                <p>Figma</p>
              </div>
              <div className="skill">
                <img src={CanvaLogo} alt="canva" />
                <p>Canva</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default AboutSection;
