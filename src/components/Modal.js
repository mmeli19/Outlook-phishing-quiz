import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

export function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            How does this work
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          This quiz runs in your web browser by storing your name and email in what are called JavaScript variables. These are never sent to a server, and when you close this window or navigate away the information should be removed by your browser.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  