const express = require('express');
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

// Home Route: Normal Calculator

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);

    const result = num1 + num2;

    res.send("The calculation result is: " + result);
})

// BMI Calculator Route

app.get("/bmiCalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", (req, res) => {
    const height = Number(req.body.height) / 100;
    const weight = Number(req.body.weight);

    console.log(weight, height);
    const bmi = (weight / (height ** 2)).toFixed(1);

    res.send("Your BMI is " + bmi + ".");
})

// -------------------

app.listen(port, () => {
    console.log("Server has now started on port " + port);
});