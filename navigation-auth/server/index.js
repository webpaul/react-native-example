const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', function(req, res) {
    console.log('Logging in ' + req.body.user);

    if(req.body.user == "bob" && req.body.pass == "jenkins")
        res.sendStatus(201);
    else
        res.sendStatus(404);
});

app.get('/', function(req, res) {
    console.log('Alive!');
    res.sendStatus(201);
});

app.listen(4000, function() {
    console.log('App listening on port 4000');
});
