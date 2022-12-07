import {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

import '../styles/contacts.css'

const Contact = () => {
  
    const formInitalDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        messagem: ''
    }

    const [formDetails, setFormDetails] = useState(formInitalDetails);
    const [buttonText, setButtonText] = useState('Enviar');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Enviando...');
        let response = await fetch("http://localhost:5000",{
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Enviado");
        let result = response.json();
        setFormDetails(formInitalDetails);
        if (result.code === 200){
            setStatus({success: true, message: "Mensagem enviada com sucesso!"})
        }else{
            setStatus({success: false, message: "Mensagem não enviada, por favor tente novamente mais tarde"})
        }
    }

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
        
        const hiddenElements = document.querySelectorAll('.animImage');
        hiddenElements.forEach((el) => observer.observe(el));
    }, [])    

    return (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} className="animImage" alt="im"/>
                </Col>
                <Col md={6}>
                    <h2>Het In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formInitalDetails.firstName} placeholder="Primeiro Nome" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formInitalDetails.lastName} placeholder="Sobrenome" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" value={formInitalDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" value={formInitalDetails.phone} placeholder="Telefone" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col>
                                <textarea row="6" value={formDetails.messagem} placeholder="Mensagem" onChange={(e) => onFormUpdate('messagem', e.target.value)}/>
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact
