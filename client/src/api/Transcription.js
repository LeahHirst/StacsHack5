const webkitSpeechRecognition = window.webkitSpeechRecognition;

function initRecognition(callback, running) {
    let recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    let final = '';

    recognition.onresult = (event) => {
        let interim = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final += event.results[i][0].transcript;
            } else {
                interim += event.results[i][0].transcript;
            }

            if (interim == '') {
                if (running()) callback({ type: 'final', message: final });
                final = '';
            } else {
                if (running()) callback({ type: 'interim', message: interim })
            }
        }
    }

    recognition.onerror = err => {
        console.log(err);
    }

    recognition.start();

    return recognition;
}

export function startTranscribing(callback) {
    if (!('webkitSpeechRecognition' in window)) {
        alert('Your browser is currently not supported! Please use an up to date webkit browser such as Chrome or Opera');
    } else {
        let running = true;
        let recognition = initRecognition(callback, () => running);

        let pause = () => {
            running = false;
            recognition.stop();
        };
    
        let resume = () => {
            running = true;
            setTimeout(() => { recognition = initRecognition(callback) }, 300);
        }
        
        return {
            pause,
            resume
        }
    }
}