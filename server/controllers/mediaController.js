const media = require('../models/MediaModel');

// Display the detail of a media item by ID
exports.mediaItem = (req, res) => {
    const id = req.params.id;
    //show media, comments section, and comment input
    media.findById({
         _id: id
    }).then(result => {
        console.log("mediaRes", result)
         res.render(`./media/${id}`, {
             title: 'Media content',
             oidc: req.oidc.user,
             mediaContent: result
         })
    }).catch(err => console.error(err));
}

// 
exports.mediaCreateGet = (req, res) => {
    res.render('./create', {
        title: 'Upload an image or video',
        // render other objects
    })
}

exports.mediaCreatePost = (req, res) => {

    const newDate = new Date();

    const user = req.params.oidc.user._id 
    const caption = req.body.caption
    const url = req.body.url
    // const commentSection = null <- find commentSection id
    const dateCreated = new Date(newDate);

    let mediaItem = {
    user,
    caption,
    url,
    // commentSection,
    dateCreated  
    }

    media.create(mediaItem);
    res.redirect('./');
     
}

exports.mediaDeleteGet = (req, res) => {
    media.findById(req.params.id) 
        .then(result => {
            console.log("deleteGet", result)
            res.render('./media/delete', {
                title: 'Delete media',
                media: result
            })
        })
}

exports.mediaDeletePost = (req, res) => {
    media.findOne({
        _id: req.params.id
    }, (err, doc) => {
        if(err){
            console.log(err)
        }
        if(doc.createBy === req.oidc.user.email){
            media.findOneAndDelete({
                _id: req.params.id,
            }, (err) => {
                if(err) {
                    console.log(err);
                }
            });
            res.redirect('/media')
        } else {
            res.redirect(`/media/${req.params.id}/delete`)
        }
    })
}

exports.mediaUpdateGet = (req, res) => {
    media.findById(req.params.id) 
    .then(result => {
        console.log("UpdateGet", result)
        res.render('./media/update', {
            title: 'Update media',
            media: result
        })
    })
}

exports.mediaUpdatePost = (req, res) => {
    const newDate = new Date();
    const dateCreated = new Date(newDate);
    media.findOne({
        _id: req.params.id
    }, (err, doc) => {
        if(err){
            console.log(err)
        }
        if(doc.createdBy === req.oidc.user.email){
            media.findByIdAndUpdate({
                _id: req.params.id,
            }, {
                user: req.oidc.user._id,
                caption: req.body.caption,
                url: req.body.url,
                // commentSection: null, <- find commentSection id
                dateCreated: dateCreated
            })
        }
    })
}