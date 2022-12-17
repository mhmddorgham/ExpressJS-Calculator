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
  //get the first Number
  let fNum = req.body.fnum;
  //get the second Number
  let sNum = req.body.snum;
  // get the operation:
  let operation = req.body.operation;
  //add if statements:
  let result = 0;
  //add operation
  if (operation == "add") {
    //add both numbers
    result = +fNum + +sNum;
  }
  //multiply operation
  else if (operation == "multiply") {
    //add both numbers
    result = +fNum * +sNum;
  }
  //subtact operation
  else if (operation == "subtact") {
    //add both numbers
    result = +fNum - +sNum;
  }

  //divide operation
  else if (operation == "divide") {
    //add both numbers
    result = +fNum / +sNum;
  }
  //other:
  else {
    result = 0;
  }

  //After geting the information to server side, and output the result, send the result to the client side 
  // Show the result in the page:
  // Send the result to the client side 
  res.send("The result of calculation is " + result);
})



app.listen(3000, () => {
  console.log("Server running on port 3000");
})