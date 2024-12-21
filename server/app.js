import express from "express"
import config from "config"
import "./utils/dbConnect.js"
import postRouter from "./controllers/posts/index.js"
import storiesRouter from "./controllers/stories/index.js"
import userRouter from "./controllers/users/index.js"

const PORT = config.get("PORT")

const app = express()

app.use(express.json())

app.get("/home", (req, res)=>{
    try {

        res.status(200).json({msg: `this is the main home page of instagram🙌`})
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

app.use("/api", postRouter)
app.use("/api", storiesRouter)
app.use("/api", userRouter)




app.listen(PORT, ()=>{
    console.log(`Your server is running live at ${PORT}`);
    
})