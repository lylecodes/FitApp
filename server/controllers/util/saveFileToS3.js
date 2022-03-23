const AWS = require("aws-sdk");

const saveFileToS3 = (filename, blob) => {
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: filename,
    Body: blob,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data}`);
  });
};

module.exports.saveFileToS3 = saveFileToS3;
