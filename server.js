const express = require(‘express’);
const app = express();
const https = require(‘https’);
const fs = require(‘fs’);
const optionSSL = {
 key: fs.readFileSync(“./server.key”),
 cert: fs.readFileSync(“./server.crt”)
};
app.use(express.static(‘public’));
const server= https.createServer(optionSSL, app);
server.listen(443);