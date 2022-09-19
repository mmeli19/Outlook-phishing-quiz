import React, { useState, useEffect } from "react";
import { Container, Button, Card, Navbar, Toast } from "react-bootstrap";
import { FaDropbox } from "react-icons/fa";
import MailSubject from "../MailSubject";
import ShowMe from "../buttons/ShowMe";
import ToastWrapper from "../layout/ToastWrapper";
import LinkWrapper from "../buttons/LinkWrapper";

const Question4 = ({ page, handleNext, obj, handleScore, email, name }) => {
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
        className="vh-50 w-100 Container d-flex flex-column justify-content-center align-items-center"
      >
        <div className="text-center container-fluid header-text my-5 ">
          <h1 className="text-white">
            "Uh oh! It looks like you're out of storage!"
          </h1>
          <ShowMe handleStep={handleStep} step={step} />
        </div>
      </Container>
      <Container fluid className="" bg="success">
        <ToastWrapper>
          <Card.Body>
            <Card.Title className="position-relative">
              <MailSubject
                props="Dropbox <no-reply@dropboxmail.com>"
                acronym="D"
                To={name}
                email={email}
                sub="Your Dropbox has stopped syncing"
              />
              <Toast
                show={showpop}
                className="position-absolute top-25 shadow z-index-5 w-md-50"
              >
                <Toast.Body>
                  <p>
                    {" "}
                    A quick search for “dropboxmail.com” will show that it’s
                    legitimate.{" "}
                  </p>
                  <div className="text-right">
                    <Button className="text-right" onClick={handleStep}>
                      Next
                    </Button>
                  </div>
                </Toast.Body>
              </Toast>
            </Card.Title>
            <div className="">
              <p className="text-center text-primary icon">
                {" "}
                <FaDropbox />{" "}
              </p>
              <p>Hi,</p>
              <p>
                Your Dropbox is full and is no longer syncing files. New files
                added to your Dropbox folder wont be accessible on your other
                devices and wont be backed up online
              </p>
              <p>
                Upgrade your dropbox today and get 1 TB(1000GB) of space and
                powerful sharing features.
              </p>
              <div className="d-grid mx-auto col-md-4 col-12 position-relative">
                <LinkWrapper
                  className="my-2"
                  to="http://www.dropbox.com/buy"
                  message="http://www.dropbox.com/buy"
                >
                  Upgrade Your Dropbox
                </LinkWrapper>
                <Toast
                  show={showpop2}
                  className="position-absolute top-100 popup mx-auto shadow z-index-5"
                >
                  <Toast.Body>
                    <p>
                      {" "}
                      The URL is a legitimate, secure link to “dropbox.com”.{" "}
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
                For otherways to get more space. Visit our{" "}
                <a href="https://www.dropbox.com/help/space/get-more-space">
                  {" "}
                  Get More Space page{" "}
                </a>
              </p>
              <p>Happy Dropboxing!</p>
              <p>- The Dropbox Team</p>
              <p>
                P.S. If you need the biggest plan we've got, check out{" "}
                <a href="https://www.dropbox.com/help/space/get-more-space">
                  {" "}
                  Dropbox for Business{" "}
                </a>
              </p>
            </div>
          </Card.Body>
        </ToastWrapper>
      </Container>
    </Container>
  );
};

export default Question4;
