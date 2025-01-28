// const mongoose = require('mongoose');

// const mongoURI = "mongodb://127.0.0.1:27017/?readPreference=primary&appname=MongoDB Compass&directConnection=true&ssl=false";

// const connectToMongo = () =>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to Mongo Succssfully");
//     })
// }
// module.exports = connectToMongo;



const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/inotebook?readPreference=primary&appname=MongoDB Compass&directConnection=true&ssl=false";
// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB Compass&directConnection=true&ssl=false";

const connectToMongo = () => {
    mongoose.connect(mongoURI)
        .then(() => { 
            console.log("Connected to MongoDB successfully");
        })
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err);
        });
};

module.exports = connectToMongo;