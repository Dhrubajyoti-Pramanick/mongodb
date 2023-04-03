const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('strictQuery', false);

const mongoDB = 'mongodb+srv://Dhrubajyoti:dhruba29@cluster0.ftljdlo.mongodb.net/?retryWrites=true&w=majority';

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
    console.log("connected!!");
}

const catSchema = Schema({
    name : String,
    breed : String,
    age : Number,
    color : String,
    sex : String
})
const Cat = mongoose.model('Cat', catSchema);
// const Cat = mongoose.model('Cat', {
//     name : String,
//     breed : String,
//     age : Number,
//     color : String,
//     sex : String
// });
const kitty = new Cat({ 
    name: 'pushi', 
    breed: 'local', 
    age: '1', 
    color: 'white', 
    sex: 'female' 
});

kitty.save().then(() => console.log('meow'));