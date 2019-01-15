var Likes = require('../models/likes.models')
_this = this

exports.getLikes = async function(){

    try {
        var likes = await Likes.find({}).count()
        console.log("Likes service - getLikes:" + likes)
        return likes;

    } catch (e) {
        throw Error('Error while fetching likes')
    }
}

exports.addLikes = async function(){

    var newLike = new Likes({
        date: new Date()
    })

    try{
      var savedLike = await newLike.save()
      console.log("Likes Service - addLikes:" + savedLike);
      return savedLike;

    } catch(e){
        throw Error("Error while adding Like")
    }
}
