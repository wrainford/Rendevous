const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const commentSchema = new Schema({
     content: {
     type: String,
     required:true,
},
    user: {
     type: mongoose.Schema.Types.ObjectId, ref:"User"
    },
});

const postSchema = new Schema({
     title: {
     type: String,
     required:true,
},  
    body: {
     type: String,
     required:true,
},

    image:{
     type: [String],
},
    //this one for the post "who made the post"
    // user: {
    //  type: mongoose.Schema.Types.ObjectId, ref:"User"
    // },

    comment: [commentSchema]
});

module.exports = mongoose.model("Post", postSchema);