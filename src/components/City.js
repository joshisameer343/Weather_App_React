import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Weather.css";
export default function City(props) {
  function handleChange(event) {
    props.setError("");
    props.setWeather("");
    props.setCity(event.target.value);
    console.log(props.city);
  }
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City Name"
            onChange={handleChange}
          />
          <p> {props.error} </p>
        </Form.Group>

        <Button variant="primary" onClick={props.getWeather}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
