import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const InitialData = {
  end_year: "",
  topic: "",
  sector: "",
  region: "",
  PEST: "",
  source: "",
  SWOT: "",
  country: "",
  city: "",
};
const FilterModal = ({ show, handleClose, applyFilters }) => {
  const [filters, setFilters] = useState(InitialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilters(filters); // Pass filters to parent component
    handleClose(); // Close the modal
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Apply Filters</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>End Year</Form.Label>
                <Form.Control
                  type="number"
                  name="end_year"
                  value={filters.end_year}
                  onChange={handleChange}
                  placeholder="Enter End Year"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Topics</Form.Label>
                <Form.Control
                  type="text"
                  name="topic"
                  value={filters.topic}
                  onChange={handleChange}
                  placeholder="Comma-separated topics"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Sector</Form.Label>
                <Form.Control
                  type="text"
                  name="sector"
                  value={filters.sector}
                  onChange={handleChange}
                  placeholder="Enter Sector"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Region</Form.Label>
                <Form.Control
                  type="text"
                  name="region"
                  value={filters.region}
                  onChange={handleChange}
                  placeholder="Enter Region"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>PEST</Form.Label>
                <Form.Control
                  type="text"
                  name="PEST"
                  value={filters.PEST}
                  onChange={handleChange}
                  placeholder="Comma-separated PEST factors"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Source</Form.Label>
                <Form.Control
                  type="text"
                  name="source"
                  value={filters.source}
                  onChange={handleChange}
                  placeholder="Enter Source"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>SWOT</Form.Label>
                <Form.Control
                  type="text"
                  name="SWOT"
                  value={filters.SWOT}
                  onChange={handleChange}
                  placeholder="Comma-separated SWOT factors"
                />
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={filters.country}
                  onChange={handleChange}
                  placeholder="Enter Country"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={filters.city}
                  onChange={handleChange}
                  placeholder="Enter City"
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex gap-3">
            <Button
              className="w-100"
              onClick={() => {
                handleClose();
                setFilters(InitialData);
              }}
            >
              Clear
            </Button>
            <Button variant="primary" type="submit" className="w-100">
              Apply Filters
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FilterModal;
