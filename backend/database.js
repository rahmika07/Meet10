 // Load environment variables
 const mongoose = require('mongoose');
 //const dotenv = require('dotenv');
 //dotenv.config()
 const connectDB = async () => {
   try {
     const dbURI = "mongodb://127.0.0.1:27017/week10"; // Use MONGO_URI from .env file
     await mongoose.connect(dbURI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     });
 
     console.log('MongoDB connected successfully');
   } catch (err) {
     console.error('Error connecting to MongoDB:', err.message);
     process.exit(1);
   }
 };
 
 module.exports = connectDB;