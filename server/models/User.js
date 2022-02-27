const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const projectSchema = new Schema({
//      title: {
//      type: String,
//      required:true,
// },
// url:{
//      type: String,
//      required:true,
// },
// image:{
//      type:String,
// }
// });

const userSchema = new Schema({
   name: {
       type: String,
       required: true, 
   },
   avatar: {
       type: String,
       default: true,
   },
   userName: {
     type: String,
     required: true, 
     unique: true,
 },
   email: {
       type: String,
       required: true,
       unique: true,
   },
   password: {
       type: String, 
       required: true,
       //specifies default path selection behavior aka false excludes "password" from query results by default
       select: false
   },
   language: {
     type: String,
 },
 bio: {
     type: String,
     
 },
 gitHub: {
     type: String,
     
 },
 youTube: {
     type: String,
 },
// project:[projectSchema],

// post: {
//       type: mongoose.Schema.Types.ObjectId, ref:"Post"
//      },   
});

module.exports = mongoose.model("User", userSchema);

