const webkitSpeechRecognition = window.webkitSpeechRecognition;

export function startTranscribing(callback) {
    if (!('webkitSpeechRecognition' in window)) {
        alert('Your browser is currently not supported! Please use an up to date webkit browser such as Chrome or Opera');
    } else {
        let final = '';
        let recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = (event) => {
            let interim = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final += event.results[i][0].transcript;
                } else {
                    interim += event.results[i][0].transcript;
                }

                if (interim == '') {
                    callback({ type: 'final', message: final });
                    final = '';
                } else {
                    callback({ type: 'interim', message: interim })
                }
            }
        }

        recognition.onerror = err => {
            console.log(err);
        }

        recognition.onend = () => {
            setTimeout(() => recognition.start(), 300);
        }

        recognition.start();
    }
}