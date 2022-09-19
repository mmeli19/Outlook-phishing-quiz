import { useState, useEffect } from "react";
import { Container, Card, Navbar, Toast, Button } from "react-bootstrap";
import MailSubject from "../MailSubject";
import ShowMe from "../buttons/ShowMe";
import ToastWrapper from "../layout/ToastWrapper";
import LinkWrapper from "../buttons/LinkWrapper";

const Question3 = ({ page, obj, handleNext, handleScore, name, email }) => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [showpop, setShowpop] = useState(false);
  const handleStep = (e) => {
    setStep((step) => step + 1);
  };
  const handleCorrect = (e) => {
    const value = e.target.value;
    if (value === obj[page - 1]) {
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
          <h1 className="text-white">"Time for a trip down memory lane!"</h1>
          <ShowMe handleStep={handleStep} step={step} />
        </div>
      </Container>
      <Container className="" bg="success">
        <ToastWrapper className="card-lg">
          <Toast.Body>
            <Card.Title className="position-relative">
              <MailSubject
                props="echukwunwike@claflin.edu"
                acronym="E"
                To={name}
                email={email}
                sub="I just found a photo of you"
                s
              />
            </Card.Title>
            <div className="position-relative">
              <>
                Hey do you remember{" "}
                <LinkWrapper
                  to="https://drive.google.com.download-photo.sytez.net/AONh1e0hVP"
                  message="https://drive.google.com.download-photo.sytez.net/AONh1e0hVP"
                >
                  THIS PHOTO !
                </LinkWrapper>{" "}
              </>
            </div>
          </Toast.Body>
        </ToastWrapper>
      </Container>
    </Container>
  );
};

export default Question3;
