import express from "express"
import userModel from "../../models/Users/Users.js";

const router = express.Router()

router.post("/registerUser", async (req, res)=>{
    try {

        let userInp = req.body;
        console.log(userInp);
        await userModel.create(userInp)
        res.status(200).json({msg: `user saved successfully!🙌`})
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


router.get("/getallUsers", async (req, res)=>{
    try {

        let users = await userModel.find({});
        console.log(users);
        res.status(200).json(users)
        
    } catch (error) {
        console.log(error);
        res.status(200).json(error)
    }
})

router.get("/getOneUser", async  (req, res)=>{
    try {
          
        let oneUser = await userModel.find({username: "abdul"})
        res.status(200).json({msg: `ONE USER IS HERE`})
        
    } catch (error) {
        console.log();
        res.status(500).send(error)
    }
});

router.put("/editUser", async (req, res)=>{
    try {

        let editUser = await userModel.updateOne({username: "abdul"}, {$set: {password: "12345"}}, {new: true});
        console.log(editUser);
        res.status(200).send("EDITED USER IS HERE🙌")
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


router.delete("/deleteOneUser", async (req, res)=>{
    try {
          
        await userModel.deleteOne({name: "abdul"})
        res.status(200).json({msg: `user deleted successfully!✅`})
        
    } catch (error) {
        console.log(error);
        res.status(200).send(error)
    }
})

router.delete("/deleteAllUsers", async (req, res)=>{
    try {
       
        await userModel.deleteMany({})
        res.status(200).json({msg: `all users deleted successfully!✅`})
        
    } catch (error) {
        console.log(error);
        res.status(200).send(error)
    }
})

export default router