// const mongoose = require('mongoose');
import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
mongoose.set('strictQuery', false);
// mongodB server link
const mongoDB = 'mongodb+srv://Dhrubajyoti:dhruba29@cluster0.ftljdlo.mongodb.net/?retryWrites=true&w=majority';
// connecting to online database
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
    console.log("connected!!");
}

// data skeleton 
const weatherSchema = Schema({
    location : String,
    tempF : Number,
    condition : String
})

const Weather = mongoose.model('Weather', weatherSchema);
export const weatherInfo = new Weather({
    location : 'kolkata',
    tempF : 89,
    condition : 'cloudy'
});

