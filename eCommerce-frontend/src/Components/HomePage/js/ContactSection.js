import React, { useState } from "react";
import "./../css/ContactSection.css";

const ContactSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date().toLocaleDateString();
    const recipient = "delvonrowley@gmail.com";

    // Creats a mailto URL using the input values, encoding them properly using encodeURIComponent. 
    // Then, it opens the email link in a new tab using window.open with the _blank target.

    const mailtoURL = `mailto:${recipient}?subject=${encodeURIComponent(
      `${firstName} ${lastName} | ${currentDate} | Inquiry`
    )}&body=${encodeURIComponent(
      `${message} \nFeel free to contact me at: ${phoneNumber}.`
    )}`;

    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setMessage("");

    // Open the email in a new tab
    window.open(mailtoURL, "_blank");

    console.log("Form submitted");
  };
  return (
    <section className="contact">
      <div className="centered-content">
        <div className="content">
          <div className="contact-message">
            <h3 className="head">Feel free to contact us!</h3>
            <p className=".contact-message-p">
              Please let us know if there is something wrong with your order of
              if you would like to see something in our store. We will do our
              best to meets your needs.
            </p>
          </div>
          <div className="container ct-form">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn contact-btn">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
