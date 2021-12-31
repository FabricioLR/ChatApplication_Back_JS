const TokenVerifyService = require("../services/TokenVerifyService")
const Message = require("../models/Message")

module.exports = {
    async TokenVeryfi(req, res, next){
        try {
            const { token } = req.body

            if (!token){
                return res.status(400).send({ error: "Invalid credential" })
            }

            const response = await TokenVerifyService.TokenVerify(token)
            
            return res.status(200).send({ success: true })
        } catch (error) {
            next(error)
        }
        
    },
    async SendMessage(req, res){
        const { username, message } = req.body

        if (!username || !message){
            return res.status(400).send({ error: "Invalid credentials" })
        }

        const msg = await Message.create({ username, message })

        return res.status(200).send({ success: true })
    },
    async GetMessages(req, res){
        const messages = await Message.findAll({ attributes: ["id", "username", "message"] })
        
        return res.status(200).send({ success: true, messages: messages })
    }
}