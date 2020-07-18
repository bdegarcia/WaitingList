const path = require('path');
const express = require('express');
const app = express();
var PORT = process.env.PORT || 8080;
const currentTables = [
    {
        custName: "Jenny",
        custEmail: "jenny@me.com",
        custID: "Jenny",
        phoneNum: "3128675309"
      }
];

const waitingList = []

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/currenttables", function(req, res) {
    res.json(currentTables);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(waitingList);
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, 'tables.html'));
  });

  app.post("/api/index", function(req, res) {
    if(currentTables.length < 5 ){
        currentTables.push(req.body)
    } else{
        waitingList.push(req.body)
    }
  })

