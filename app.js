var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.render("homepage.ejs");
})
app.listen(process.env.PORT,process.env.IP);