import  { useState } from "react";
import emailjs from "emailjs-com";
import './Contact.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        formData, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
    setFormData({ user_name: "", user_email: "", user_message: "" });
  };
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="mb-3">
            <label htmlFor="user_name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="user_email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="user_message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="user_message"
              name="user_message"
              value={formData.user_message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
