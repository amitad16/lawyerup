import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";

const FindLawyerForm = ({ searchLawyer }) => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="FindLawyerForm">
      <div className="FindLawyerForm--container">
        <h2 className="main-title">Looking for a lawyer?</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Control as="select" className="active">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>

          <Form.Control placeholder="Post Code" />

          <Button type="submit">Join Now</Button>
        </Form>
      </div>
    </div>
  );
};

export default FindLawyerForm;
