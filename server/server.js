const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const PORT = 3000;
const mongoose = require("mongoose")

require("dotenv").config();

mongoose
    .connect(process.env.MONGO_CONNECTION)
    .then(console.log("Mongo connected"))
    .catch(err => console.error(err))

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});


