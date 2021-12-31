const { Model, DataTypes } = require("sequelize")
const jwt = require("jsonwebtoken")

class User extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
        }, {
            sequelize,
        })

        User.prototype.GenerateToken = function(id){
            const token = jwt.sign({ id: id }, process.env.SECRET, {
                expiresIn: 86400
            })
            return token
        }

        return User
    }
}
module.exports = User