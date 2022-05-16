import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket-form.style.css";

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  formData,
  formDataError,
}) => {
  return (
    <div className="jumbotron mt-3 mb-5 bg-light add-new-ticket">
      <h1 className="text-info text-center ">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleOnChange}
              placeholder="Subject"
            />
            <Form.Text className="text-danger">
              {formDataError.subject && "Subject is required!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group className="mt-4" as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="details"
            value={formData.details}
            rows="5"
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Button type="submit" className="mt-4 col-12 text-white" variant="info">
          Submit
        </Button>
      </Form>
    </div>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  formDataError: PropTypes.object.isRequired,
};
