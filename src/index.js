require("dotenv").config()
const express = require("express")
const http = require("http")
const socketio = require("socket.io")
const cors = require("cors")
const router = require("./routes")
require("./database")

const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const sockets = socketio(server)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

sockets.on("connection", (socket) => {
    console.log("New user connected")
    socket.on("message_front", (data) => {
        socket.broadcast.emit("message_back", data)
    })
})

app.use((err, req, res, next) => {
    return res.status(400).send({ error: err.message })
})

server.listen(port, () => {
    console.log("server rodanod na porta: " + port)
})