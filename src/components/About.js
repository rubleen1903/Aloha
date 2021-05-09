import { Row, Col, Container } from 'react-bootstrap';

import './About.css';
const About = () => {
  return (
    <Container className ="background" fluid style={{ backgroundColor: '#b9f8f4' }}>
      <Container
        fluid="md"
        style={{ paddingTop: 30, backgroundColor: 'black', opacity:0.85}}
      >
        <p className="professionals-topic  col-md-2">About</p>
        <img src="https://i.imgur.com/uwlhxaa.png" className="centerimg"></img>
        <Row noGutters style={{ marginTop: 50, marginBottom: 50 }}>
          <Col lg={12} md={3} xs={3} style={{ marginTop: 50, marginBottom: 50 }} >
            <div className="about-1" />
             <p className="about"> Aloha is a Mental Health Assistant ChatBot</p>
             <p className="about">It is a bot which helps in relieving stress and will be your companion with whom you can share your happiness and sorrow.
It is a bot and will always be helpful and never judge you in your good or bad times.</p>
          
          </Col>
        </Row>
      </Container>
     </Container>
  );
};

export default About;
