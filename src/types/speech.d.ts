
interface Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
}

declare var webkitSpeechRecognition: {
  prototype: SpeechRecognition;
  new(): SpeechRecognition;
};
