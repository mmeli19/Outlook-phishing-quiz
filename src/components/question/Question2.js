import React, { useEffect, useState } from "react";
import { Container, Button, Card, Navbar, Toast } from "react-bootstrap";
import MailSubject from "../MailSubject";
import ToastWrapper from "../layout/ToastWrapper";
import ShowMe from "../buttons/ShowMe";
import LinkWrapper from "../buttons/LinkWrapper";

const Question2 = ({ page, handleScore, handleNext, obj, email, name }) => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [showpop, setShowpop] = useState(false);
  const [showpop2, setShowpop2] = useState(false);
  const handleStep = (e) => {
    setStep((step) => step + 1);
  };
  const handleCorrect = (e) => {
    handleStep();
  };
  useEffect(() => {
    if (step === 1) {
      handleNext();
    } else if (step === 2) {
      setShowpop(true);
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    } else if (step === 3) {
      setShowpop(false);
      setShowpop2(true);
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
        <div className="text-center container-fluid header-text my-5 ">
          <h1 className="text-white">
            "You've received a fax!"
          </h1>
          <ShowMe handleStep={handleStep} step={step} />
        </div>
      </Container>
      <Container fluid className="vh-75" bg="success">
        <ToastWrapper className="card-lg">
          <Toast.Body>
            <Card.Title>
              <MailSubject
                props="Terria C. Williams <etwilliams@claflin.edu>"
                acronym="T"
                To={name}
                email={email}
                sub="Pending Tution to be paid"
              />
              <Toast
                show={showpop}
                className="position-absolute top-25 shadow z-index-5"
              >
                <Toast.Body>
                  <p>
                    {" "}
                    The sender address is “efacks.com”, which is misspelled. On
                    the next question, try exploring the header for more
                    details.
                  </p>
                  <div className="text-right">
                    <Button className="text-right" onClick={handleStep}>
                      Next
                    </Button>
                  </div>
                </Toast.Body>
              </Toast>
            </Card.Title>
            <div className="container w-lg-50 w-sm-100 w-100 mx-auto">
              <div className="w-100">
                <div className="card-mdf w-100 container-fluid">
                  <Card.Body>
                    <Card.Title>
                      <p className="bg-primary py-3 m-0 text-white container-fluid">
                        Claflin University
                      </p>
                      <div className="flex-mdf d-md-flex justify-content-around m-0 align-items-center">
                        <div className="d-md-flex  align-items-center">
                          <div className="d-md-flex flex-column justify-content-end">
                            <h4>Invoice</h4>
                            <p>321464</p>
                          </div>
                          <p className="text-danger px-4">Due: 11/10/2022</p>
                        </div>
                        <strong>
                          Amount Due:{" "}
                          <span className="text-success">$6,000.50</span>
                        </strong>
                      </div>
                    </Card.Title>
                    <div>
                      <h4>Dear {name}:</h4>
                      <p>
                        Your tution invoice paymenr is attached. Please review
                        payment confirmation at your earliest convenience
                      </p>
                      <p>
                        Thank you for your business, we appreciate it very much
                      </p>
                      <p>Sincerely,</p>
                      <h4>Claflin University</h4>
                      <div className="position-relative ">
                        <LinkWrapper
                          to="https://my.claflin.edu/ICS/Student/"
                          message="https://my.claflin.edu/ICS/Student/"
                        >
                          Open this fax
                        </LinkWrapper>
                        <Toast
                          show={showpop2}
                          className="position-absolute top-25 shadow z-index-5 popup"
                        >
                        </Toast>
                      </div>
                    </div>
                  </Card.Body>
                </div>
              </div>
            </div>
          </Toast.Body>
        </ToastWrapper>
      </Container>
    </Container>
  );
};

export default Question2;
