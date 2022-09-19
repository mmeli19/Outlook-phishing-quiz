import { useEffect, useState } from "react";
import { Container, Button, Card, Navbar, Toast } from "react-bootstrap";
import MailSubject from "../MailSubject";
import ToastWrapper from "../layout/ToastWrapper";
import ShowMe from "../buttons/ShowMe";
import secure from "../../images/secure.png";
import LinkWrapper from "../buttons/LinkWrapper";

const Question7 = ({ page, handleNext, handleScore, obj, name, email }) => {
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
            Your account seems to be under attack again
          </h1>
          <ShowMe handleStep={handleStep} step={step} />
        </div>
      </Container>
      <Container className="vh-75" bg="success">
        <ToastWrapper>
          <Card.Body>
            <Card.Title className="position-relative">
              <MailSubject
                props="Microsoft <no-reply@outlook.support"
                acronym="M"
                To={name}
                email={email}
                sub="Someone has your password"
              />
              <Toast
                show={showpop}
                className="position-absolute top-25 shadow z-index-5 popup"
              >
                <Toast.Body>
                  <p>
                    As in the previous question, “google.support” is an unused
                    address.
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
              <img src={secure} alt="" className="secure" />
              <h4>
                Governemnt-backed attackers may be trying to steal your password
              </h4>
              <p>
                There's a chance that this is a false alarm, but we believe that
                we detected government-backed attackers trying to steal your
                password. This happens to less then 0.1% of all Gmail users. We
                can't reveal what tipped us off because the attackers will take
                note and change their tactics, but if they are successful at
                some point they could access your data or take other actions
                using your account. To further improve your security, based on
                your current settings, we recommend:
              </p>
              <div className="position-relative">
                <LinkWrapper
                  to="http://microsoft.com/amp/tinyurl.com/7u8ewlr"
                  message="http://microsoft.com/amp/tinyurl.com/7u8ewlr"
                >
                  Change Password
                </LinkWrapper>
                <Toast
                  show={showpop2}
                  className="position-absolute top-25 shadow z-index-5 popup"
                >
                  <Toast.Body>
                    <p>
                      {" "}
                      This is tricky, but the link is actually a redirect to
                      something on “tinyurl.com”.{" "}
                    </p>
                    <div className="text-right">
                      <Button className="text-right" onClick={handleStep}>
                        Next
                      </Button>
                    </div>
                  </Toast.Body>
                </Toast>
              </div>
            </div>
          </Card.Body>
        </ToastWrapper>
      </Container>
    </Container>
  );
};

export default Question7;
