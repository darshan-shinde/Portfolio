import { useState, React } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import contactLight from '../media/contact-light.svg';
import contactDark from '../media/contact-dark.svg';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import pplight from '../media/pplight.png'
import ppdark from '../media/ppdark.png'
// import resume from '../media/Resume_darshan.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import Col from 'react-bootstrap/Col'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'

const Contact = ({darkMode}) => {

    const [templateParams, setTemplateParams] = useState({
		from_name: '',
        message: ''
	});

    const onInputChange = e => {
		setTemplateParams({...templateParams,[e.target.name]: e.target.value})
	}

    const onSubmit = async (e) => {
		e.preventDefault();
            emailjs.send('service_4t1bk68','template_icvnv8c', templateParams,'user_mNZI64CQWAWMujmZ1AWIk')
                .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                console.log('FAILED...', err);
                });
                swal({
                    title: "Sent Successfully!",
                    text: "Glad to hear from you! I will get back to you as soon possible",
                    icon: "success",
                  });
                setTemplateParams({
                    from_name: '',
                    message: ''
                })
    }

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Container>
            <Row>
                <Col lg={8}>
                <br></br>
                <h2 className="lead">Contact me!</h2>
                <p className="contact-text">Drop a suggestion, feedback, opportunities or we can colaborate on a project. Please mention your contact details if you are expecting a reply.</p>
                <br></br>
                       
                          <Button onClick={() => window.location = 'mailto:shindedarshan502@gmail.com'} variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                            <FontAwesomeIcon className="dark" size="lg" icon={faEnvelope}/> shindedarshan502@gmail.com
                          </Button>
                       
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                <img align="center" src={darkMode? contactDark : contactLight} alt="contact" className="contact-img img-fluid"/>
                </Col>
                {/* <Col lg={4}>
                <br></br>
                <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group>
                        <Form.Control onChange={e => onInputChange(e)} value={templateParams.from_name} name="from_name" className="ph name" type="name" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control  onChange={e => onInputChange(e)} value={templateParams.message} name="message"  as="textarea" rows={8} className="ph msg" placeholder="Enter your message" />
                    </Form.Group>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className='a' type="submit">
                        Submit
                    </Button>
                </Form>
                </Col> */}
                <Col lg={4} align='center'>
                    <Card className="nbcard">
                      <Card.Body>
                        <Card.Title><h2 className="lead">Let's Connect!</h2></Card.Title>
                        {/* <br></br> */}
                        <a href="https://www.linkedin.com/in/shinde-darshan/" target="_blank" rel="noreferrer noopener">
                          <Button variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                            <FontAwesomeIcon className="dark" size="lg" icon={faLinkedin}/> Darshan Shinde
                          </Button>
                        </a>
                        <a href="https://github.com/darshan-shinde" target="_blank" rel="noreferrer noopener">
                          <Button variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                            <FontAwesomeIcon className="dark" size="lg" icon={faGithub}/> Darshan-Shinde
                          </Button>
                        </a>
                        <br></br>
                        <br></br>
                        <img src={ darkMode? ppdark : pplight} alt="connect" className="connect-img img-fluid animated"/>
                        {/* */}
                      </Card.Body>
                    </Card>
                  </Col>
            </Row>
            </Container>
            <br></br>
        </div>
    )
}

export default Contact