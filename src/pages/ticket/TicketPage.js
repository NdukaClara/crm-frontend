import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadcrumbComp } from "../../components/breadcrumb/BreadcrumbComp";
import tickets from "../../assets/data/dummy-tickets.json";
import { MessageHistory } from "../../components/message-history/MessageHistoryComp";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicketComp";
import { Link, useParams } from "react-router-dom";

// const ticket = tickets[0];
export const Ticket = () => {
  const { tId } = useParams();

  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id == tId) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [message, tId]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert("form submitted");
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="fw-bold text-secondary mt-3">
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="date">Ticket Opened: {ticket.addedAt}</div>
          <div className="status">Status: {ticket.status}</div>
        </Col>
        <Col className="text-end">
          <Link to="/tickets">
            <Button variant="outline-info">Close Ticket</Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            msg={message}
          />
        </Col>
      </Row>
    </Container>
  );
};
