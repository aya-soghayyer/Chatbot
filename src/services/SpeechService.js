// src/services/SpeechService.js
class SpeechService {
  constructor() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      throw new Error("Speech Recognition not supported");
    }
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = false;
  }

  setLanguage(lang) {
    this.recognition.lang = lang;
  }

  start(onResult, onError) {
    this.recognition.onresult = (event) => {
      const lastIndex = event.results.length - 1;
      const text = event.results[lastIndex][0].transcript;
      onResult(text);
    };
    this.recognition.onerror = onError;
    this.recognition.start();
  }

  stop() {
    this.recognition.stop();
  }

  cleanup() {
    this.recognition.stop();
  }
}

export default SpeechService;