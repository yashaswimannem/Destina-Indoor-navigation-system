import React from "react";

const Features = () => {
  return (
    <div className="features-container">
      <style>{`
        .features-container {
          max-width: 1000px;
          margin-top: 700px;
          padding: 50px 30px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .features-container header {
          text-align: center;
          margin-bottom: 40px;
        }

        .features-container header h1 {
          font-size: 3rem;
          background: linear-gradient(90deg, #00f0ff, #00ffc3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .features-container header p {
          font-size: 1.2rem;
          color: #e0e0e0;
        }

        .features-content {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
          margin-top: 30px;
        }

        .feature-card {
          flex: 1;
          min-width: 280px;
          max-width: 400px;
          padding: 20px;
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .feature-card h2 {
          color: #00ffe1;
          font-size: 1.5rem;
          margin-top: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 5px;
        }

        .feature-card p {
          font-size: 1rem;
          color: #d3d3d3;
          line-height: 1.8;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .features-container {
            padding: 30px 15px;
          }

          .features-container header h1 {
            font-size: 2.2rem;
          }

          .features-container header p {
            font-size: 1rem;
          }

          .feature-card h2 {
            font-size: 1.3rem;
          }

          .feature-card p {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <header>
        <h1>Features of Mall Navigator</h1>
        <p>Explore the powerful capabilities of our indoor mall navigation system</p>
      </header>

      <main className="features-content">
        <div className="feature-card">
          <h2>Source and Destination Selection</h2>
          <p>
            Easily select your source and destination within the mall. The system guides you to the right path with intuitive
            suggestions for starting and ending points.
          </p>
        </div>

        <div className="feature-card">
          <h2>Pathfinding and Route Visualization</h2>
          <p>
            Using efficient pathfinding algorithms, we ensure the shortest and clearest path is displayed, along with real-time
            updates for navigation.
          </p>
        </div>

        <div className="feature-card">
          <h2>Shortest Path Store-to-Store Routing</h2>
          <p>
            Our system calculates the shortest walking distance between two stores, allowing you to navigate quickly and efficiently.
          </p>
        </div>

        <div className="feature-card">
          <h2>Smooth Animated Path Guidance</h2>
          <p>
            Experience smooth, animated directions on the map that help guide you step by step as you move between locations in the mall.
          </p>
        </div>

        <div className="feature-card">
          <h2>Multi-Floor Support</h2>
          <p>
            Our system is designed to support multi-floor navigation, helping you get from one floor to another easily and quickly.
          </p>
        </div>

        <div className="feature-card">
          <h2>Real-Time Positioning</h2>
          <p>
            In the future, we will implement real-time positioning to give you accurate, live updates on your location as you navigate the mall.
          </p>
        </div>

        <div className="feature-card">
          <h2>Voice Directions</h2>
          <p>
            Get voice-guided navigation to make your journey even easier, allowing you to follow directions hands-free.
          </p>
        </div>

        <div className="feature-card">
          <h2>Accessibility Routes</h2>
          <p>
            We are working towards adding routes specifically optimized for accessibility, ensuring everyone can move around comfortably.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Features;
