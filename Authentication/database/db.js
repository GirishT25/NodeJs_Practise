const mongoose = require('mongoose');
const DatabaseConnection = async ()=>{

    try {
        await mongoose.connect("mongodb://localhost:27017/DEMODB");
        console.log("Database connected successfully");
        
    } catch (error) {
        console.error('Error in connecting the database', error);
    }
}

// module.exports = DatabaseConnection;
