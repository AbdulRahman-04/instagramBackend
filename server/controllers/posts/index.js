import express from "express"
import postModel from "../../models/Posts/Posts.js";

const router = express.Router()

router.post("/registerPost", async (req, res)=>{
    try {

        let userInp = req.body;
        console.log(userInp);
        await postModel.create(userInp)
        res.status(200).json({msg: `post saved successfully!🙌`})
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


router.get("/getallPosts", async (req, res)=>{
    try {

        let getPosts = await postModel.find({})
        res.status(200).json(getPosts)
        
    } catch (error) {
        console.log(error);
        res.status(200).json(error)
    }
})

router.get("/getOnePost", async (req, res)=>{
    try {
 
        let getOnePost = await postModel.find({location: "Moscow, Russia"})
        res.status(200).json(getOnePost)
        
    } catch (error) {
        console.log();
        res.status(500).send(error)
    }
});

router.put("/editPost", async (req, res)=>{
    try {

        await postModel.updateOne({location: "Moscow, Russia"}, {$set: {caption: "i'm badass⚡"}})
        res.status(200).send("Post edited successfully!✅")
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


router.delete("/deleteOnePost", async (req, res)=>{
    try {
         
        let delPost = await postModel.deleteOne({location: "Moscow, Russia" });
        
        res.status(200).json({msg: `post deleted successfully!✅`})
        
    } catch (error) {
        console.log(error);
        res.status(200).send(error)
    }
})

router.delete("/deleteAllPosts", async(req, res)=>{
    try {

        let delallPosts = await postModel.deleteMany({})

        res.status(200).json({msg: `all posts deleted successfully!✅`})
        
    } catch (error) {
        console.log(error);
        res.status(200).send(error)
    }
})

export default router