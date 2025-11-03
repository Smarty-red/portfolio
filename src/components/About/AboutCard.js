import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Results-driven <b className="purple">Senior Software Engineer</b> with 10 years of experience architecting, developing, and deploying <b className="purple">scalable full-stack web 
            applications and microservices</b> across diverse tech ecosystems.
            Proven expertise in <b className="purple">MERN, MEVN, and LAMP stacks</b>, with advanced proficiency in JavaScript, TypeScript, React.js, Node.js, Express.js, 
            and MongoDB, as well as cloud-native technologies such as Docker, Kubernetes, AWS, and GCP.
            Highly skilled in <b className="purple">API integration, software architecture design, and CI/CD automation</b>, with a strong background in <b className="purple">DevOps practices, 
            cloud infrastructure, and performance optimization.</b>
            Experienced <b className="purple">Tech Lead and Mentor</b>, known for guiding teams through <b className="purple">agile workflows</b> to deliver <b className="purple">secure, reliable, and business-focused 
            software solutions</b> that scale.
            <br />
            <br />
            <b className="purple">Experience:</b>
            <br />
            <b>Tech Innovators Japan, Remote – Senior MERN Stack Developer (Aug 2022 – May 2024)</b>
            <ul>
              <li>Spearheaded development of scalable, high-performance MERN web apps, reducing page load times by 30% and boosting engagement by 25%.</li>
              <li>Architected responsive React.js front-ends, improving user satisfaction by 40%.</li>
              <li>Led migration from monolithic to microservices architecture with Node.js and Express.js, improving scalability by 50% and reducing feature delivery time by 35%.</li>
              <li>Engineered RESTful APIs and integrated third-party services, cutting response times by 20%.</li>
              <li>Optimized MongoDB data models with Mongoose, enhancing query performance by 30%.</li>
              <li>Implemented CI/CD pipelines with Jenkins and AWS, reducing deployment times by 40%.</li>
              <li>Integrated WebSocket-based real-time features, supporting 5,000+ concurrent users.</li>
              <li>Applied OWASP-compliant security practices, cutting vulnerabilities by 50%.</li>
              <li>Mentored junior developers, increasing team productivity by 25%.</li>
            </ul>
            <b>GlobalTech Japan, Remote – Full Stack Developer (Mar 2020 – Aug 2022)</b>
            <ul>
              <li>Developed high-performance MERN applications, reducing load times by 25% and improving UX.</li>
              <li>Built React.js + Redux front-ends with interactive features, boosting retention by 30%.</li>
              <li>Developed Node.js APIs with secure, low-latency data handling (−20% response time).</li>
              <li>Optimized MongoDB queries and storage, cutting database overhead by 15%.</li>
              <li>Led a team to build a scalable e-commerce platform supporting 20,000+ users.</li>
              <li>Deployed to AWS and Heroku, maintaining 99.9% uptime.</li>
              <li>Implemented Jest and Mocha tests achieving 85% coverage.</li>
              <li>Adopted GraphQL for flexible data querying, reducing complex query times by 30%.</li>
            </ul>
            <b>Innovative Solutions Japan, Sapporo – Senior Web Developer (May 2018 – Mar 2020)</b>
            <ul>
              <li>Developed and maintained MERN applications, reducing client-side render time by 20%.</li>
              <li>Built RESTful APIs in Node.js/Express.js supporting 100,000+ active users.</li>
              <li>Implemented server-side rendering with React.js, improving SEO by 35%.</li>
              <li>Integrated real-time chat with WebSockets for 10,000+ concurrent users.</li>
              <li>Optimized MongoDB indexing, cutting query times by 40%.</li>
              <li>Containerized deployments with Docker + Kubernetes, boosting release frequency by 50%.</li>
              <li>Introduced performance monitoring (New Relic, Datadog), improving responsiveness by 25%.</li>
            </ul>
            <b>Tech Vision Japan, Fukuoka – MERN Stack Developer (Nov 2015 – May 2018)</b>
            <ul>
              <li>Developed full-stack MERN applications across finance, e-commerce, and healthcare sectors, improving user satisfaction by 30%.</li>
              <li>Optimized MongoDB for large datasets (1M+ daily records) without performance loss.</li>
              <li>Built dynamic React.js/Redux interfaces, reducing user churn by 20%.</li>
              <li>Developed RESTful APIs in Node.js/Express.js with 25% faster response times.</li>
              <li>Maintained automated Jest/Mocha testing suites, halving production bugs.</li>
              <li>Implemented OAuth 2.0 and JWT authentication, strengthening security compliance.</li>
              <li>Enhanced CI with CircleCI and GitHub Actions, reducing integration time by 40%.</li>
            </ul>
            <br />
            <b className="purple">Technical Skills:</b>
            <ul>
              <li><strong>Languages:</strong> JavaScript (ES6+), TypeScript, Python, Java, PHP</li>
              <li><strong>Front-End:</strong> React.js, Next.js, SPA Architecture, Responsive Design, State Management (Redux, Context API), UI/UX Optimization, Tailwind CSS, Material-UI</li>
              <li><strong>Back-End:</strong> Node.js, Express.js, RESTful APIs, GraphQL, Microservices, gRPC, Event-Driven Systems, JWT, OAuth 2.0, WebSocket</li>
              <li><strong>Databases:</strong> MongoDB, PostgreSQL, Redis, ElasticSearch, MySQL, SQL Optimization, Mongoose, Prisma</li>
              <li><strong>Cloud & DevOps:</strong> AWS (EC2, S3, Lambda), Docker, Kubernetes, CI/CD (GitHub Actions, Jenkins), Terraform, Nginx, Observability (Prometheus, Grafana), Vercel, Netlify</li>
              <li><strong>Testing & QA:</strong> Jest, Mocha, Chai, Cypress, Supertest, ESLint, Prettier</li>
              <li><strong>Tools & Workflow:</strong> Git, GitHub, GitLab, Jira, Trello, Postman, VS Code, Agile & Scrum</li>
              <li><strong>Soft Skills:</strong> Analytical Thinking, Mentorship, Collaboration, Ownership, Problem Solving, Adaptability</li>
            </ul>
            <br />
            <b className="purple">Soft Skills:</b>
            <ul>
              <li><strong>Analytical Thinking:</strong> Skilled at evaluating complex technical problems, identifying root causes, and implementing scalable, long-term solutions.</li>
              <li><strong>Mentorship:</strong> Passionate about coaching junior developers, conducting code reviews, and fostering a culture of learning and knowledge sharing.</li>
              <li><strong>Collaboration:</strong> Excellent team player experienced in Agile and cross-functional collaboration with designers, PMs, and QA teams.</li>
              <li><strong>Ownership:</strong> Takes full accountability for project lifecycles — from planning and architecture to deployment and maintenance.</li>
              <li><strong>Problem Solving:</strong> Expert at diagnosing bottlenecks and optimizing both performance and developer workflows for efficiency.</li>
              <li><strong>Adaptability:</strong> Quickly learns and applies new technologies, frameworks, and methodologies in fast-paced, evolving environments.</li>
              <li><strong>Communication:</strong> Clear, concise communicator able to bridge technical and business goals effectively.</li>
              <li><strong>Leadership:</strong> Leads with empathy and technical excellence, ensuring quality, teamwork, and innovation across development teams.</li>
            </ul>
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Suzuki</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;
