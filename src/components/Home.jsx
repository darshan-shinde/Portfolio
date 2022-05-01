import React from 'react'
import { AttentionSeeker } from 'react-awesome-reveal';
import helloLight from '../media/hello-light.svg';
import helloDark from '../media/hello-dark.svg';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

const Home = ({darkMode}) => {
    return (
        <div>
            <AttentionSeeker shakeX>
           
            <Row>
                <Col lg={12} xs={12}>
                <h4 className="display-3 hello" align="center">Hi! I'm <code>Darshan Shinde</code></h4>
                {/* <h1 align="center"></h1> */}
                <br></br>
                <h2 className="lead" align="center">I
                    <span
                        class="txt-rotate"
                        data-period="2000"
                        data-rotate='[ " am a Full-Stack Web Developer.", " love designing.", " am tech enthusiast with an interest for coding.", " am a learner for life!" ]'>
                    </span>
                </h2>
                </Col>
                </Row>
                <br></br>
                <br></br>
                <Row>
                    <Container align="center">
                    <Col lg={12} xs={12}>
                  <img align="center" src={darkMode? helloDark : helloLight} alt="hello" className="hello-img"/>
                </Col>
                </Container>
                </Row>
            </AttentionSeeker>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Home