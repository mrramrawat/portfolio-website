import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/logo.jpg";
import chatify from "../../Assets/Projects/image.png";
import bitsOfCode from "../../Assets/Projects/image1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Email spam detection "
              description="This project develops an email spam detection system using machine learning to classify emails as spam or non-spam. By applying techniques like tokenization, stopword removal, and feature extraction from email content, the system trains models such as Naive Bayes, SVM, and Decision Trees. The goal is to provide an efficient way to filter unwanted emails, improving user experience and enhancing security. Performance is evaluated based on accuracy and other key metrics.."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="HOspital Doctor Appoitment "
              description="This project aims to develop a web-based system for booking doctor appointments at hospitals. The platform allows users to search for doctors by specialty, view available slots, and easily schedule appointments. It streamlines the appointment process, reduces waiting times, and improves hospital management. The system ensures a smooth user experience and efficient scheduling for both patients and healthcare providers."
              ghLink=""
              demoLink=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""              
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Tourism Website"
              description="This project involves creating a user-friendly tourism website that provides information on travel destinations, accommodations, attractions, and activities. Users can explore various tourist spots, check availability, and make bookings seamlessly. The platform aims to enhance the travel experience by offering detailed guides, reviews, and personalized recommendations for travelers looking to plan their next trip.."
              ghLink=""
              demoLink=""
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink=""
              // <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=""
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
            
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
