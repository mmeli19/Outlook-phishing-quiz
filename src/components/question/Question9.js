import React, { useState, useEffect } from "react";
import { Navbar, Container, Card, Toast, Button } from "react-bootstrap";
import MailSubject from "../MailSubject";
import ShowMe from "../buttons/ShowMe";
import ToastWrapper from "../layout/ToastWrapper";

const Question9 = ({ handleNext, page, obj, handleScore, email, name }) => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [showpop, setShowpop] = useState(false);
  const handleStep = (e) => {
    setStep((step) => step + 1);
  };
  const handleCorrect = (e) => {
    // const value = e.target.value;
    // if (value === obj[page]) {
    //   handleScore();
    //   setCorrect(true);
    // }
    handleStep();
  };
  useEffect(() => {
    if (step === 1) {
      handleNext();
    } else if (step === 2) {
      setShowpop(true);
      window.scrollTo({
        top: document.body.scrollHeight + 200,
        left: 0,
        behavior: "smooth",
      });
    } else if (step === 3) {
      handleNext();
    }
  }, [step, page, handleNext, showpop]);

  return (
    <Container fluid className="Container2">
      <Navbar className="py-2 px-md-5 Navbar">
        <p className="mx-5 text-white">{page}/10</p>
      </Navbar>
      <Container
        fluid
        className="vh-50 w-100 Container d-flex flex-column justify-content-center align-items-center"
      >
        <div className="text-center header-text my-5 ">
          {/* <h1 className='text-white'>
                  {(step === 0)?
                  "Let's start with this Outlook Doc email." 
                  : (correct)? <Correct /> : "This is actually a phishing email." }</h1> 
                <p>Be sure to check out link URLs by hovering or using long presses, and to explore the email addresses. Don't worry, none of the links will work - we don't want to send you anywhere funny!</p>
                <p>You must have spotted the look-alike URL. Be cautious about hyperlinks and attachments you open from emails — they may direct you to fraudulent websites where you're asked to input sensitive information.</p>
                {(step === 0)?Options handleCorrect={handleCorrect}/> : <ShowMe handleStep={handleStep} step={step}/>} */}
          <h1 className="text-white">"Financial Clearance"</h1>
          <ShowMe handleStep={handleStep} step={step} />
        
        </div>
        <Container fluid className="vh-75 bg-white">
          <ToastWrapper>
            <Toast.Body>
              <Card.Title>
                <MailSubject
                  props="Durant, Leroy <ldurant@claflin.edu>"
                  acronym="DL"
                  To={name}
                  email={email}
                  sub="Financial Clearance"
                />
              </Card.Title>
              <div>
                <div className="container w-lg-50 w-sm-100 w-100 mx-auto">
                  <Card className="text-center card-mdf w-lg-50 w-100 mx-auto">
                    <Card.Body>
                      <div style={{ textAlign: "left" }}>
                        <p>
                          Dear students,
                          <br />
                          <br />
                          I hope and trust that you and your family are having a
                          great summer! According to our records, you have not
                          completed your financial clearance to return to the
                          University in the Fall of 2022. All students who have
                          been assigned housing must be cleared by July 1, 2022,
                          or risk the chance of losing your space. It is
                          important that you act early and take care of your
                          business.
                          <br />
                          <br />
                          Please check MyClaflin to see if you are cleared. If
                          you are planning to make your payments through our
                          payment plan process, make certain that you set up
                          your payment through our online portal. Thank you.
                        </p>
                      </div>
                      <br />
                      <div style={{ textAlign: "left" }}>
                        <small>
                          <p>
                            Dr. Leroy A. Durant <br />
                            Vice President for Student Development and Services{" "}
                            <br />
                            Calhoun Downs-Laymen Hall, Suite 107 <br />
                            Claflin University <br />
                            O: (803) 535-5341 | F: (803) 535-5303
                          </p>
                        </small>
                      </div>
                      <div className="position-relative mx-auto w-100 ">
                        <Toast
                          show={showpop}
                          className="position-absolute popup top-25 center shadow z-index-5"
                        >
                          <Toast.Body>
                            <p>
                              {" "}
                              Mousing over this link or using a long press will
                              show you that it goes to the insecure imitation
                              domain “drive--outlook.com”.{" "}
                            </p>
                            <div className="text-right">
                              <Button
                                className="text-right"
                                onClick={handleStep}
                              >
                                Next
                              </Button>
                            </div>
                          </Toast.Body>
                        </Toast>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Toast.Body>
          </ToastWrapper>
        </Container>
      </Container>
    </Container>
  );
};

export default Question9;
