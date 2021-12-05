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
app.use(bodyParser.json());
app.post("/", (request,response) => {
    console.log(request.json);
    response.send("posted")
    });
app.listen(8080, () => {
    console.log("server is listening...")
})

var exec = require('child_process').exec
function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};
// getLastCommitMessage = new Promise((res) => execute("git log -1 --pretty=%B", output => res(output.trim())))
// getLastCommitMessage.then(result => console.log(result))

timestamp = Date.now()
incrementCommit = new Promise((res) => 
    execute(`git add . && git commit -m "${timestamp}" && git push`, output => res(output)
))

// getGitUser = function (callback){
//     execute("git config --global user.name", function(name){
//         execute("git config --global user.email", function(email){
//             callback({ name: name.replace("\n", ""), email: email.replace("\n", "") });
//         });
//     });
// };
// getGitUser(console.log)