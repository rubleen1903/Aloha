import { Row, Col, Container } from 'react-bootstrap';

import './Professionals.css';

const Professionals = () => {
  return (
    <Container className ="background" fluid style={{ backgroundColor: '#b9f8f4' }}>
      <Container
        fluid="md"
        style={{ paddingTop: 70, backgroundColor: 'black', opacity:0.85 }}
      >
        <p className="professionals-topic">Professionals</p>
        <Row noGutters style={{ marginTop: 50, marginBottom: 50 }}>
          <Col lg={2} md={3} xs={3} style={{ marginTop: 50, marginBottom: 50 }} >
            <div className="adams-image" />
            <p className="condition-title">Dr. Adams</p>
          </Col>
          <Col lg={2} md={3} xs={3} style={{ marginTop: 50, marginBottom: 50,marginLeft:50 }}>
            <div className="march-image" />
            <p className="condition-title">Dr. March</p>
          </Col>
          <Col lg={2} md={3} xs={3} style={{ marginTop: 50, marginBottom: 50 ,marginLeft:50}}>
            <div className="cara-image" />
            <p className="condition-title">Dr. Cara</p>
          </Col>
          <Col lg={2} md={3} xs={3} style={{ marginTop: 50, marginBottom: 50,marginLeft:50 }}>
            <div className="evans-image" />
            <p className="condition-title">Dr. Evans</p>
          </Col>
          <Col lg={2} md={4} xs={6} style={{ marginTop: 50, marginBottom: 50 }}>
            <div className="freeman-image" />
            <p className="condition-title">Dr. Freeman</p>
          </Col>
        </Row>
      </Container>
     </Container>
  );
};

export default Professionals;
