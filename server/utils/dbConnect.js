import mongoose from "mongoose"
import config from "config"


async function dbConnect(){

    try {

        let dburl = config.get("DB_URL")
        await mongoose.connect(dburl);
        console.log(`DATABASE CONNECTED SUCCESSFULLY!🙌`);
        
        
    } catch (error) {
        console.log(error);
    }


}
dbConnect()