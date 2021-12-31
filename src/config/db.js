module.exports = {
    "username": process.env.name_user_db,
    "password": process.env.password,
    "database": process.env.database,
    "host": process.env.host,
    "dialect": "mysql",
    "define": {
        timestamps: true,
        underscored: true,
    },
}