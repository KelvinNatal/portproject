import ProjectCard from './ProjectCard';
import { Container, Row, Col, Tab } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

import projImg1 from "../../assets/img/Pokemon.png";
import projImg2 from "../../assets/img/GPT.png";
import projImg3 from "../../assets/img/Agendament.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";

import '../../styles/projects.css';
import { useEffect } from 'react';


const projects = [
    {
      title: "API REST Pokemon",
      description: "API & Web Development",
      imgUrl: projImg1,
    },
    {
      title: "Responsive Site",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Scheduling System",
      description: "Database & Development",
      imgUrl: projImg3,
    }
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
                    <h2>Projetos</h2>
                    <p>Alguns projetos feitos por mim, tanto para treino quanto para utilização.</p>
                    <Tab.Container id="projects-tabs" className="project-T" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Primeira aba</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Segunda Aba</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Terceira Aba</Nav.Link>
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
