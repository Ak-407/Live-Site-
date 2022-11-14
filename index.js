const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { url } = require("inspector");
const { request } = require("http");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", function(req, rec){
    rec.sendFile(__dirname+"/intex.html");
})

app.get("/gmail.com", function(req, rec){
rec.sendFile(__dirname+"/gmail.html");
})



app.post("/gmail.html", function(req, rec){
    var firstname= req.body.firstname;
    var number= req.body.number;
    console.log(firstname);});



// app.post("/gmail.html", function(req, rec){
//     var firstname= req.body.firstname;
//     var number= req.body.number;
//     var email = req.body.email;
//     var status = req.statusCode;
//     var data = {
//         members:[
//             {
//             email_address:email,
//             status:"subscribed",
//             merge_fields:{
//                 FNAME:firstname,
//                 LNAME:number
//             }
        
//         } ]
//     }
   
//     var jasondata= JSON.stringify(data);
//     const url = "https://us21.api.mailchimp.com/3.0/lists/131c581c15";
//     const options={
//         method:"post",
//         auth:"amaan1:a86aa178802c5a734218736bfe304544-us21",
//     }


//    const request = https.request(url, options, function(responce){
//     responce.on("data", function(data){
//         console.log(JSON.parse(data));
//         if(responce.statusCode === 200){
//             console.log("done");
//             }
//             else{
//                 console.log("not done");
//             }
//     });
//     });
//     request.write(jasondata);
//     request.end();
// });


app.listen(2000, function(){
    console.log("port is running");
})