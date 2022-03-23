const post = require('../models/PostModel');
const mongoose = require('mongoose');

// Display the detail of a post item by ID
exports.postItem = (req, res) => {
    const id = req.params.id;
    //show post, comments section, and comment input
    post.findById({
         _id: id
    }).then(result => {
        console.log("postRes", result)
         res.render(`./post/${id}`, {
             title: 'post content',
            //  oidc: req.oidc.user,
             postContent: result
         })
    }).catch(err => console.error(err));
}

// Get create post input/form
exports.postCreateGet = (req, res) => {
    console.log('postCreateGet', req)
    res.render('./create', {
        title: 'Upload an image or video',
        // render other objects
    })
}

// Create post on POST
exports.postCreatePost = (req, res, next) => {
    const newDate = new Date();

    const User = new mongoose.Types.ObjectId();
    const caption = req.body.caption;
    const url = req.body.url;
    const comments = [];
    const tags = [];
    const dateCreated = new Date(newDate);

    let postItem = {
    User,
    caption,
    url,
    comments,
    tags,
    dateCreated  
    }

    console.log('postItem', postItem)
    post.create(postItem);
    res.redirect('./');
     
}


exports.postDeleteGet = (req, res) => {
    const id = req.params.id;
    post.findById(id) 
        .then(result => {
            console.log("deleteGet", result)
            res.render(`./post/${id}/delete`, {
                title: 'Delete post',
                post: result
            })
        })
}

exports.postDeletePost = (req, res) => {
    const id = req.params.id;
    console.log("FromDELETE" , req.params)
    post.findOneAndDelete({
        _id: id,
    }, (err) => {
        if(err) {
            console.log(err);
        }
    });
    res.redirect('/post')
    // post.findOne({
    //     _id: id
    // }, (err, doc) => {
    //     console.log('DOC', doc)
    //     if(err){
    //         console.log(err)
    //     }
    //     if(doc._id === req.user.id){
    //         post.findOneAndDelete({
    //             _id: id,
    //         }, (err) => {
    //             if(err) {
    //                 console.log(err);
    //             }
    //         });
    //         res.redirect('/post')
    //     } else {
    //         res.redirect(`/post/${id}/delete`)
    //     }
    // })
}

exports.postUpdateGet = (req, res) => {
    post.findById(req.params.id) 
    .then(result => {
        console.log("UpdateGet", result)
        // res.render('./post/update', {
        //     title: 'Update post',
        //     post: result
        // })
    })
}

exports.postUpdatePost = (req, res) => {
    const newDate = new Date();
    const dateCreated = new Date(newDate);
    console.log("FromUPDATE" , req.oidc)
    post.findByIdAndUpdate({
        _id: req.params.id,
    }, {
        "caption": req.body.caption,
        "url": req.body.url,
        dateCreated: dateCreated
    },(err, doc) => {
        if(err){
            console.log(err)
        } else{
            console.log("Updated User : ", doc);
        }
    })
    res.redirect('/post')
    // post.findOne({
    //     _id: req.params.id
    // }, (result, err, doc) => {
    //     // console.log("FromUPDATERES" , result)
    //     if(err){
    //         console.log(err)
    //     }
    //     if(doc.User === req.oidc.user){
    //         post.findByIdAndUpdate({
    //             _id: req.params.id,
    //         }, {
    //             caption: "this is a updated caption",
    //             url: "this is a updated URL",
    //             // commentSection: null, <- find commentSection id
    //             dateCreated: dateCreated
    //         })
    //     }
    // })
}

exports.postUpdateComment = (req,res) => {
    console.log("res", req.params.id)
    const id = req.params.id;
    post.updateOne({
        _id: id
    }, {
        $push: {
            "comments": {
                "user": new mongoose.Types.ObjectId(),
                "comment": req.body.comment
            }
        },
        new: true
    }, (err) => {
        if (err) {
            console.error(err);
        }
    })
    res.redirect('/')
}