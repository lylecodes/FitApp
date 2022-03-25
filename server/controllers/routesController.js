const post = require('../models/PostModel');

exports.home = (req,res) => {
  post.find() 
    .then(results => {
        console.log("results", results)
        return res.send(results)
    })
    .catch(err => console.error(err));
}



