const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = 3000;
const mongoose = require("mongoose");
const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");

const bodyParser = require('body-parser');
const cors = require('cors');
const homeRouter = require('./routes/routes');
const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');

require("dotenv").config();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use('/', homeRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

mongoose
  .connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true })
  .then(console.log("Mongo connected"))
  .catch((err) => console.error(err));

// const s3 = new AWS.S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// });

// const file = "./sample_video.mp4";
// const fileContent = fs.createReadStream(file);

// const params = {
//   Bucket: process.env.AWS_BUCKET_NAME,
//   Key: path.basename(file),
//   Body: fileContent,
// };

// s3.upload(params, (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(`File uploaded successfully. ${data}`);
// });
