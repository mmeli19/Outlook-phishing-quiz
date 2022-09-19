import React from "react";
import { Row, Button, Col } from "react-bootstrap";
const ShowMe = ({ handleStep, step, handleCorrect }) => {
  function handleNext() {
    handleStep();
    handleCorrect();
    handleStep();
  }
  return (
    <Row className="">
      <Col xs={12}>
        <Button
          onClick={step === 0 ? handleNext : undefined}
          className="text-primary px-5"
          variant="light"
          as="input"
          type="button"
          value="Next"
        />{" "}
      </Col>
    </Row>
  );
};

export default ShowMe;
