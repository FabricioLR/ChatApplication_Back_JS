const jwt = require("jsonwebtoken")
const authToken = require("../config/token.json")

module.exports = (req, res, next) => {
    try {
        const token = req.headers.token

        if (token === null || token === undefined || token === "" || token === "null"){
            return res.status(400).send({ error: "token must be provided"})
        }
        jwt.verify(token, authToken.SECRET, (err, decoded) => {
            if (err) return res.status(400).send({ error: "token expired" })

            req.UserId = decoded.id
            return next()
        })
    } catch (error) {
        return res.status(400).send({ error: "validation token error" })
    }
}