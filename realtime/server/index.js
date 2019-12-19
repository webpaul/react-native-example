const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');
const cors = require('cors');

const pusherClient = new Pusher({
    appId: '919748',
    key: 'd3a87ec6fd5b2ec2c208',
    secret: '46a96aa62f4e4ec48e2e',
    cluster: 'us2',
    encrypted: true
  });

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.put('/users/:name', function(req, res) {
    console.log('User joined: ' + req.params.name);
    pusherClient.trigger('chat', 'join', {
        name: req.params.name
    });
    res.sendStatus(204);
});

app.delete('/users/:name', function(req, res) {
    console.log('User left: ' + req.params.name);
    pusherClient.trigger('chat', 'part', {
        name: req.params.name
    });
    res.sendStatus(204);
});

app.post('/users/:name/messages', function(req, res) {
    console.log('User ' + req.params.name + ' sent message: ' + req.body.message);
    pusherClient.trigger('chat', 'message', {
        name: req.params.name,
        message: req.body.message
    });
    res.sendStatus(204);
});

app.get('/', function(req, res) {
    console.log('Alive!');
    res.sendStatus(201);
});

app.listen(4000, function() {
    console.log('App listening on port 4000');
});
