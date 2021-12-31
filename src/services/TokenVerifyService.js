const jwt = require("jsonwebtoken")

module.exports = {
    async TokenVerify(token){
        if (!jwt.verify(token, process.env.SECRET)){
            throw new Error("invalid token, try again")
        }

        const decoded = jwt.verify(token, process.env.SECRET)

        return decoded.id
    }
}