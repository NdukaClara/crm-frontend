import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

export const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text className="d-block">
        Please reply your message here or update the ticket
      </Form.Text>
      <Form.Control
        name="detail"
        value={msg}
        onChange={handleOnChange}
        as="textarea"
        rows="10"
      />
      <div className="text-end mt-3 mb-3">
        <Button variant="info" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};
UpdateTicket.propTypes = {
  msg: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};
