require("dotenv").config()
const express = require("express")
const cors = require("cors")
const router = require("./routes")
require("./database")

const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

app.use((err, req, res, next) => {
    return res.status(400).send({ error: err.message })
})

app.listen(port, () => {
    console.log("server rodanod na porta: " + port)
})