import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <style>{`
        .contact-container {
          max-width: 1000px;
          margin-top: 200px;
          padding: 50px 30px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .contact-container header {
          text-align: center;
          margin-bottom: 40px;
        }

        .contact-container header h1 {
          font-size: 3rem;
          background: linear-gradient(90deg, #00f0ff, #00ffc3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }

        .contact-container header p {
          font-size: 1.2rem;
          color: #e0e0e0;
        }

        .team-members {
          display: flex;
          justify-content: center;
          gap: 50px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .team-member {
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          width: 300px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .team-member:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        .team-member h3 {
          color: #00ffe1;
          font-size: 1.5rem;
          margin-top: 10px;
        }

        .team-member p {
          font-size: 1rem;
          color: #d3d3d3;
          margin-top: 5px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 40px;
        }

        .contact-form input, .contact-form textarea {
          width: 80%;
          padding: 12px;
          margin: 10px 0;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background-color: rgba(255, 255, 255, 0.1);
          color: #fff;
        }

        .contact-form button {
          width: 40%;
          padding: 12px;
          border-radius: 8px;
          background-color: #00ffe1;
          color: #fff;
          font-size: 1.2rem;
          cursor: pointer;
          border: none;
          transition: background-color 0.3s ease;
        }

        .contact-form button:hover {
          background-color: #00f0ff;
        }

        @media (max-width: 768px) {
          .contact-container {
            padding: 30px 15px;
          }

          .contact-container header h1 {
            font-size: 2.2rem;
          }

          .team-member {
            width: 90%;
          }

          .contact-form input, .contact-form textarea {
            width: 90%;
          }

          .contact-form button {
            width: 60%;
          }
        }
      `}</style>

      <header>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us for inquiries or suggestions.</p>
      </header>

      <div className="team-members">
        <div className="team-member">
          <h3>Yashaswi</h3>
          <p>Founder & Developer</p>
          <p>Email: yashaswimannem26@gmail.com</p>
        </div>
        <div className="team-member">
          <h3>Jhansi</h3>
          <p>Co-Founder & Developer</p>
          <p>Email: jhansibairi@gmail.com </p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Get in Touch</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="6"></textarea>
        <button>Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
