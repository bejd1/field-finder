import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h3>Contact</h3>
      <div className="contact-container-inputs">
        <input
          className="contact-container-input-name"
          type="text"
          placeholder="Enter your Name"
        />
        <input
          className="contact-container-input-email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <textarea className="contact-textarea" placeholder="Enter your message" />
      <button className="contact-container-btn">submit</button>
    </div>
  );
};

export default Contact;
