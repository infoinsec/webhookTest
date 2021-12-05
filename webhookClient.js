const process = require('process')
process.title = "webhookClient";
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())
app.get("/", function(req, res) {
    console.log(req.body)
    res.send("response")
})
app.get("/exit", function(req, res) {
    res.send("exiting...")
    process.exit(1)
})
app.get("/update", function(req, res) {
    res.send("updating...")
    process.exit(1)
})
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/", (request,response) => {
    console.log(request.body);
    response.send("posted")
    });
app.listen(8080, () => {
    console.log("server is listening...")
})
