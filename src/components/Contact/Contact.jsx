import "./Contact.css";

function Contact({ email, github, linkedin }) {
  return (
    <div className="contact">
      <h3>Contact Me</h3>
      <p>Email: {email}</p>
      <p>GitHub: {github}</p>
      <p>LinkedIn: {linkedin}</p>
    </div>
  );
}

export default Contact;
