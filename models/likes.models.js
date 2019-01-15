var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var LikesSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    status: String
})

LikesSchema.plugin(mongoosePaginate)
const Likes = mongoose.model('Likes', LikesSchema)

module.exports = Likes;
