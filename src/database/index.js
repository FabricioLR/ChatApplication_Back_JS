const Sequelize = require("sequelize")
const dbconfig = require("../config/db")

const User = require("../models/User")
const Message = require("../models/Message")

const connection = new Sequelize(dbconfig)

User.init(connection)
Message.init(connection)

module.exports = connection