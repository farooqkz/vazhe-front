import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Trans } from "@lingui/macro";


export default function About({ show, closeCb }) {
  return (
    <Modal show={show}>
      <Modal.Header>
        <Trans>
          About the app
        </Trans>
      </Modal.Header>
      <Modal.Body>
        <p>
          <Trans>
            Vazhe app by Farooq Karimi Zadeh to collect Hormozgan local words.
          </Trans>
          <a href="https://github.com/farooqkz/vazhe-front">
            <Trans>
              Source code on Github
            </Trans>
          </a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={closeCb}>
          <Trans>Okay</Trans>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
