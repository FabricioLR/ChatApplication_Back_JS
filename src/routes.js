const express = require("express")
const router = express.Router()
const UserController = require("./controllers/UserController")
const ChatController = require("./controllers/ChatController")

router.post("/Register", UserController.Register)
router.post("/Authenticate", UserController.Authenticate)

router.post("/TokenVerify", ChatController.TokenVeryfi)

router.post("/SendMessage", ChatController.SendMessage)
router.get("/GetMessages", ChatController.GetMessages)

module.exports = router