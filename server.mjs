import * as http from 'http';
import * as db from './weatherdb.mjs';
const port= 8081;
http.createServer((req,res)=>{
    if(req.url === '/Kolkata'){
        res.write("hello");
        db.weatherInfo.save().then(()=> console.log('kolkata added!!'));
        res.end();
    }
}).listen(port,()=>{
    console.log("server started!!")
})