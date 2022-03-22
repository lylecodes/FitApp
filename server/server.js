const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = 3000;
const mongoose = require("mongoose");

const homeRouter = require('./routes/routes');
const mediaRouter = require('./routes/mediaRoutes');
const userRouter = require('./routes/userRoutes');

require("dotenv").config();

app.use('/', homeRouter);
app.use('/media', mediaRouter);
app.use('/user', userRouter);

mongoose
  .connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true })
  .then(console.log("Mongo connected"))
  .catch((err) => console.error(err));

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
