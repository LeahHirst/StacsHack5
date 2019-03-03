const express = require('express');
const app = express();
const port = 3000;
const { spawn } = require('child_process');
const modelPath = '../../model/smartreply.tflite';
const script = '/Users/adamhirst/tensorflow/bazel-bin/tensorflow/lite/models/smartreply/demo/app/src/main/test';

app.get('/api', (req, res) => {
    const message = req.query.message;
    predict(message, (success) => {
        res.send(success);
    }, (err) => {
        res.send(err);
    })
});


function predict(message, callback, err) {
    console.log([modelPath, message]);
    const child = spawn(script, [modelPath, message]);
    child.stdout.on('data', (data) => {
        data = `${data}`;
        if (data === undefined || data === '' || data.split === undefined) { err('An error occurred'); return; }
        let lines = data.split('\n');
        lines = lines.map(line => {
            let values = line.split(', ');
            return { text: values[0], score: values[1] };
        });
        lines = lines.slice(0, lines.length - 1);
        callback(lines);
    });
    child.stdout.on('error', err);
}

app.listen(port, () => console.log('Running on port ' + port));