import React, { useEffect, useRef } from 'react'
import SpeechRecognition, { useSpeechRecognition } from  'react-speech-recognition';
import { useState } from 'react';

function Voice() {
    const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [language, setLanguage] = useState('en-US'); // Default language
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Check for browser support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    // Initialize SpeechRecognition instance
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = language;

    recognition.onresult = (event) => {
      // Get the last result and append it to transcript
      const lastIndex = event.results.length - 1;
      const resultText = event.results[lastIndex][0].transcript;
      setTranscript(prev => prev + ' ' + resultText);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognitionRef.current = recognition;

    // Cleanup on component unmount
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []); // run once on mount

  // Update recognition language when language state changes
  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = language;
    }
  }, [language]);

  // Toggle recording state
  const handleToggle = () => {
    if (!recognitionRef.current) return;

    if (!listening) {
      try {
        recognitionRef.current.start();
        setListening(true);
      } catch (error) {
        console.error("Error starting speech recognition:", error);
      }
    } else {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  return (
<>
<div className="p-6 flex flex-col items-center space-y-4">
      {/* Language Selection */}
      <div className="flex space-x-2 items-center">
        <label htmlFor="language" className="font-medium text-gray-700">
          Select Language:
        </label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border rounded px-2 py-1 focus:outline-none"
        >
          <option value="en-US">English</option>
          <option value="ar-SA">Arabic</option>
        </select>
      </div>

      {/* Record/Stop Button */}
      <button
        onClick={handleToggle}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2 focus:outline-none"
      >
        {listening ? (
          // Stop icon: a square icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <rect x="6" y="6" width="12" height="12" />
          </svg>
        ) : (
          // Microphone icon: indicates ready to record
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 1v11m-4 0a4 4 0 118 0v4a4 4 0 01-8 0v-4z"
            />
          </svg>
        )}
        <span>{listening ? 'Stop' : 'Record'}</span>
      </button>

      {/* Display Transcript */}
      <div className="w-full max-w-md p-4 border rounded">
        <p className="text-gray-800 whitespace-pre-wrap">{transcript}</p>
      </div>
    </div>
</>

  )
}

export default Voice