import { useEffect, useState } from "react";
import { Container, Button, Card, Navbar, Toast } from "react-bootstrap";
import MailSubject from "../MailSubject";
import ToastWrapper from "../layout/ToastWrapper";
import ShowMe from "../buttons/ShowMe";
import LinkWrapper from "../buttons/LinkWrapper";

const Question6 = ({ page, handleNext, handleScore, obj, email, name }) => {
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
            Someone logged into your account
          </h1>
          <ShowMe handleStep={handleStep} step={step} />
        </div>
      </Container>
      <Container className="vh-75" bg="success">
        <ToastWrapper>
          <Card.Body>
            <Card.Title className="position-relative">
              <MailSubject
                props="Microsoft account team <account-security@microsoft.com>"
                acronym="G"
                To={name}
                email={email}
                sub="Login Alert"
              />
              <Toast
                show={showpop}
                className="position-absolute top-25 shadow z-index-5"
              >
                <Toast.Body>
                  <p>The sender address “google.support” isn’t used.</p>
                  <div className="text-right">
                    <Button className="text-right" onClick={handleStep}>
                      Next
                    </Button>
                  </div>
                </Toast.Body>
              </Toast>
            </Card.Title>
            <br />
            <div>
              <h4 className="pt-5 mt-4 pb-2 bg-danger px-3 text-white">
                Someone has your password
              </h4>
              <p>Hi,</p>
              <p>
                Someone just used your password to try to sign in to your
                Outlook account.
              </p>
              <div>
                <h5>Information:</h5>
                <small className="d-block">
                  Tuesday, October 2022 at 23:58:03 GMT +01:00 <br />
                  Slatina, Romania <br />
                  Firefox Browser
                </small>
              </div>
              <div className="d-grid mx-auto col-md-4 col-12 position-relative">
                <p className="mt-4">Outlook stopped the sign in attempt</p>
                <LinkWrapper
                  to="http://www.outlook.com/password-reset"
                  message="http://www.outlook.com/password-reset"
                >
                  Change Password
                </LinkWrapper>
                <Toast
                  show={showpop2}
                  className="position-absolute top-100 shadow z-index-5 popup"
                >
                  <Toast.Body>
                    <p>
                      {" "}
                      This link points to a subdomain of “ml-security.org”, not
                      Google.{" "}
                    </p>
                    <div className="text-right">
                      <Button className="text-right" onClick={handleStep}>
                        Next
                      </Button>
                    </div>
                  </Toast.Body>
                </Toast>
              </div>
              <p>Best,</p>
              <p>The Mail Team</p>
            </div>
          </Card.Body>
        </ToastWrapper>
      </Container>
    </Container>
  );
};

export default Question6;
