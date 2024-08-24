import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";

const ContactItem = ({ item, index }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const deleteContact = () => {
    handleClose();
    dispatch({
      type: "DELETE_CONTACT",
      payload: { id: item.id },
    });
  };
  return (
    <Row>
      <Col lg={1}>
        <img
          className="unknown-img"
          width={50}
          height={45}
          src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
          alt=""
        />
      </Col>
      <Col lg={11}>
        <div>
          {item.name} {item.phoneNumber}{" "}
          <img
            className="delete-img"
            width={50}
            src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
            alt=""
            onClick={handleShow}
          />
        </div>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>연락처 삭제</Modal.Title>
          </Modal.Header>
          <Modal.Body>정말로 연락처를 삭제하시겠습니까?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              닫기
            </Button>
            <Button variant="danger" onClick={deleteContact}>
              삭제
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Row>
    //
  );
};

export default ContactItem;
