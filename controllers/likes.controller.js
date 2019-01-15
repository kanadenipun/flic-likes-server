var LikesService = require('../services/likes.service')

_this = this

exports.getLikes = async function(req, res, next){

    try{
        var likes = await LikesService.getLikes()
        console.log("Likes Controller - getLikes:" + likes)
        return res.status(200).json({status: 200, data: likes, message: "Succesfully Likes Recieved"});

    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.addLikes = async function(req, res, next){

    // Req.Body contains the form submit values.
    console.log("called addlikes");
    try{
        var createdLike = await LikesService.addLikes()
        console.log("Likes Controller - addLikes:" + createdLike)
        return res.status(201).json({status: 201, data: createdLike, message: "Succesfully Created Likes"})

    }catch(e){
        console.log(e);
        return res.status(400).json({status: 400, message: "Likes Creation was Unsuccesfull"})
    }
  }
