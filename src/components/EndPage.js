import React from 'react'
import { Container} from 'react-bootstrap';
import { Navbar, Dropdown, DropdownButton, Row, Col, Button } from 'react-bootstrap'
import fail from "../images/result-fail.gif"
import pass from "../images/result-neutral.gif"

const EndPage = ({handleNext, score, name}) => {
  return (
    <Container fluid className="Container h-full vh-100">
        <Navbar className="Navbar p-4" >
            <Container>
            {/* <DropdownButton bg="light" id="dropdown-basic-button" title="Language">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton> */}
            </Container>
        </Navbar>
        <Container fluid="md" className="">
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={6}>
                    <h2 className="text-white">Thanks for taking the phish quiz, {name} make sure to complete the
                    rest of the survey </h2>
                    <p>
                    Practice makes perfect and the more you understand what to look for, the safer you are from phishing attacks.
                    </p>
                    <br/>
                    <p>You can also take a few simple steps to protect your online accounts better. Learn more about phishing online.</p>
                    <h4>Don't forget to return to the survey to complete the last section </h4>
                    {/* <Button variant="primary" onClick={handleNext} size="lg">
                        Take The quiz again
                    </Button> */}
                </Col>
                <Col xs={12} md={6}  className="">
                    {(score < 5)?
                    <img className='mx-auto luck-img d-block container-fluid'  src={fail} alt="hand holding hook" />
                    : <img className='mx-auto luck-img d-block container-fluid'  src={pass} alt="hand holding hook" />
                    }
                    
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default EndPage