import React, { useEffect, useRef } from 'react'
import SpeechRecognition, { useSpeechRecognition } from  'react-speech-recognition';
import { useState } from 'react';
import voiceMessage from '../../assets/images/RecordingButton.svg'

function Voice() {
    const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [language, setLanguage] = useState('en-US'); 
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
        <button type="submit"  onClick={handleToggle}  className="items-end w-8">
                         
        {listening ? (
          // Stop icon: a square icon
          <img src={voiceMessage} alt="Send voice message icon"  className='bg-green-600' />
     
        ) : (
          // Microphone icon: indicates ready to record
          <img src={voiceMessage} alt="Send voice message icon" className='bg-red-800'  />
     
        )}
        <span>{listening ? 'Stop' : 'Record'}</span>
      </button>

      {/* Display Transcript */}
      <div className="w-full max-w-md p-4 border rounded">
        <p className="text-white whitespace-pre-wrap">{transcript}</p>
      </div>
    </div>
</>

  )
}

export default Voice