const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("<h1>Home</h1>")
})

app.get("/contact", function(req,res){
    res.send("<h1>Contact Us Page</h1>")
})

app.listen(8080, function(){
    console.log("server has started on port 8080")
});