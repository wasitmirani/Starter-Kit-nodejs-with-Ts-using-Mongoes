
// Set up mongoose connection
const mongoose = require('mongoose');
let db_url = 'mongodb://localhost:27017/?readPreference=primary&directConnection=true&ssl=false';
const mongoDB = process.env.MONGODB_URI || db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


export =db;