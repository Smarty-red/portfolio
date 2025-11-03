import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Results-driven <b className="purple">Senior Software Engineer</b> with 10 years of experience architecting, developing, and deploying <b className="purple">scalable full-stack web 
              applications and microservices</b> across diverse tech ecosystems.
              Proven expertise in <b className="purple">MERN, MEVN, and LAMP stacks</b>, with advanced proficiency in JavaScript, TypeScript, React.js, Node.js, Express.js, 
              and MongoDB, as well as cloud-native technologies such as Docker, Kubernetes, AWS, and GCP.
              Highly skilled in <b className="purple">API integration, software architecture design, and CI/CD automation</b>, with a strong background in <b className="purple">DevOps practices, 
              cloud infrastructure, and performance optimization.</b>
              Experienced <b className="purple">Tech Lead and Mentor</b>, known for guiding teams through <b className="purple">agile workflows</b> to deliver <b className="purple">secure, reliable, and business-focused 
              software solutions</b> that scale.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Smarty-red"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/smarty-navar-82043337b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/yourhandle"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
