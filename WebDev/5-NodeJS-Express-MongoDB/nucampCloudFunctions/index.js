const express = require('express');
const app = express();
const campsiteRouter = require('./routes/campsiteRouter');
app.use('/campsites', campsiteRouter);
app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('This is an Express Server');
});
exports.myExpressApp = app;