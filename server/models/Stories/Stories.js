import mongoose from "mongoose"

const storiesSchema = new mongoose.Schema({
   stroiesType: {
    type: {String},
    require: true
   }, 
   storyViewers: {
    type: Number,
    require: true
   },
   storyArchive: {
    type: String,
    require: true
   }   
})

let storiesModel = mongoose.model("storyDb", storiesSchema, "Stories")

export default storiesModel