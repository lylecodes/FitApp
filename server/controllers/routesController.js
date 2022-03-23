const user = require('../models/UserModel');
const comment = require('../models/CommentModel');
const commentSection = require('../models/CommentSectionModel');
const media = require('../models/PostModel');
const stats = require('../models/StatsModel');


exports.home = (req,res) => {
  media.find() 
    .then(results => {
        console.log("results", results)
        //render 
    })
    .catch(err => console.error(err));
}



