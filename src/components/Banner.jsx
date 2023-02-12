import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg"

import '../styles/banner.css'


const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 250;

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
          } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(150);
          } 

    }

    useEffect(() =>{
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    })

  return (
        <section className='banner' id="home">
            <Container>
                <Row classname="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Bem vindo ao meu Portfolio </span>
                        <h1>{`Meu Nome é Kelvin Minhas Skills São`}<br/><span className="wrap">{text}</span></h1>
                        <p>Apaixonado por tecnologia desde o ensino médio, e possuo faculdade de Analise e desenvolvimento de sistemas, atualmente fazendo MBA de Desenvolvimento de Software para aprimorar minhas habilidades.</p>
                        <a href="https://linkedin.com/in/kelvin-natal-40ba681a1/"><button onClick={() => console.log('Connect')}>Vamos Conectar<ArrowRightCircle size={25}/></button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

export default Banner
