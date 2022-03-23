const post = require("../models/PostModel");
const mongoose = require("mongoose");
const { saveFileToS3 } = require("util");

// Display the detail of a post item by ID
exports.postItem = (req, res) => {
  const id = req.params.id;
  //show post, comments section, and comment input
  post
    .findById({
      _id: id,
    })
    .then((result) => {
      console.log("postRes", result);
      res.render(`./post/${id}`, {
        title: "post content",
        //  oidc: req.oidc.user,
        postContent: result,
      });
    })
    .catch((err) => console.error(err));
};

// Get create post input/form
exports.postCreateGet = (req, res) => {
  console.log("postCreateGet", req);
  res.render("./create", {
    title: "Upload an image or video",
    // render other objects
  });
};

// Create post on POST
exports.postCreatePost = (req, res) => {
  const newDate = new Date();

  const User = new mongoose.Types.ObjectId();
  const caption = req.body.caption;
  // name must contain file extension
  const mediaName = req.body.mediaName;
  const comments = [];
  const tags = [];
  const dateCreated = new Date(newDate);
  // this comes from state variable and is added to post request
  const mediaBlob = req.body.mediaBlob;

  let postItem = {
    User,
    caption,
    mediaName,
    comments,
    tags,
    dateCreated,
  };

  console.log("postItem", postItem);

  try {
    saveFileToS3(mediaName, mediaBlob);
    post.create(postItem);
    res.redirect("./");
  } catch (err) {
    console.error(err);
  }
};

// Get post to delete
exports.postDeleteGet = (req, res) => {
  const id = req.params.id;
  post.findById(id).then((result) => {
    console.log("deleteGet", result);
    res.render(`./post/${id}/delete`, {
      title: "Delete post",
      post: result,
    });
  });
};

// Delete post on POST
exports.postDeletePost = (req, res) => {
  const id = req.params.id;
  console.log("FromDELETE", req.params);
  post.findOneAndDelete(
    {
      _id: id,
    },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  res.redirect("/post");
  // authenticated owner of post delete function here
};

// Get post to update
exports.postUpdateGet = (req, res) => {
  post.findById(req.params.id).then((result) => {
    console.log("UpdateGet", result);
    res.render("./post/update", {
      title: "Update post",
      post: result,
    });
  });
};

// Update post on POST
exports.postUpdatePost = (req, res) => {
  const newDate = new Date();
  const dateUpdated = new Date(newDate);
  console.log("FromUPDATE", req.oidc);
  post.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    {
      caption: req.body.caption,
      url: req.body.url,
      $push: {
        tags: {
          $each: [req.body.tags],
        },
      },
      dateUpdated: dateUpdated,
    },
    (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Updated Post : ", doc);
      }
    }
  );
  // authenticated owner of post delete function here
  res.redirect("/post");
};

// Update comment post on POST
exports.postUpdateComment = (req, res) => {
  console.log("res", req.params.id);
  const id = req.params.id;
  post.updateOne(
    {
      _id: id,
    },
    {
      $push: {
        comments: {
          user: new mongoose.Types.ObjectId(),
          comment: req.body.comment,
        },
      },
      new: true,
    },
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
  res.redirect("/");
};
