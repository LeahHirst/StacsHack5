const SpeechSynthesisUtterance = window.SpeechSynthesisUtterance;

export function textToSpeech(text, callback) {
    // Uses HTML5 SpeechSynthesisUtterance
    // Due to a known bug, we need to store the msg in a global var, otherwise
    // the onend callback does not always fire.
    window.utterances = [];
    var msg = new SpeechSynthesisUtterance();
    // var voices = window.speechSynthesis.getVoices();
    // msg.voice = voices[voiceId]; // Note: some voices don't support altering params
    msg.voiceURI = 'native';
    msg.volume = 1; // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = 1; //0 to 2
    msg.lang = 'en-US';
    msg.onend = callback; // End callback
    window.utterances.push(msg);

    msg.text = text;
    speechSynthesis.speak(msg);
}