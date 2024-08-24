import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  // 전화번호 포맷팅 함수
  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ("" + phoneNumber).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return phoneNumber;
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    // 숫자만 남기고 11자리까지만 허용
    if (/^\d{0,11}$/.test(input)) {
      setPhoneNumber(input);
    }
  };

  const addList = () => {
    handleClose();
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber: formattedPhoneNumber },
    });
    setPhoneNumber("");
  };

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        전화번호 추가
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>전화번호 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="inputField"
            placeholder="이름"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="inputField"
            placeholder="연락처"
            value={phoneNumber} // 상태 값과 입력 필드를 동기화
            onChange={handlePhoneNumberChange} // 입력 길이 제한
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addList}>
            연락처 저장
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactForm;
