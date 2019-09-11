const app = require("./app");
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const repository = require("./repository");

//https://github.com/arcuri82/web_development_and_api_design/blob/master/les08/authentication/src/server/server.js
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.listen(port, () => {
    repository.initWithPokemon();
    console.log('Started server on port ' + port);
});

app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});

app.use(express.static('public'));

