const { Model, DataTypes } = require("sequelize")

class Message extends Model{
    static init(sequelize){
        super.init({
            username: DataTypes.STRING,
            message: DataTypes.STRING,
        }, {
            sequelize,
            timestamps: false
        })
    }
}
module.exports = Message