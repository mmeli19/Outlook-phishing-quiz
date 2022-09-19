import React, { useState, useEffect } from "react";
import { Navbar, Container, Card, Toast, Button } from "react-bootstrap";
import MailSubject from "../MailSubject";
import ShowMe from "../buttons/ShowMe";
import ToastWrapper from "../layout/ToastWrapper";
import google from "../../images/google.png";
import LinkWrapper from "../buttons/LinkWrapper";

const Question1 = ({ handleNext, page, obj, handleScore, email, name }) => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [showpop, setShowpop] = useState(false);
  const handleStep = (e) => {
    setStep((step) => step + 1);
  };
  const handleCorrect = (e) => {
    handleStep();
  };
  useEffect(() => {
    if (step === 1) {
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
        <p className="mx-5 text-white">{page}/8</p>
      </Navbar>
      <Container
        fluid
        className="vh-50 w-100 Container d-flex flex-column justify-content-center align-items-center"
      >
        <div className="text-center header-text my-5 ">
          <h1 className="text-white">
            "Let's start with this Outlook Doc email."
          </h1>
          <ShowMe
            handleCorrect={handleCorrect}
            handleStep={handleStep}
            step={step}
          />
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
                      <Card.Title>
                        <p>
                          <a
                            style={{
                              color: "blue",
                              textDecoration: "underline",
                            }}
                          >
                            ldurant@claflin.edu
                          </a>{" "}
                          shared Something to you
                        </p>
                      </Card.Title>
                      <div>
                        Durant Leroy has shared a link to the following
                        document:
                      </div>
                      <div className="attachment my-5 container-fluid rounded shadow">
                        <img src={google} className="" alt="" />
                        <p>
                          <LinkWrapper
                            href="https://docs.google.com/durant.laruy/"
                            message="https://docs.google.com/durant.laruy/"
                          >
                            {" "}
                            {name} Financial Clearance{" "}
                          </LinkWrapper>
                        </p>
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

export default Question1;
