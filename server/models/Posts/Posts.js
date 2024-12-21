import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    posttype: {
        type: String,
        require: true
    },
    music: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    caption: {
        type: String,
        maxlength: 3000
    }
})

let postModel = mongoose.model("postDb", postSchema, "Posts")

export default postModel