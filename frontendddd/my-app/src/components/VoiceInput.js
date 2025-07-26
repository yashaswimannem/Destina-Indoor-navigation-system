// src/components/VoiceInput.js
import React, { useEffect, useState } from "react";

const VoiceInput = ({ onResult }) => {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // ✅ STEP 1: Check for browser support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsSupported(false);
      alert("❌ Sorry, your browser does not support Speech Recognition. Please use Google Chrome.");
    }
  }, []);

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US"; // Or "te-IN" for Telugu

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript); // Send back recognized voice text
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.start();
  };

  return (
    <div>
      {isSupported ? (
        <button onClick={startListening} style={{ padding: "10px", marginTop: "10px" }}>
          🎤 Speak
        </button>
      ) : (
        <p>Speech Recognition not supported in this browser.</p>
      )}
    </div>
  );
};

export default VoiceInput;
