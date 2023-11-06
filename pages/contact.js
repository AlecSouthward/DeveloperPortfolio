import Navbar from "./navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <h2>Contact Me</h2>
      <p>Email: alecsouthward@gmail.com<br />
        Phone: +1 234 567 890</p>

      {/* Styles using styled-jsx */}
      <style jsx>{`
        div {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
          color: #333;
        }

        p {
          color: #666;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default Contact;