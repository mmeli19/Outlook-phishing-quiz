import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  Card,
  Toast,
  Navbar,
  Row,
  Col,
} from "react-bootstrap";
import MailSubject from "../MailSubject";
import ToastWrapper from "../layout/ToastWrapper";
import ShowMe from "../buttons/ShowMe";

const Question5 = ({ page, handleNext, obj, handleScore, name, email }) => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [showpop, setShowpop] = useState(false);
  const [showpop2, setShowpop2] = useState(false);
  const handleStep = (e) => {
    setStep((step) => step + 1);
  };
  const handleCorrect = (e) => {
    if (e.target.value === obj[page - 1]) {
      handleScore();
      setCorrect(true);
    }
    handleStep();
  };
  useEffect(() => {
    if (step === 1) {
      handleNext();
    } else if (step === 2) {
      setShowpop(true);
      window.scrollTo({
        top: document.body.scrollHeight - 200,
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
    } else if (step === 4) {
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
        className="h-50 Container d-flex flex-column justify-content-center align-items-center"
      >
        <div className="text-center container-fluid header-text my-5 ">
          <h1 className="text-white">
            A job opening
          </h1>
          <ShowMe handleStep={handleStep} step={step} />
        </div>
      </Container>
      <Container className="" bg="success">
        <ToastWrapper>
          <Toast.Body>
            <Card.Title className="position-relative">
              <MailSubject
                props="Douglas B. Barnes <dobarnes@claflin.edu>"
                acronym="DB"
                To={name}
                email={email}
                sub="Job Opening"
              />
              <Toast
                show={showpop}
                className="position-absolute top-25 shadow z-index-5"
              >
                <Toast.Body>
                  <p>
                    The from address is slightly different from what you’d seen
                    in the past: “sharon.mosley@westmountschool.org”.
                  </p>
                  <div className="text-right">
                    <Button className="text-right" onClick={handleStep}>
                      Next
                    </Button>
                  </div>
                </Toast.Body>
              </Toast>
            </Card.Title>
            <div>
              <div className="d-grid mx-auto col-md-4 col-12 position-relative">
                <Toast
                  show={showpop2}
                  className="position-absolute top-25 shadow z-index-5 popup"
                >
                  <Toast.Body>
                    <p>
                      Be careful when opening PDFs, especially if you dont
                      expect them.
                    </p>
                    <div className="text-right">
                      <Button className="text-right" onClick={handleStep}>
                        Next
                      </Button>
                    </div>
                  </Toast.Body>
                </Toast>
              </div>
              <br />
              <p>
                Greetings, I'm a student here at Claflin, a Staff told me to
                share this with a student who will be interested in a Remote
                Executive Assistant position.
              </p>
              <p>
                Shaub CPA Group has a job opening for a Remote Executive
                Assistant part-time position to work remotely and earn extra
                funds. The pay is $40/hr
              </p>
              <p>
                Kindly contact Angela at officemanager@shaubcpagroup.careers
                requesting a comprehensive briefing and interview process.
              </p>
              <p>This is strictly a Remote Position.</p>
              <p>
                Note: It is required that you send the email from your private
                email and not your school email.
              </p>
            </div>
          </Toast.Body>
        </ToastWrapper>
      </Container>
    </Container>
  );
};

export default Question5;
