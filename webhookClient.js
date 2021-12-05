const express = require("express")

const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.get("/", function(req, res) {
    console.log(req.body)
    res.send("response")
})
app.listen(8080, () => {
    console.log("server is listening...")
})