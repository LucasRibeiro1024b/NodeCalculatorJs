const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);

    let result = num1 + num2;

    res.send("The result is: " + result);
});

app.get("/bmiCalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
    // console.log(req.body);
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmi = weight / (height * height);

    res.send('Your BMI is <b>'+ bmi +'</b>');
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});