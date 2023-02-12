import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from 'react-bootstrap';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import colorSharp from "../assets/img/color-sharp.png"


import 'react-multi-carousel/lib/styles.css';
import '../styles/skills.css'

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>
                            Skills
                        </h2>
                        <p>Deixo abaixo algumas de minhas linguagens que mais domino e venho aperfeiçoando.</p>
                        <Carousel responsive={responsive} infinie={true} className="skill-slider">
                            <div className='item'>
                                <img src={meter1} alt="web"/>
                                <h5>HTML</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="brand"/>
                                <h5>CSS</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="design"/>
                                <h5>Javascript</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="dev"/>
                                <h5>React JS</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="dev"/>
                                <h5>PHP</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="dev"/>
                                <h5>My Sql</h5>
                            </div>
                        </Carousel>
                     </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="backg"/>
    </section>
  )
}

export default Skills
