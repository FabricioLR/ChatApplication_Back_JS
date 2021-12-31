const User = require("../models/User")
const bcrypt = require("bcryptjs")

module.exports = {
    async Register(req, res){
        try {
            const { email, nome, senha } = req.body

            if (!nome || !senha || !email){
                return res.status(400).send({ error: "infalid credentials" }) 
            }

            if (await User.findOne({ where: { email: email } })){
                return res.status(400).send({ error: "user already exist" }) 
            }

            const new_senha = await bcrypt.hash(senha, 10)

            const user = await User.create({ nome, senha: new_senha, email })

            const token = user.GenerateToken(user.id)

            user.senha = undefined

            return res.status(200).send({ success: true, user: user, token: token })
        } catch (error) {
            return res.status(400).send({ error: "register failed, try again" })
        }
    },
    async Authenticate(req, res){
        try {
            const { email, senha } = req.body

            if (!senha || !email){
                return res.status(400).send({ error: "infalid credentials" }) 
            }

            const user = await User.findOne({ where: { email: email } })

            if (!user){
                return res.status(400).send({ error: "user not found" }) 
            }

            if (!await bcrypt.compare(senha, user.senha)){
                return res.status(400).send({ error: "email or password incorrect" })
            }

            const token = user.GenerateToken(user.id)

            user.senha = undefined

            return res.status(200).send({ success: true, user: user, token: token })
        } catch (error) {
            return res.status(400).send({ error: "authenticate failed, try again" })
        }
    }
}