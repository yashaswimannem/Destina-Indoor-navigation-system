import React from "react";

const AboutPage = () => {
  return (
    <div className="about-container">
      <style>{`
        .about-container {
          max-width: 1000px;
          margin: 50px auto 0 auto;  /* Added top margin to move content down */
          padding: 50px 30px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .about-container header {
          text-align: center;
          margin-bottom: 40px;
        }

        .about-container header h1 {
          font-size: 3rem;
          background: linear-gradient(90deg, #00f0ff, #00ffc3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .about-container header p {
          font-size: 1.2rem;
          color: #e0e0e0;
        }

        .about-content {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
          margin-top: 30px;
        }

        .about-text {
          flex: 1;
          min-width: 280px;
          max-width: 600px;
          padding: 20px;
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .about-text:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .about-text h2 {
          color: #00ffe1;
          margin-top: 20px;
          font-size: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 5px;
        }

        .about-text p {
          font-size: 1rem;
          color: #d3d3d3;
          line-height: 1.8;
          margin-top: 10px;
        }

        .about-text ul {
          margin-top: 10px;
          padding-left: 20px;
        }

        .about-text ul li {
          margin-bottom: 10px;
          line-height: 1.6;
          color: #e8faff;
          position: relative;
        }

        .about-text ul li::before {
          content: "";
          color: #00ffd5;
          margin-right: 10px;
        }

        @media (max-width: 768px) {
          .about-container {
            padding: 30px 15px;
          }

          .about-container header h1 {
            font-size: 2.2rem;
          }

          .about-container header p {
            font-size: 1rem;
          }

          .about-text h2 {
            font-size: 1.3rem;
          }

          .about-text p,
          .about-text ul li {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <header>
        <h1>About Mall Navigator</h1>
        <p>Your smart indoor mall navigation system</p>
      </header>

      <main className="about-content">
        <section className="about-text">
          <h2>How It Works</h2>
          <p>
            Using a graph-based pathfinding algorithm (Dijkstra), the system calculates
            the most efficient walking path through mapped stores and corridors.
          </p>

          <h2>Who It's For</h2>
          <p>
            Ideal for visitors, mall operators, and smart retail developers. Easily
            scalable for multi-floor and accessibility-aware routes.
          </p>

          <h2>Future Enhancements</h2>
          <ul>
            <li>Multi-floor support</li>
            <li>Real-time positioning</li>
            <li>Voice directions</li>
            <li>Accessibility routes</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
