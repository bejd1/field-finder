import { Modal, useModal, Button, Text } from "@nextui-org/react";
import "./Modal.css";

export default function MyModal() {
  const { setVisible, bindings } = useModal();
  return (
    <div className="modal">
      <div className="question-mark-section" onClick={() => setVisible(true)}>
        <span>?</span>
      </div>

      <Modal
        scroll
        width="600px"
        className="modal"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" className="modal-title">
            Info
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description" className="modal-description">
            Now you can search only pitche's in the biggest cities in UK, like
            London.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            onPress={() => setVisible(false)}
            style={{ backgroundColor: "#4b8df0", textTransform: "uppercase" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
