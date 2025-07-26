import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const existingScript = document.querySelector("script[src='https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1']");

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
      script.async = true;
      script.onload = () => console.log("Dialogflow script loaded successfully");
      script.onerror = (err) => console.error("Failed to load Dialogflow script:", err);
      document.body.appendChild(script);
    }
  }, []);

  return (
    <df-messenger
      intent="WELCOME"
      chat-title="DestinaBot"
      agent-id="1844d021-6cfc-4dad-acc2-752684da0316"
      language-code="en"
    ></df-messenger>
  );
};

export default Chatbot;
