const fs = require("fs")
const http = require("http")
const url = require("url")
const app = require("./app")
const hostname = "127.0.0.1"
const port = 3010

const server = http.createServer(app)

server.listen(port,hostname, () => {console.log("Server Listen on Port" + port);})