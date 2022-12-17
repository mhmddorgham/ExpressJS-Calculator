const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//Get the index.html file:
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})


// get the infromation from the form and do action
app.post("/", (req, res) => {
  //get the first Numer
  let fNum = req.body.fnum;
  //get the second number
  let sNum = req.body.snum;
  //add both numbers
  let result = +fNum + +sNum;

  // show the result in the page:
  res.send("The result of calculation is " + result);
})



app.listen(3000, () => {
  console.log("Server running on port 3000");
})