// db.js
import mongoose from "mongoose";

const mongoURL = "mongodb://localhost:27017/second";

mongoose.connect(mongoURL, {
    useNewUrlParser: true,      
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

db.on("disconnected", () => {
    console.log("MongoDB is disconnected");
});

export default db;
