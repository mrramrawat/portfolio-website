import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Using EmailJS to send the email
    emailjs
      .sendForm('service_7nat9ap', 'template_i1afnth', e.target, '1S7DZP4l7nU1ig9Sq')
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Contact Me</h3>
              <p className="subtitle-a">I would love to hear from you!</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
              {formSubmitted && (
                <div className="form-feedback">Thank you for your message!</div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-info">
              <h4>Contact Information</h4>
              <p>Email: ramrawat2058@gmail.com</p>
              <p>Phone: +977-9860720164</p>
              <p>Location: Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
