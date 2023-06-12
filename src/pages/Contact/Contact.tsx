import "./Contact.css";

const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

const Contact = () => {
  return (
    <div className="contact-container">
      <h3>Contact</h3>
      <form onSubmit={submitForm} className="contact-container-form">
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
        <textarea
          className="contact-textarea"
          placeholder="Enter your message"
        />
        <button type="submit" className="contact-container-btn">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
