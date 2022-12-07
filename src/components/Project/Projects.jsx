import ProjectCard from './ProjectCard';
import { Container, Row, Col, Tab } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";

import '../../styles/projects.css';
import { useEffect } from 'react';


const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  

const Projects = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting){
              entry.target.classList.add('show');
          } else {
              entry.target.classList.remove('show');
          }
      });
    });
  
    const hiddenElements = document.querySelectorAll('.projectAnim');
    hiddenElements.forEach((el) => observer.observe(el));
  }, [])
  
  return (
    <section className="project" id="projects">
        <Container>
            <Row>
            <div className='projectAnim'>
                <Col size={12} >                
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni debitis unde blanditiis maxime quam voluptatibus laboriosam, tempore fuga molestiae nobis, dicta asperiores optio, ipsa ipsum quibusdam itaque. Omnis, nulla vel.</p>
                    <Tab.Container id="projects-tabs" className="project-T" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => (
                                            <ProjectCard
                                              key={index}
                                              {...project}
                                            />
                                        ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                    Lorem Ipsum
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                    Lorem Ipsum
                            </Tab.Pane>
                        </Tab.Content>                        
                    </Tab.Container>                    
                </Col>
                </div> 
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2} alt="backg"/>
    </section>
  )
}

export default Projects
