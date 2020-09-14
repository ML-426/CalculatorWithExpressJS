
const express = require("express");
const bodyParser = require("body-parser");   // 1. require body-parser package to incorporate with express


// jshint esversion:6

const app = express();
app.use(bodyParser.urlencoded({extended:true}));  // 2. body-parser works with express, urlencoded : for html file

app.get("/", function(req, res) {
 res.sendFile(__dirname + "/index.html");

});

app.post("/", function (req, res) {
    
   var num1 = Number(req.body.num1);
   var num2 = Number(req.body.num2);
   var result = num1 +  num2;
    
    res.send("The result of that calculation is" +  result);
});

// practice Q for calculator
app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res) {
   
    var weight = parseFloat(req.body.weight); // 3. body-parser used, request from hmtl file of weight and height data, so that can calculate 
    var height = parseFloat(req.body.height);
    
    var bmi = weight / (height * height);
    res.send("Your BMI is  "  + bmi);
});


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});