import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadcrumbComp } from "../../components/breadcrumb/BreadcrumbComp";
import { SearchForm } from "../../components/search-form/SearchFormComp";
import { TicketTable } from "../../components/ticket-table/TicketTableComp";
import tickets from "../../assets/data/dummy-tickets.json";

export const TicketlistPage = () => {
  const [str, setStr] = useState("");
  const [displayTickets, setDisplayTickets] = useState(tickets);

  useEffect(() => {}, [str, displayTickets]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const ticketsDisplay = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );
    setDisplayTickets(ticketsDisplay);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-end">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={displayTickets} />
        </Col>
      </Row>
    </Container>
  );
};
