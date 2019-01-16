const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/dist/maxtibank')));

app.get('/*', function (_req, res) {

    res.sendFile(path.join(__dirname, '/dist/maxtibank/index.html'));
});

app.listen(process.env.PORT || 8080);