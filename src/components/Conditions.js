import { Col, Container, Row } from 'react-bootstrap';

import './Conditions.css';

const Conditions = () => {
    return ( <Container fluid className ="background1">
        <Container fluid = "sm"
        style = {
            { backgroundColor: 'black',opacity:0.97}
        } >
        <p className = "conditions-topic" > Learn more about your Condition </p> 
        <Row noGutters style = { {marginTop: 50, marginBottom: 50 }}>
        <Col lg = { 3 } md = { 4 } xs = { 6 } >
        <div className = "depression-image" />
        <a className = "condition-title"
        href = ""
        target = "_blank" >
        Depression </a> </Col> 
        <Col lg = { 3 } md = { 4 } xs = { 6 } >
        < div className = "anxiety-image" />
        <a className = "condition-title"
        href = "https://www.womenshealth.gov/mental-health/mental-health-conditions/anxiety-disorders#:~:text=Anxiety%20is%20a%20normal%20response%20to%20stress.&text=Women%20are%20more%20than%20twice,anxiety%20disorder%20in%20their%20lifetime.&text=Anxiety%20disorders%20are%20often%20treated,meditation%20helps%20with%20anxiety%20disorders." >
        Anxiety </a> 
        </Col> 
        <Col lg = { 3 } md = { 4 } xs = { 6 } >
        <div className = "ptsd-image" />
        <a className = "condition-title"
        href = "https://www.psycom.net/PTSD-symptoms-women#:~:text=According%20to%20the%20American%20Psychological,mental%20health%20implications%20which%20can">
        Schizophrenia</a>  </Col> 
        <Col lg = { 3 } md = { 4 } xs = { 6 } >
        <div className = "ocd-image" />
        <a className = "condition-title"
        href = "https://www.womenshealth.gov/mental-health/mental-health-conditions/obsessive-compulsive-disorder#:~:text=Half%20of%20people%20with%20OCD%20have%20a%20severe%20form%20of%20it.&text=People%20with%20OCD%20are%20at,conditions%2C%20especially%20depression%20and%20anxiety.&text=Eating%20disorders%20are%20more%20common%20in%20women%20with%20OCD.&text=If%20your%20parent%20or%20sibling,likely%20to%20have%20it%20too." >
        Obsessive Compulsive Disorder </a></Col > </Row> 
        <Row noGutters >
        <
        Col lg = { 3 }
        md = { 4 }
        xs = { 6 } >
        <
        div className = "panic-attack-image" / >
        <
        a className = "condition-title"
        href = "https://youngwomenshealth.org/2013/07/03/panic-attacks/" >
        Panic Attacks <
        /a> < /
        Col > <
        Col lg = { 3 }
        md = { 4 }
        xs = { 6 } >
        <
        div className = "bipolar-image" / >
        <
        a className = "condition-title"
        href = "https://www.healthline.com/health/bipolar-disorder/bipolar-symptoms-in-women" >
        Bi - Polar Disorder <
        /a> < /
        Col > <
        Col lg = {3}
        md = { 4 }
        xs = { 6 } >
        <
        div className = "eating-disorder-image" / >
        <
        a className = "condition-title"
        href = "ncbi.nlm.nih.gov/pmc/articles/PMC4539873/" >
        Eating Disorder 
        </a> 
        </Col> 
        < Col lg = { 3 } md = { 4 } xs = { 6 } >    <
        div className = "antipersonality" / >
        <a className = "condition-title"
        href = "ncbi.nlm.nih.gov/pmc/articles/PMC4539873/" >
        Antisocial Personality Disorder
        </a> 
        </Col> 
        </Row> 
        </Container> </Container >
    );
};

export default Conditions;