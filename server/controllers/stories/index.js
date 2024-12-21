import express from "express"
import storiesModel from "../../models/Stories/Stories.js";
const router = express.Router()

router.post("/registerStory", async (req, res)=>{
    try {

        let userInp = req.body;
        console.log(userInp);
        await storiesModel.create(userInp) 
        res.status(200).json({msg: `story uploaded successfully!🙌`})
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


router.get("/getallStories", async (req, res)=>{
    try {
        
      let allStories =  await storiesModel.find({})
        res.status(200).json(allStories)
        
    } catch (error) {
        console.log(error);
        res.status(200).json(error)
    }
})

router.get("/getOneStory", async  (req, res)=>{
    try {

        let oneStry = await storiesModel.find({})

        res.status(200).json(oneStry)
        
    } catch (error) {
        console.log();
        res.status(500).send(error)
    }
});

router.put("/editstory", async  (req, res)=>{
    try {

        await storiesModel.updateOne({storyArchive: "12/10/24"}, {$set: {storyViewers: 25}}, {new: true})
        res.status(200).send("STORY EDITED SUCCESSFULLY🙌")
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


router.delete("/deleteOneStory", async (req, res)=>{
    try {

        let del = await storiesModel.deleteOne({storyArchive: "12/10/24"})
        console.log(del);
        
        res.status(200).json({msg: `story deleted successfully!✅`})
        
    } catch (error) {
        console.log(error);
        res.status(200).send(error)
    }
})

router.delete("/deleteAllStories", async  (req, res)=>{
    try {
       
        await storiesModel.deleteMany({})
        res.status(200).json({msg: `all stories deleted successfully!✅`})
        
    } catch (error) {
        console.log(error);
        res.status(200).send(error)
    }
})

export default router