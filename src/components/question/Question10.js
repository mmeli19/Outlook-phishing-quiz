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
          <h1 className="text-white">
            Remote Opportunity
          </h1>
          <ShowMe handleStep={handleStep} step={step} />
        </div>
        <Container fluid className="vh-75 bg-white">
          <ToastWrapper>
            <Toast.Body>
              <Card.Title>
                <MailSubject
                  props="Human Resources <HR@claflin.edu>"
                  acronym="DL"
                  To={name}
                  email={email}
                  sub="Remote Working Satisfaction Survey"
                />
              </Card.Title>
              <div>
                <div className="container w-lg-50 w-sm-100 w-100 mx-auto">
                  <Card className="text-center card-mdf w-lg-50 w-100 mx-auto">
                    <Card.Body>
                      <div style={{ textAlign: "left" }}>
                        <p>All, </p>
                        <p>
                          We’d like to conduct a Employee Satisfaction Survey
                          concerning remote working that has been implemented
                          since the pandemic.
                        </p>
                        <p>
                          The result of this survey will be reflected in the
                          decision of remote working retention/expansion, going
                          forward.
                        </p>
                        <p>
                          Your active participation in the survey will be
                          greatly appreciated.
                        </p>
                        <p>Please complete the survey by August 07, 2022.</p>
                        <p>
                          Survey link is below:
                          <br />
                          <a
                            style={{
                              color: "blue",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            https://www.wantsurvey.com/employee-satisfaction/
                            {name}
                          </a>
                        </p>

                        <p>
                          Thank you,
                          <br />
                          Claflin University Human Resources
                        </p>
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
