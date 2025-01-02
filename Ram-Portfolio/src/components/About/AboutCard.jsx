import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> </span>Ram Bdr Rawat
            from <span className="purple"> Kathmandu, Nepal.</span>
            <br />
            I am Computer Enginner, MERNStack  Developer ,python Developer and Cloud Computing            <br />
            I have completed  Computer Engineering in  Everest Engineering Affiliated from Pokhara University 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>/

          <p style={{ color: "rgb(155 126 172)" }}>
            "First, solve the problem. Then, write the code.!"{" "}
          </p>
          <footer className="blockquote-footer">Ram Bdr Rawat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
